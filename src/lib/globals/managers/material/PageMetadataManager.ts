import type { Metadata } from "next"
import { NavigationLinks } from "../../NavigationLinks"

/**
 * @summary Manager to resolve metadata on article routes, without having to duplicate code.
 */
class PageMetadataManager {
    /**
     * @summary Private constructor.
     * @description Prevents instanization & inheritance.
     */
    private constructor() {}

    /**
     * @summary Resolves metadata for article routes.
     * @param pathname - Exact relative pathname of the destination in Polish, e.g. `/co-to-jest`.
     * @throws {Error} If the pathname is not listed in the navigation.
     */
    public static getMetadata(pathname: string): Metadata {
        const destination = NavigationLinks.getDestination(pathname)
        if (!destination) throw new Error(`Route "${pathname}" does not exist in articles.`)

        const { title, description, href } = destination
        const url: string = NavigationLinks.mergeWebsitePath(href)
        const images = [{ url: NavigationLinks.mergeWebsitePath(destination.heroImage), alt: title }]

        return {
            title,
            description,
            alternates: {
                canonical: url,
            },
            openGraph: {
                title,
                description,
                url,
                type: "website",
                locale: "pl_PL",
                siteName: "Liczba Oktanowa (Infografika)",
                ...(images ? { images } : {}),
            },
        }
    }
}

export { PageMetadataManager }
