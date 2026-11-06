import type { MetadataRoute } from "next"
import { NavigationLinks } from "../lib/globals/NavigationLinks"

/**
 * @summary Sitemap of the infographic.
 * @description Lists the home page & public educational pages for search engines.
 */
class SitemapRoute {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation & inheritance.
     */
    private constructor() {}

    /**
     * @summary Public routes of the infographic.
     * @description Defines relative URLs & priorities, with the home page first, followed by core explanations, practical guidance & supporting topics.
     */
    private static readonly BASE_ROUTES: MetadataRoute.Sitemap = [
        {
            url: "/",
            priority: 1,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/co-to-jest",
            priority: 0.9,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/ron-mon-aki",
            priority: 0.9,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/spalanie-stukowe",
            priority: 0.8,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/paliwa",
            priority: 0.8,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/dodatki",
            priority: 0.7,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/historia-i-normy",
            priority: 0.6,
            lastModified: undefined,
            changeFrequency: "never",
        },
        {
            url: "/poradnik",
            priority: 0.9,
            lastModified: undefined,
            changeFrequency: "never",
        },
    ]

    /**
     * @summary Generates sitemap entries.
     * @description Resolves each route against the website endpoint & preserves its sitemap metadata.
     */
    public static generated(): MetadataRoute.Sitemap {
        return SitemapRoute.BASE_ROUTES.map(({ url, ...rest }) => ({
            url: NavigationLinks.mergeWebsitePath(url),
            ...rest,
        }))
    }
}

export default SitemapRoute.generated
