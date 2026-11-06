import type { ReactNode, ThHTMLAttributes } from "react"

/**
 * @summary Header cell supporting column and row scopes and numeric alignment.
 */
interface IArticleTableColumn extends ThHTMLAttributes<HTMLTableCellElement> {
    /**
     * @summary Content displayed inside the header cell.
     */
    readonly children: ReactNode
    /**
     * @summary Whether to right-align the cell content using tabular numerals.
     */
    readonly numeric?: boolean
}

export type { IArticleTableColumn }
