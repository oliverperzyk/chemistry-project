import type { IContentsNavigation } from "./IContentsNavigation"

/**
 * @summary Properties of the floating mobile contents bar.
 * @description Extends shared navigation with article visibility & overall reading progress.
 */
interface IContentsBar extends IContentsNavigation {
    /**
     * @summary Whether the article is being read below its initial top boundary.
     */
    readonly visible: boolean
    /**
     * @summary Fraction of the article already read, between zero & one.
     */
    readonly articleProgress: number
}

export type { IContentsBar }
