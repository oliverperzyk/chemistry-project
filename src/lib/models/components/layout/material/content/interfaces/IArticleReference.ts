import type { ReactNode } from "react"

/**
 * @summary Content of a compact article note.
 */
interface IArticleReference {
    /**
     * @summary Content displayed inside the article note.
     */
    readonly children: ReactNode
}

export type { IArticleReference }
