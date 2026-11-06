import type { INavigationDestination } from "../../../navigation/interfaces/INavigationDestination"

/**
 * @summary Destination and direction of an adjacent lesson card.
 */
interface IArticleNavigationCard {
    /**
     * @summary Destination of the card's link.
     */
    readonly destination: INavigationDestination
    /**
     * @summary Whenever it's next or previous article.
     */
    readonly direction: "previous" | "next"
}

export type { IArticleNavigationCard }
