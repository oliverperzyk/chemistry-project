import type { HTMLAttributes, ReactNode } from "react"

/**
 * @summary Native attributes and content of an unordered article list.
 */
interface IArticleUnorderedList extends HTMLAttributes<HTMLUListElement> {
    /**
     * @summary Items displayed inside the unordered list.
     */
    readonly children: ReactNode
}

export type { IArticleUnorderedList }
