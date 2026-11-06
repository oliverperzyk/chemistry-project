import type { MetadataRoute } from "next"
import { NavigationLinks } from "../lib/globals/NavigationLinks"

const HOME_PAGE: string = NavigationLinks.mergeWebsitePath("/")

/**
 * @summary Web app manifest of the infographic.
 * @description Defines the application name, description, language, launch URL, icon & display settings.
 */
function ManifestRoute(): MetadataRoute.Manifest {
    return {
        name: "Liczba Oktanowa (Infografika)",
        short_name: "Liczba Oktanowa",
        description: "Infografika edukacyjna o liczbie oktanowej paliw, przygotowana jako projekt z chemii.",
        lang: "pl",
        start_url: HOME_PAGE,
        scope: HOME_PAGE,
        icons: [
            {
                src: NavigationLinks.mergeWebsitePath("/icon.svg"),
                sizes: "any",
                type: "image/svg+xml",
                purpose: "any",
            },
        ],
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
    }
}

export default ManifestRoute
