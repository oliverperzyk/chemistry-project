import type { Metadata } from "next"
import type { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"
import { Button } from "@/oliverperzyk/components/ui/button"
import { NavigationLinks } from "@/oliverperzyk/lib/globals/NavigationLinks"
import { PageMetadataManager } from "@/oliverperzyk/lib/globals/managers/material/PageMetadataManager"

export const metadata: Metadata = PageMetadataManager.getMetadata("/")

/**
 * @summary Home page of the infographic.
 * @description Introduces octane ratings with a hero & a list of all educational articles.
 */
function HomePage(): JSX.Element {
    const lessons = NavigationLinks.NAVIGATION.entries.flatMap((entry) => ("items" in entry ? entry.items : [entry]))

    return (
        <>
            <section
                aria-labelledby="hero-heading"
                className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <p data-reveal className="mb-4 text-sm font-medium tracking-wide text-muted-foreground">
                        Chemia paliw
                    </p>
                    <h1
                        data-reveal
                        id="hero-heading"
                        className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                        Co oznacza <br />
                        <span className="font-accent italic">liczba oktanowa?</span>
                    </h1>
                    <p
                        data-reveal
                        className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                        Co oznaczają liczby 95 i 98 na dystrybutorze? Poznaj liczbę oktanową, zasady wyboru benzyny oraz
                        metody jej pomiaru
                    </p>
                    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                        <Button
                            data-reveal
                            render={<Link href="/co-to-jest" />}
                            role="link"
                            nativeButton={false}
                            className="min-h-11 px-6">
                            Poznaj podstawy
                        </Button>
                        <Button
                            data-reveal
                            variant="secondary"
                            render={<Link href="/poradnik" />}
                            role="link"
                            nativeButton={false}
                            className="min-h-11 px-6">
                            95 czy 98?
                        </Button>
                    </div>
                </div>
                <Image
                    data-reveal
                    src="/assets/images/HeroImage.png"
                    alt="Dystrybutor paliw z oznaczeniami benzyny 95 i 98 oraz oleju napędowego"
                    width={1366}
                    height={910}
                    sizes="(min-width: 1152px) 1104px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                    className="mt-10 h-auto w-full rounded-2xl sm:mt-12"
                />
            </section>
            <section
                aria-labelledby="lessons-heading"
                className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
                <h2 data-reveal id="lessons-heading" className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
                    Tematy
                </h2>
                <ul className="flex flex-col gap-4">
                    {lessons.map((lesson) => (
                        <li key={lesson.href} data-reveal>
                            <Link
                                href={lesson.href}
                                className="flex items-center justify-between gap-5 rounded-2xl bg-muted p-5 transition-colors hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:p-6">
                                <div className="min-w-0 break-words">
                                    <h3 className="text-lg font-semibold leading-snug sm:text-xl">{lesson.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {lesson.description}
                                    </p>
                                </div>
                                <ExternalLinkIcon
                                    className="size-5 shrink-0 text-muted-foreground"
                                    aria-hidden="true"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default HomePage
