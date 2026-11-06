import type { MetadataRoute } from "next"
import { EnvironmentVariables } from "../lib/globals/EnvironmentVariables"
import { NavigationLinks } from "../lib/globals/NavigationLinks"

/**
 * @summary Robots directives of the infographic.
 * @description Allows all crawlers to access the home page & public educational pages.
 */
function RobotsRoute(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        host: EnvironmentVariables.WEBSITE_ENDPOINT_URL.toString(),
        sitemap: NavigationLinks.mergeWebsitePath("/sitemap.xml"),
    }
}

export default RobotsRoute
