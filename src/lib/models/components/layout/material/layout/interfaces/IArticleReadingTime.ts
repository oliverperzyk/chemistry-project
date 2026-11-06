import type { RefObject } from "react"

/**
 * @summary Body whose educational text determines the reading estimate.
 */
interface IArticleReadingTime {
    /**
     * @summary Reference to the article body used to estimate reading time.
     */
    readonly bodyRef: RefObject<HTMLDivElement | null>
}

export type { IArticleReadingTime }
