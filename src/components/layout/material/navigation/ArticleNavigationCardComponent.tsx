import type { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import type { IArticleNavigationCard } from "@/oliverperzyk/lib/models/components/layout/material/layout/interfaces/IArticleNavigationCard"

/**
 * @summary Image card linking to the previous or next educational article.
 */
function ArticleNavigationCardComponent({ destination, direction }: Readonly<IArticleNavigationCard>): JSX.Element {
    const previous = direction === "previous"
    const Arrow = previous ? ArrowLeftIcon : ArrowRightIcon
    return (
        <Link
            data-reveal
            href={destination.href}
            rel={previous ? "prev" : "next"}
            className="group flex min-w-0 flex-1 flex-col rounded-2xl bg-muted transition-colors hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <Image
                    src={destination.heroImage}
                    alt=""
                    fill
                    sizes="auto, (min-width: 1152px) 540px, (min-width: 640px) calc((100vw - 72px) / 2), calc(100vw - 32px)"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    {previous && <Arrow className="size-4 shrink-0" aria-hidden="true" />}
                    {previous ? "Poprzednia lekcja" : "Następna lekcja"}
                    {!previous && <Arrow className="size-4 shrink-0" aria-hidden="true" />}
                </p>
                <p className="break-words text-xl font-semibold leading-snug group-hover:underline underline-offset-4">
                    {destination.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{destination.description}</p>
            </div>
        </Link>
    )
}

export default ArticleNavigationCardComponent
