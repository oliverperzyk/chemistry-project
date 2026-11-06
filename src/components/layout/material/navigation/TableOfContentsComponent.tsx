"use client"

import { useEffect, useRef, useState, type JSX, type MouseEvent } from "react"
import { ArticleHeadingsManager } from "@/oliverperzyk/lib/globals/managers/material/ArticleHeadingsManager"
import type { IArticleHeading } from "@/oliverperzyk/lib/models/components/layout/material/navigation/interfaces/IArticleHeading"
import type { ITableOfContents } from "@/oliverperzyk/lib/models/components/layout/material/navigation/interfaces/ITableOfContents"
import type { IContentsReadingState } from "@/oliverperzyk/lib/models/components/layout/material/navigation/interfaces/IContentsReadingState"
import ContentsRailComponent from "./ContentsRailComponent"
import ContentsBarComponent from "./ContentsBarComponent"

/**
 * @summary Automatic section navigation of a material article.
 * @description Coordinates H2–H6 discovery, fragment history & reading progress for the desktop rail & floating mobile bar.
 */
function TableOfContentsComponent({ articleRef, pathname }: Readonly<ITableOfContents>): JSX.Element | null {
    const [headings, setHeadings] = useState<readonly IArticleHeading[]>([])
    const [reading, setReading] = useState<IContentsReadingState>({
        activeIndex: -1,
        sectionProgress: 0,
        articleProgress: 0,
        barVisible: false,
    })
    const navigateRef = useRef<((id: string) => boolean) | null>(null)

    useEffect(() => {
        const article = articleRef.current
        if (!article) return

        let elements: HTMLElement[] = []
        let frame: number | null = null
        let selectedId: string | null = null
        let initialFragmentPending = true
        const desktop = window.matchMedia("(min-width: 1024px)")

        const readFragment = (): string => {
            const fragment = window.location.hash.slice(1)
            try {
                return decodeURIComponent(fragment)
            } catch {
                return fragment
            }
        }

        const updateMeasurements = (): void => {
            const viewport = window.innerHeight
            const scrollY = window.scrollY
            const line = ArticleHeadingsManager.getActivationLine(
                viewport,
                document.documentElement.scrollHeight,
                scrollY,
                desktop.matches ? 33 : 65,
            )
            const positions = elements.map((element) => element.getBoundingClientRect().top)
            const selectedIndex = elements.findIndex((element) => element.id === selectedId)
            const atBottom = scrollY > 0 && scrollY + viewport >= document.documentElement.scrollHeight - 2
            const activeIndex =
                selectedIndex >= 0 ? selectedIndex : ArticleHeadingsManager.getActiveIndex(positions, atBottom, line)
            const bounds = article.getBoundingClientRect()
            const next: IContentsReadingState = {
                activeIndex,
                sectionProgress:
                    activeIndex >= 0
                        ? ArticleHeadingsManager.getSectionProgress(
                              line,
                              positions[activeIndex],
                              positions[activeIndex + 1] ?? bounds.bottom,
                          )
                        : 0,
                articleProgress: ArticleHeadingsManager.getArticleProgress(bounds.top, bounds.height, viewport),
                barVisible: bounds.top < 0 && bounds.bottom > 44,
            }
            setReading((previous) =>
                previous.activeIndex === next.activeIndex &&
                previous.barVisible === next.barVisible &&
                Math.abs(previous.sectionProgress - next.sectionProgress) < 0.001 &&
                Math.abs(previous.articleProgress - next.articleProgress) < 0.001
                    ? previous
                    : next,
            )
        }

        const scrollToSection = (target: HTMLElement, smooth: boolean): void => {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            window.scrollTo({
                top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - (desktop.matches ? 33 : 65) + 1),
                behavior: smooth && !reduceMotion ? "smooth" : "instant",
            })
        }

        /**
         * @summary Schedules a reading-state update.
         * @description Coalesces layout & scroll events, honoring initial fragments after the contents views render.
         */
        const scheduleUpdate = (): void => {
            if (frame !== null) return
            frame = window.requestAnimationFrame(() => {
                frame = null
                if (initialFragmentPending) {
                    const fragment = readFragment()
                    const target = elements.find((element) => element.id === fragment)
                    if (target) {
                        selectedId = target.id
                        scrollToSection(target, false)
                    }
                    initialFragmentPending = Boolean(fragment) && !target
                }
                updateMeasurements()
            })
        }

        const collectHeadings = (): void => {
            elements = Array.from(article.querySelectorAll<HTMLElement>("h2, h3, h4, h5, h6")).filter(
                (element) => element.textContent?.trim() && !element.closest("[data-material-contents]"),
            )
            const reservedIds = new Set(Array.from(document.querySelectorAll("[id]"), (element) => element.id))
            const collected = elements.map((element) => {
                const title = element.textContent?.trim() ?? ""
                if (!element.id) element.id = ArticleHeadingsManager.createId(title, reservedIds)
                return { id: element.id, title, level: Number(element.tagName.slice(1)) }
            })
            setHeadings((previous) =>
                previous.length === collected.length &&
                previous.every(
                    (heading, index) =>
                        heading.id === collected[index].id &&
                        heading.title === collected[index].title &&
                        heading.level === collected[index].level,
                )
                    ? previous
                    : collected,
            )
            scheduleUpdate()
        }

        const releaseSelection = (event: Event): void => {
            if (
                event instanceof KeyboardEvent &&
                !["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)
            )
                return
            selectedId = null
            scheduleUpdate()
        }

        const restoreFragment = (): void => {
            const target = elements.find((element) => element.id === readFragment())
            initialFragmentPending = false
            selectedId = target?.id ?? null
            if (target) scrollToSection(target, false)
            scheduleUpdate()
        }

        navigateRef.current = (id) => {
            const target = elements.find((element) => element.id === id)
            if (!target) return false
            selectedId = id
            initialFragmentPending = false
            const hash = `#${encodeURIComponent(id)}`
            if (window.location.hash !== hash) window.history.pushState(null, "", hash)
            scrollToSection(target, true)
            updateMeasurements()
            return true
        }
        collectHeadings()
        const mutationObserver = new MutationObserver((mutations) => {
            if (
                mutations.some((mutation) => {
                    const target = mutation.target instanceof Element ? mutation.target : mutation.target.parentElement
                    return !target?.closest("[data-material-contents]")
                })
            )
                collectHeadings()
        })
        mutationObserver.observe(article, { childList: true, subtree: true, characterData: true })
        const resizeObserver = new ResizeObserver(scheduleUpdate)
        resizeObserver.observe(article)
        resizeObserver.observe(document.body)
        window.addEventListener("scroll", scheduleUpdate, { passive: true })
        window.addEventListener("resize", scheduleUpdate, { passive: true })
        window.addEventListener("popstate", restoreFragment)
        window.addEventListener("hashchange", restoreFragment)
        const manualEvents = ["wheel", "touchstart", "pointerdown", "keydown"]
        manualEvents.forEach((event) => window.addEventListener(event, releaseSelection, { passive: true }))

        return () => {
            navigateRef.current = null
            mutationObserver.disconnect()
            resizeObserver.disconnect()
            window.removeEventListener("scroll", scheduleUpdate)
            window.removeEventListener("resize", scheduleUpdate)
            window.removeEventListener("popstate", restoreFragment)
            window.removeEventListener("hashchange", restoreFragment)
            manualEvents.forEach((event) => window.removeEventListener(event, releaseSelection))
            if (frame !== null) window.cancelAnimationFrame(frame)
        }
    }, [articleRef, pathname])

    const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string): boolean => {
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        )
            return false
        if (!navigateRef.current?.(id)) return false
        event.preventDefault()
        return true
    }

    if (headings.length < 2) return null

    return (
        <>
            <ContentsRailComponent
                headings={headings}
                activeIndex={reading.activeIndex}
                sectionProgress={reading.sectionProgress}
                onNavigate={handleNavigate}
            />
            <ContentsBarComponent
                key={pathname}
                headings={headings}
                activeIndex={reading.activeIndex}
                articleProgress={reading.articleProgress}
                visible={reading.barVisible}
                onNavigate={handleNavigate}
            />
        </>
    )
}

export default TableOfContentsComponent
