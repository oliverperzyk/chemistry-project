/**
 * @summary Utilities for material article heading navigation.
 * @description Creates unique Polish-friendly anchors & selects the section at the reading offset.
 */
class ArticleHeadingsManager {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation & inheritance.
     */
    private constructor() {}

    /**
     * @summary Creates a unique heading anchor.
     * @description Normalizes Polish characters & reserves the generated identifier, adding a numeric suffix on collisions.
     * @param title - Visible heading text.
     * @param reservedIds - Existing document identifiers, updated with the generated anchor.
     * @returns Unique identifier suitable for a fragment link.
     */
    public static createId(title: string, reservedIds: Set<string>): string {
        const slug =
            title
                .toLowerCase()
                .normalize("NFKD")
                .replace(/\p{M}/gu, "")
                .replace(/ł/g, "l")
                .replace(/[^\p{L}\p{N}]+/gu, "-")
                .replace(/^-+|-+$/g, "") || "sekcja"
        let id = slug
        let suffix = 2
        while (reservedIds.has(id)) id = `${slug}-${suffix++}`
        reservedIds.add(id)
        return id
    }

    /**
     * @summary Selects the heading currently being read.
     * @description Uses the last heading above the activation line, defaulting to the first & selecting the final heading at the document bottom.
     * @param positions - Heading top positions relative to the viewport, in document order.
     * @param atBottom - Whether the reader has reached the bottom of the document.
     * @param activationLine - Vertical reading position relative to the viewport top.
     * @returns Active heading index, or minus one when no headings exist.
     */
    public static getActiveIndex(positions: readonly number[], atBottom: boolean, activationLine = 120): number {
        if (positions.length === 0) return -1
        if (atBottom) return positions.length - 1
        let active = 0
        positions.forEach((top, index) => {
            if (top <= activationLine) active = index
        })
        return active
    }

    /**
     * @summary Resolves nesting depths from heading hierarchy.
     * @description Uses existing ancestor levels rather than treating skipped heading levels as empty parents.
     * @param levels - HTML heading levels in article order.
     * @returns Zero-based nesting depths, capped at two for narrow contents lists.
     */
    public static getDepths(levels: readonly number[]): number[] {
        const ancestors: number[] = []
        return levels.map((level) => {
            while (ancestors.length && ancestors[ancestors.length - 1] >= level) ancestors.pop()
            const depth = Math.min(ancestors.length, 2)
            ancestors.push(level)
            return depth
        })
    }

    /**
     * @summary Calculates the responsive heading activation line.
     * @description Starts around forty percent of viewport height & approaches the bottom as the document ends.
     * @param viewportHeight - Current viewport height in pixels.
     * @param documentHeight - Complete document height in pixels.
     * @param scrollY - Current document scroll position.
     * @param offset - Minimum activation offset for the current contents view.
     * @returns Vertical reading position relative to the viewport top.
     */
    public static getActivationLine(
        viewportHeight: number,
        documentHeight: number,
        scrollY: number,
        offset: number,
    ): number {
        const height = Math.max(0, viewportHeight)
        const range = Math.max(0, documentHeight - height)
        const base = Math.min(Math.max(offset, height * 0.4), Math.max(0, height - 1))
        const endRange = Math.min(height, range)
        const endProgress = endRange > 0 ? this.clamp(1 - (range - scrollY) / endRange) : 0
        return base + endProgress * (Math.max(0, height - 1) - base)
    }

    /**
     * @summary Calculates progress through one article section.
     * @description Handles short sections & clamps readings outside section bounds.
     * @param readingPosition - Reading line in document coordinates.
     * @param sectionStart - Document position of the selected heading.
     * @param sectionEnd - Position of the next heading or the article end.
     * @returns Progress between zero & one.
     */
    public static getSectionProgress(readingPosition: number, sectionStart: number, sectionEnd: number): number {
        return sectionEnd > sectionStart
            ? this.clamp((readingPosition - sectionStart) / (sectionEnd - sectionStart))
            : 1
    }

    /**
     * @summary Calculates overall article reading progress.
     * @description Measures the article's travel through the viewport, including articles shorter than the viewport.
     * @param articleTop - Article top position relative to the viewport.
     * @param articleHeight - Full article height in pixels.
     * @param viewportHeight - Current viewport height in pixels.
     * @returns Progress between zero & one.
     */
    public static getArticleProgress(articleTop: number, articleHeight: number, viewportHeight: number): number {
        const range = articleHeight - viewportHeight
        return range > 0 ? this.clamp(-articleTop / range) : articleTop < 0 ? 1 : 0
    }

    /**
     * @summary Clamps a progress value.
     * @description Keeps a fractional measurement within the inclusive zero-to-one range.
     * @param value - Unbounded progress measurement.
     * @returns Normalized progress fraction.
     */
    private static clamp(value: number): number {
        return Math.min(1, Math.max(0, value))
    }
}

export { ArticleHeadingsManager }
