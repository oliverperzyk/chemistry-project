import type { HTMLAttributes, ReactNode } from "react"

/**
 * @summary Native attributes of a table header or body group.
 */
interface IArticleTableSection extends HTMLAttributes<HTMLTableSectionElement> {
    /**
     * @summary Rows displayed inside the table header or body.
     */
    readonly children: ReactNode
}

export type { IArticleTableSection }
