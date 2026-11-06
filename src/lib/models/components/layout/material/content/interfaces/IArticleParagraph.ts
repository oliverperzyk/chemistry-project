import type { HTMLAttributes, ReactNode } from "react"

/**
 * @summary Shared attributes for an article paragraph.
 */
interface IArticleParagraph extends HTMLAttributes<HTMLParagraphElement> {
    /**
     * @summary Content displayed inside the paragraph.
     */
    readonly children: ReactNode
}

export type { IArticleParagraph }
