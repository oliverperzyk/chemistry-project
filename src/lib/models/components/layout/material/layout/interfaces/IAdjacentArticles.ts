import type { INavigationDestination } from "../../../navigation/interfaces/INavigationDestination"

/**
 * @summary Neighbors in the ordered educational article list.
 */
interface IAdjacentArticles {
    /**
     * @summary Previous article's information.
     */
    readonly previous?: INavigationDestination
    /**
     * @summary Next article's information.
     */
    readonly next?: INavigationDestination
}

export type { IAdjacentArticles }
