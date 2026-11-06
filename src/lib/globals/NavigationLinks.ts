import type { INavigationDestination } from "../models/components/layout/navigation/interfaces/INavigationDestination"
import type { INavigation } from "../models/components/layout/navigation/interfaces/INavigation"
import type { IAdjacentArticles } from "../models/components/layout/material/layout/interfaces/IAdjacentArticles"
import { EnvironmentVariables } from "./EnvironmentVariables"

/**
 * @summary Shared navigation links of the infographic.
 * @description Defines the public destinations used by the navbar, mobile menu, footer & material headers.
 */
class NavigationLinks {
    /**
     * @summary Private constructor.
     * @description Prevents instantiation & inheritance.
     */
    private constructor() {}

    /**
     * @summary URL of the infographic source repository.
     * @description Shared GitHub destination used by the footer link & source code redirects.
     */
    public static readonly SOURCE_CODE_URL: URL = new URL("https://github.com/oliverperzyk/chemistry-infographic")

    /**
     * @summary Public navigation of the infographic.
     * @description Groups the educational pages by topic & keeps their labels consistent on all screen sizes.
     */
    public static readonly NAVIGATION: Readonly<INavigation> = {
        home: {
            label: "Strona główna",
            title: "Co naprawdę oznacza liczba oktanowa?",
            href: "/",
            description:
                "Co oznaczają liczby 95 i 98 na dystrybutorze? Poznaj liczbę oktanową, zasady wyboru benzyny oraz metody jej pomiaru.",
            heroImage: "/assets/images/HeroImage.png",
        },
        entries: [
            {
                label: "Podstawy",
                items: [
                    {
                        label: "Co to jest?",
                        href: "/co-to-jest",
                        title: "Co to jest liczba oktanowa?",
                        description: "Odporność na stuk, izooktan i n-heptan.",
                        heroImage: "/assets/images/material/co-to-jest/HeroImage.jpg",
                    },
                    {
                        label: "RON, MON i AKI",
                        href: "/ron-mon-aki",
                        title: "RON i MON: pomiar liczby oktanowej i obliczanie AKI",
                        description: "Jak bada się RON i MON oraz oblicza wskaźnik AKI.",
                        heroImage: "/assets/images/material/ron-mon-aki/HeroImage.jpg",
                    },
                    {
                        label: "Spalanie stukowe",
                        href: "/spalanie-stukowe",
                        title: "Spalanie stukowe i wpływ oktanów na silnik",
                        description: "Skąd bierze się stuk i kiedy wyższa liczba oktanowa pomaga silnikowi.",
                        heroImage: "/assets/images/material/spalanie-stukowe/HeroImage.png",
                    },
                ],
            },
            {
                label: "Paliwa",
                items: [
                    {
                        label: "Porównanie paliw",
                        href: "/paliwa",
                        title: "95, 98, E10, E85 i avgas",
                        description: "Co oznaczają 95, 98, E10, E85 i 100LL oraz do jakich silników są przeznaczone.",
                        heroImage: "/assets/images/material/paliwa/HeroImage.jpg",
                    },
                    {
                        label: "Dodatki",
                        href: "/dodatki",
                        title: "Co podnosi liczbę oktanową?",
                        description: "Jak składniki benzyny wpływają na liczbę oktanową i jakie mają ograniczenia.",
                        heroImage: "/assets/images/material/dodatki/HeroImage.jpg",
                    },
                ],
            },
            {
                label: "Historia i normy",
                href: "/historia-i-normy",
                title: "Historia liczby oktanowej i norm paliwowych",
                description: "Rozwój paliw, wycofanie ołowiu i standardy jakości.",
                heroImage: "/assets/images/material/historia-i-normy/HeroImage.jpg",
            },
            {
                label: "95 czy 98?",
                href: "/poradnik",
                title: "95 czy 98? Jak wybrać benzynę do samochodu",
                description: "Jak wybrać benzynę zgodnie z zaleceniami producenta.",
                heroImage: "/assets/images/material/poradnik/HeroImage.jpg",
            },
        ],
    }

    /**
     * @summary All educational articles in navigation order, excluding the homepage.
     */
    public static get articles(): readonly INavigationDestination[] {
        return this.NAVIGATION.entries.flatMap((entry) => ("items" in entry ? entry.items : [entry]))
    }

    /**
     * @summary Resolve neighboring lessons without wrapping at either end.
     * @param pathname - Name of a route that user is currently in.
     * @param articles - An array with articles.
     * @default NavigationLinks.articles All articles on the website.
     * @returns Adjacent articles, fields might be undefined if it's first or last article.
     * @remarks Both fields are undefined if algorithm couldn't find the base route from `pathname` param.
     */
    public static getAdjacentArticles(
        pathname: string,
        articles: readonly INavigationDestination[] = this.articles,
    ): IAdjacentArticles {
        const index: number = articles.findIndex((article) => article.href === pathname)
        return index === -1
            ? {}
            : {
                  previous: articles[index - 1],
                  next: articles[index + 1],
              }
    }

    /**
     * @summary Finds a public navigation destination.
     * @description Matches the home page or an educational page by its exact pathname.
     * @param pathname - Relative pathname of the current page.
     * @returns Matching destination, or undefined when the route is not listed.
     */
    public static getDestination(pathname: string): INavigationDestination | undefined {
        if (pathname === this.NAVIGATION.home.href) return this.NAVIGATION.home
        return this.articles.find((entry) => entry.href === pathname)
    }

    /**
     * @summary Resolves a route against the website endpoint.
     * @description Creates an absolute URL using the configured website endpoint as the base.
     * @param route - Relative path or absolute URL to resolve.
     * @returns Absolute URL as a string.
     * @throws {TypeError} If the route cannot be resolved as a valid URL.
     */
    public static mergeWebsitePath(route: string): string {
        return new URL(route, EnvironmentVariables.WEBSITE_ENDPOINT_URL).toString()
    }
}

export { NavigationLinks }
