import type { ReactNode, TdHTMLAttributes } from "react"

/**
 * @summary Data cell with optional numeric alignment.
 */
interface IArticleTableElement extends TdHTMLAttributes<HTMLTableCellElement> {
    /**
     * @summary Content displayed inside the data cell.
     */
    readonly children: ReactNode
    /**
     * @summary Whether to right-align the cell content using tabular numerals.
     */
    readonly numeric?: boolean
}

export type { IArticleTableElement }
