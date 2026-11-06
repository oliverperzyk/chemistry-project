/**
 * @summary Reading measurements shared by the contents views.
 * @description Records the active section, section progress & mobile bar visibility in one frame.
 */
interface IContentsReadingState {
    /**
     * @summary Index of the current heading, or minus one when none exist.
     */
    readonly activeIndex: number
    /**
     * @summary Progress through the current section, clamped between zero & one.
     */
    readonly sectionProgress: number
    /**
     * @summary Progress through the complete article, clamped between zero & one.
     */
    readonly articleProgress: number
    /**
     * @summary Whether the floating contents bar can be displayed over the article.
     */
    readonly barVisible: boolean
}

export type { IContentsReadingState }
