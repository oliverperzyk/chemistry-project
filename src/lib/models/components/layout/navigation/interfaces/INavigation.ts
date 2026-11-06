import type { NavigationEntry } from "../types/NavigationEntry"
import type { INavigationDestination } from "./INavigationDestination"

/**
 * @summary Public navigation structure of the infographic.
 * @description Defines the home destination & ordered entries shared by the navbar, mobile menu & footer.
 */
interface INavigation {
    /**
     * @summary Home page destination used by the navbar brand, mobile menu & footer logo.
     */
    readonly home: INavigationDestination
    /**
     * @summary Ordered topic groups & direct page links.
     */
    readonly entries: readonly NavigationEntry[]
}

export type { INavigation }
