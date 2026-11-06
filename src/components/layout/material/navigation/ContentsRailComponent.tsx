"use client"

import { useLayoutEffect, useRef, useState, type JSX } from "react"
import { ArticleHeadingsManager } from "@/oliverperzyk/lib/globals/managers/material/ArticleHeadingsManager"
import { cn } from "@/oliverperzyk/lib/utils"
import type { IContentsRail } from "@/oliverperzyk/lib/models/components/layout/material/navigation/interfaces/IContentsRail"

/**
 * @summary Expanding desktop rail of article sections.
 * @description Compresses headings into progress markers & reveals nested labels on pointer hover or keyboard focus.
 */
function ContentsRailComponent({
    headings,
    activeIndex,
    sectionProgress,
    onNavigate,
}: Readonly<IContentsRail>): JSX.Element {
    const listRef = useRef<HTMLOListElement>(null)
    const viewportRef = useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const [measurements, setMeasurements] = useState<{ offsets: number[]; heights: number[]; height: number } | null>(
        null,
    )
    const expanded: boolean = hovered || focused
    const depths: readonly number[] = ArticleHeadingsManager.getDepths(headings.map((heading) => heading.level))

    useLayoutEffect(() => {
        const list = listRef.current
        if (!list) return
        const measure = (): void => {
            const rows: HTMLElement[] = Array.from(list.children) as HTMLElement[]
            const next = {
                offsets: rows.map((row) => row.offsetTop),
                heights: rows.map((row) => row.offsetHeight),
                height: list.offsetHeight,
            }
            setMeasurements((previous) => (JSON.stringify(previous) === JSON.stringify(next) ? previous : next))
        }
        measure()
        const observer: ResizeObserver = new ResizeObserver(measure)
        observer.observe(list)
        return () => observer.disconnect()
    }, [headings])

    useLayoutEffect((): void => {
        if (!expanded && viewportRef.current) viewportRef.current.scrollTop = 0
    }, [expanded])

    const compactHeight: number = Math.max(
        headings.length * 12,
        Math.max(0, activeIndex) * 12 + (measurements?.heights[activeIndex] ?? 18),
    )

    return (
        <aside
            data-material-contents
            aria-label="Na tej stronie"
            className="sticky top-28 hidden min-w-0 self-start lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:block">
            <nav
                aria-label="Spis treści artykułu"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocusCapture={() => setFocused(true)}
                onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
                }}
                className="relative w-full">
                <div
                    ref={viewportRef}
                    className={cn(
                        "max-h-[calc(100dvh-9rem)] transition-[height] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
                        expanded ? "overflow-y-auto overscroll-contain" : "overflow-hidden",
                    )}
                    style={{ height: expanded ? measurements?.height : compactHeight }}>
                    <ol ref={listRef} className={cn("relative", !measurements && "invisible")}>
                        {headings.map((heading, index) => {
                            const active = index === activeIndex
                            const depth = depths[index]
                            const translation = expanded ? 0 : index * 12 - (measurements?.offsets[index] ?? 0)
                            return (
                                <li
                                    key={heading.id}
                                    className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-2.5 transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
                                    style={{ transform: `translateY(${translation}px)` }}>
                                    <a
                                        href={`#${encodeURIComponent(heading.id)}`}
                                        aria-label={heading.title}
                                        aria-current={active ? "location" : undefined}
                                        onClick={(event) => {
                                            if (onNavigate(event, heading.id) && event.detail > 0)
                                                event.currentTarget.blur()
                                        }}
                                        className="relative col-span-2 grid grid-cols-subgrid rounded-sm pb-3 text-sm leading-[18px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring">
                                        <span aria-hidden="true" className="flex h-3 items-center">
                                            <span
                                                className={cn(
                                                    "relative h-0.5 overflow-hidden rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none",
                                                    active
                                                        ? "bg-muted-foreground/40"
                                                        : index < activeIndex
                                                          ? "bg-muted-foreground"
                                                          : "bg-border",
                                                )}
                                                style={{ width: active ? 32 : [16, 11, 7][depth] }}>
                                                {active && (
                                                    <span
                                                        className="absolute inset-0 origin-left bg-foreground transition-transform duration-200 motion-reduce:transition-none"
                                                        style={{ transform: `scaleX(${sectionProgress})` }}
                                                    />
                                                )}
                                            </span>
                                        </span>
                                        <span
                                            className={cn(
                                                "-mt-0.75 min-w-0 break-words transition-[opacity,filter,color] duration-200 motion-reduce:transition-none",
                                                active
                                                    ? "text-foreground"
                                                    : "text-muted-foreground hover:text-foreground",
                                                !active &&
                                                    !expanded &&
                                                    "pointer-events-none opacity-0 blur-[4px] motion-reduce:blur-none",
                                            )}>
                                            <span
                                                className={cn(
                                                    "block",
                                                    depth > 0 && expanded && "border-l border-border",
                                                )}
                                                style={{ paddingInlineStart: depth > 0 && expanded ? depth * 8 : 0 }}>
                                                {heading.title}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </nav>
        </aside>
    )
}

export default ContentsRailComponent
