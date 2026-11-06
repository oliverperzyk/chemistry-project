/**
 * @summary Reading-time estimates scoped to educational article content.
 */
class ArticleReadingManager {
    private constructor() {}

    /**
     * @summary Estimate minutes at 200 words per minute; empty content has no estimate.
     */
    public static estimateMinutes(text: string): number {
        const words = text.match(/[\p{L}\p{N}]+(?:[’'−-][\p{L}\p{N}]+)*/gu)?.length ?? 0
        return Math.ceil(words / 200)
    }

    /**
     * @summary Collect body text without image credits, hidden text, scripts, or styles.
     */
    public static getBodyText(body: HTMLElement): string {
        const walker = body.ownerDocument.createTreeWalker(body, NodeFilter.SHOW_TEXT)
        const text: string[] = []
        let node = walker.nextNode()
        while (node) {
            if (!node.parentElement?.closest('figcaption, [hidden], [aria-hidden="true"], .sr-only, script, style')) {
                text.push(node.textContent ?? "")
            }
            node = walker.nextNode()
        }
        return text.join(" ")
    }
}

export { ArticleReadingManager }
