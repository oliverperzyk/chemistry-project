import type { RefObject } from "react"

/**
 * @summary Properties of the article table of contents.
 * @description Scopes heading discovery to one article & resets tracking when its route changes.
 */
interface ITableOfContents {
    /**
     * @summary Article element containing the page header & educational content.
     */
    readonly articleRef: RefObject<HTMLElement | null>
    /**
     * @summary Current pathname used to refresh heading discovery after navigation.
     */
    readonly pathname: string
}

export type { ITableOfContents }
