import type { HTMLAttributes, ReactNode } from "react"

/**
 * @summary Semantic article heading below the shared page title.
 */
interface IArticleContentHeading extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * @summary HTML heading level from two through six.
     */
    readonly level: 2 | 3 | 4 | 5 | 6
    /**
     * @summary Content displayed inside the heading.
     */
    readonly children: ReactNode
}

export type { IArticleContentHeading }
