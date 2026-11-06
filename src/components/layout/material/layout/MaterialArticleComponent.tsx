"use client"

import { useRef, type RefObject, type JSX } from "react"
import { usePathname } from "next/navigation"
import { ChevronRightIcon } from "lucide-react"
import { NavigationLinks } from "@/oliverperzyk/lib/globals/NavigationLinks"
import type { IChildren } from "@/oliverperzyk/lib/models/components/base/interfaces/IChildren"
import type { INavigationDestination } from "@/oliverperzyk/lib/models/components/layout/navigation/interfaces/INavigationDestination"
import Link from "next/link"
import TableOfContentsComponent from "../navigation/TableOfContentsComponent"
import ArticleReadingTimeComponent from "./ArticleReadingTimeComponent"
import ArticleNavigationCardComponent from "../navigation/ArticleNavigationCardComponent"

/**
 * @summary Shared article structure of the educational pages.
 * @description Resolves page information from navigation links & surrounds server-rendered content with a breadcrumb, header & table of contents.
 */
function MaterialArticleComponent({ children }: Readonly<IChildren>): JSX.Element {
    const pathname: string = usePathname()
    const destination: INavigationDestination | undefined = NavigationLinks.getDestination(pathname)
    const articleRef: RefObject<HTMLElement | null> = useRef<HTMLElement>(null)

    const bodyRef = useRef<HTMLDivElement>(null)
    const { previous, next } = NavigationLinks.getAdjacentArticles(pathname)

    return (
        <>
            <article
                key={pathname}
                ref={articleRef}
                className="mx-auto grid w-full max-w-6xl gap-y-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-x-10 [&_h1]:scroll-mt-[65px] lg:[&_h1]:scroll-mt-[33px] [&_h2]:scroll-mt-[65px] lg:[&_h2]:scroll-mt-[33px] [&_h3]:scroll-mt-[65px] lg:[&_h3]:scroll-mt-[33px] [&_h4]:scroll-mt-[65px] lg:[&_h4]:scroll-mt-[33px] [&_h5]:scroll-mt-[65px] lg:[&_h5]:scroll-mt-[33px] [&_h6]:scroll-mt-[65px] lg:[&_h6]:scroll-mt-[33px]">
                {destination && (
                    <header className="min-w-0 space-y-5 lg:col-start-1 lg:row-start-1">
                        <nav aria-label="Ścieżka nawigacji">
                            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                                <li>
                                    <Link
                                        href={NavigationLinks.NAVIGATION.home.href}
                                        className="rounded-sm hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                                        Strona główna
                                    </Link>
                                </li>
                                <li aria-hidden="true">
                                    <ChevronRightIcon className="size-4" />
                                </li>
                                <li aria-current="page" className="min-w-0 break-words text-foreground">
                                    {destination.label}
                                </li>
                            </ol>
                        </nav>
                        <h1 data-reveal className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
                            {destination.title}
                        </h1>
                        <p data-reveal className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {destination.description}
                        </p>
                        <ArticleReadingTimeComponent key={pathname} bodyRef={bodyRef} />
                    </header>
                )}
                <TableOfContentsComponent key={pathname} articleRef={articleRef} pathname={pathname} />
                <div ref={bodyRef} className="min-w-0 space-y-6 leading-relaxed lg:col-start-1 lg:row-start-2">
                    {children}
                </div>
            </article>
            {(previous || next) && (
                <nav
                    aria-label="Nawigacja między lekcjami"
                    className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
                    <div className={previous && next ? "grid gap-6 sm:grid-cols-2" : "grid gap-6"}>
                        {previous && <ArticleNavigationCardComponent destination={previous} direction="previous" />}
                        {next && <ArticleNavigationCardComponent destination={next} direction="next" />}
                    </div>
                </nav>
            )}
        </>
    )
}

export default MaterialArticleComponent
