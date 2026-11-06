import type { Route } from "next"

/**
 * @summary Navigation destination of the infographic.
 * @description Shares a Polish label, relative URL & short explanation between the navbar, mobile menu, footer & material layout.
 */
interface INavigationDestination {
    /**
     * @summary Polish label displayed in the navigation menu.
     */
    readonly label: string
    /**
     * @summary Full article title used in the material header & breadcrumb.
     */
    readonly title: string
    /**
     * @summary Typed relative route of the destination page.
     */
    readonly href: Route
    /**
     * @summary Short explanation of the page content displayed in desktop dropdowns & material headers.
     */
    readonly description: string
    /**
     * @summary Path to hero image, that'll be rendered on top of the article & in navigation between them at the end of all of them.
     */
    readonly heroImage: string
}

export type { INavigationDestination }
