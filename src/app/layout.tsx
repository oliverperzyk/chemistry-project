import type { Metadata, Viewport } from "next"
import { Playfair_Display } from "next/font/google"
import type { IChildren } from "../lib/models/components/base/interfaces/IChildren"
import { EnvironmentVariables } from "../lib/globals/EnvironmentVariables"
import "@/oliverperzyk/styles/common/GlobalStyles.css"
import NavigationBarComponent from "../components/layout/navigation/NavigationBarComponent"
import FooterComponent from "../components/layout/navigation/FooterComponent"
import RevealContentComponent from "../components/layout/RevealContentComponent"

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    style: "italic",
    weight: "700",
    subsets: ["latin", "latin-ext"],
    display: "swap",
})

/**
 * @summary Shared metadata of the website.
 * @description Base information, used by all routes of the application.
 */
const metadata: Metadata = {
    metadataBase: EnvironmentVariables.WEBSITE_ENDPOINT_URL,
    applicationName: "Liczba Oktanowa (Infografika)",
    description: "Infografika edukacyjna o liczbie oktanowej paliw, przygotowana jako projekt z chemii.",
    title: "Liczba Oktanowa (Infografika)",
    authors: [{ name: "Oliwier Perzyński", url: "https://oliverperzyk.com" }],
    creator: "Oliwier Perzyński",
    keywords: ["liczba oktanowa", "paliwa", "benzyna", "chemia", "infografika", "projekt szkolny"],
    icons: {
        icon: {
            url: "/icon.svg",
            type: "image/svg+xml",
            sizes: "any",
        },
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        title: "Liczba Oktanowa (Infografika)",
        description: "Infografika edukacyjna o liczbie oktanowej paliw, przygotowana jako projekt z chemii.",
        siteName: "Liczba Oktanowa (Infografika)",
        url: "/",
        locale: "pl_PL",
    },
}

/**
 * @summary Viewport settings of the website.
 * @description Sets device width, initial scale, light color scheme & theme color, user zoom & full screen coverage.
 */
const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    colorScheme: "light",
    themeColor: "#ffffff",
    userScalable: true,
    viewportFit: "cover",
}

/**
 * @summary Root layout of the infographic.
 * @description Wraps all pages in the shared navigation, main content & footer structure with global styles.
 */
function RootLayout({ children }: Readonly<IChildren>) {
    return (
        <html lang="pl" className={`${playfairDisplay.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <NavigationBarComponent />
                <RevealContentComponent>{children}</RevealContentComponent>
                <FooterComponent />
            </body>
        </html>
    )
}

export { metadata, viewport }
export default RootLayout
