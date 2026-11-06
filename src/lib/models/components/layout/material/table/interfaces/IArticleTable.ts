import type { ReactNode, TableHTMLAttributes } from "react"

/**
 * @summary Caption and semantic markup of a scrollable article table.
 */
interface IArticleTable extends TableHTMLAttributes<HTMLTableElement> {
    /**
     * @summary Caption describing the table.
     */
    readonly caption: string
    /**
     * @summary Sections and rows displayed inside the table.
     */
    readonly children: ReactNode
}

export type { IArticleTable }
