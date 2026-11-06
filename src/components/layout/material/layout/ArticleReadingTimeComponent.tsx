"use client"

import { useEffect, useState, type JSX } from "react"
import { ClockIcon } from "lucide-react"
import { ArticleReadingManager } from "@/oliverperzyk/lib/globals/managers/material/ArticleReadingManager"
import type { IArticleReadingTime } from "@/oliverperzyk/lib/models/components/layout/material/layout/interfaces/IArticleReadingTime"

/**
 * @summary Automatic body-only reading estimate, refreshed when article content changes.
 */
function ArticleReadingTimeComponent({ bodyRef }: Readonly<IArticleReadingTime>): JSX.Element | null {
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        const body = bodyRef.current
        if (!body) return
        const update = (): void => {
            setMinutes(ArticleReadingManager.estimateMinutes(ArticleReadingManager.getBodyText(body)))
        }
        update()
        const observer = new MutationObserver(update)
        observer.observe(body, { childList: true, characterData: true, subtree: true })
        return () => observer.disconnect()
    }, [bodyRef])

    if (!minutes) return null
    return (
        <p data-reveal className="flex items-center gap-2 text-sm text-muted-foreground">
            <ClockIcon className="size-4 shrink-0" aria-hidden="true" />
            Czas czytania: {minutes} min
        </p>
    )
}

export default ArticleReadingTimeComponent
