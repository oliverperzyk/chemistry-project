import type { IContentsNavigation } from "./IContentsNavigation"

/**
 * @summary Properties of the expanding desktop contents rail.
 * @description Extends shared section navigation with progress through the active section.
 */
interface IContentsRail extends IContentsNavigation {
    /**
     * @summary Fraction of the active section already read, between zero & one.
     */
    readonly sectionProgress: number
}

export type { IContentsRail }
