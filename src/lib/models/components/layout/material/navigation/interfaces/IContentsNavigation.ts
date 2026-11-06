import type { MouseEvent } from "react"
import type { IArticleHeading } from "./IArticleHeading"

/**
 * @summary Shared properties of the article contents views.
 * @description Supplies heading destinations, reading state & fragment navigation to the desktop rail & mobile bar.
 */
interface IContentsNavigation {
    /**
     * @summary Ordered article headings, excluding the page H1.
     */
    readonly headings: readonly IArticleHeading[]
    /**
     * @summary Index of the currently selected or visible section.
     */
    readonly activeIndex: number
    /**
     * @summary Navigates ordinary anchor activations & returns whether the event was handled.
     */
    readonly onNavigate: (event: MouseEvent<HTMLAnchorElement>, id: string) => boolean
}

export type { IContentsNavigation }
