import type { ReactNode } from "react"

/**
 * @summary Reusable highlighted summary with a stable section anchor.
 */
interface IArticleRemember {
    /**
     * @summary Content displayed inside the highlighted summary.
     */
    readonly children: ReactNode
    /**
     * @summary Optional fragment identifier of the summary section.
     */
    readonly id?: string
}

export type { IArticleRemember }
