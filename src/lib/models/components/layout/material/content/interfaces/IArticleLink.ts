import type { AnchorHTMLAttributes, ReactNode } from "react"

/**
 * @summary A styled inline article link with native anchor attributes.
 */
interface IArticleLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * @summary Destination URL of the link.
     */
    readonly href: string
    /**
     * @summary Content displayed inside the link.
     */
    readonly children: ReactNode
}

export type { IArticleLink }
