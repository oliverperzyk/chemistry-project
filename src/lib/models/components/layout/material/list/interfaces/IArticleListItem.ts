import type { LiHTMLAttributes, ReactNode } from "react"

/**
 * @summary Native attributes and content of an article list item.
 */
interface IArticleListItem extends LiHTMLAttributes<HTMLLIElement> {
    /**
     * @summary Content displayed inside the list item.
     */
    readonly children: ReactNode
}

export type { IArticleListItem }
