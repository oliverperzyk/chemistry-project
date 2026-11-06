import type { JSX } from "react"
import Link from "next/link"
import LogoComponent from "@/oliverperzyk/components/LogoComponent"
import { NavigationLinks } from "@/oliverperzyk/lib/globals/NavigationLinks"

/**
 * @summary Shared footer of the infographic.
 * @description Displays the site logo, shared topic links & GitHub icon above a separate copyright row.
 */
function FooterComponent(): JSX.Element {
    const entries = NavigationLinks.NAVIGATION.entries
    const groups = [
        ...entries.flatMap((entry) => ("items" in entry ? [entry] : [])),
        {
            label: "Pozostałe",
            items: entries.flatMap((entry) => ("items" in entry ? [] : [entry])),
        },
    ]

    return (
        <footer className="bg-muted">
            <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="min-w-0 space-y-3">
                        <Link
                            href={NavigationLinks.NAVIGATION.home.href}
                            className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                            <LogoComponent />
                        </Link>
                        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                            Infografika edukacyjna o liczbie oktanowej paliw. Projekt przygotowany w ramach lekcji
                            chemii.
                        </p>
                        <a
                            href="https://github.com/oliverperzyk/chemistry-infographic"
                            aria-label="Kod źródłowy na GitHub"
                            className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-5"
                                aria-hidden="true"
                                focusable="false">
                                <path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
                            </svg>
                        </a>
                    </div>
                    <nav
                        aria-label="Nawigacja w stopce"
                        className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                        {groups.map((group) => (
                            <div key={group.label} className="min-w-0">
                                <h2 className="mb-3 text-sm font-semibold">{group.label}</h2>
                                <ul className="space-y-2">
                                    {group.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="inline-block rounded-sm py-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
                <p className="mt-12 text-center text-sm leading-relaxed text-muted-foreground">
                    © 2026{" "}
                    <Link
                        target="_blank"
                        href="https://oliverperzyk.com"
                        className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                        Oliwier Perzyński
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent
