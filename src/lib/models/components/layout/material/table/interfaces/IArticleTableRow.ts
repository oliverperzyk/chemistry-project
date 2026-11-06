import type { HTMLAttributes, ReactNode } from "react"

/**
 * @summary Native attributes of an article table row.
 */
interface IArticleTableRow extends HTMLAttributes<HTMLTableRowElement> {
    /**
     * @summary Cells displayed inside the table row.
     */
    readonly children: ReactNode
}

export type { IArticleTableRow }
