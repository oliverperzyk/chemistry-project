import type { JSX } from "react"
import Image from "next/image"
import type { IArticleImage } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleImage"

/**
 * @summary Uncropped responsive article image with a direct source link.
 */
function ArticleImageComponent({
    src,
    width,
    height,
    alt,
    sourceUrl,
    sourceLabel,
}: Readonly<IArticleImage>): JSX.Element {
    return (
        <figure data-reveal className="space-y-3">
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                sizes="(min-width: 1152px) 840px, (min-width: 1024px) calc(100vw - 312px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="h-auto w-full rounded-xl"
            />
            <figcaption className="break-words text-sm leading-relaxed text-muted-foreground">
                Źródło:{" "}
                <a
                    href={sourceUrl}
                    className="rounded-sm underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                    {sourceLabel}
                </a>
            </figcaption>
        </figure>
    )
}

export default ArticleImageComponent
