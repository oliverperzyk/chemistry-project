"use client"

import { useEffect, useId, useRef, useState, type JSX } from "react"
import { ChevronDownIcon } from "lucide-react"
import { ArticleHeadingsManager } from "@/oliverperzyk/lib/globals/managers/material/ArticleHeadingsManager"
import type { IContentsBar } from "@/oliverperzyk/lib/models/components/layout/material/navigation/interfaces/IContentsBar"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Floating mobile section navigation.
 * @description Shows the active section & article progress with an accessible, dismissible heading list.
 */
function ContentsBarComponent({
    headings,
    activeIndex,
    articleProgress,
    visible,
    onNavigate,
}: Readonly<IContentsBar>): JSX.Element {
    const [open, setOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)
    const panelId = useId()
    const depths = ArticleHeadingsManager.getDepths(headings.map((heading) => heading.level))

    if (!visible && open) setOpen(false)

    useEffect(() => {
        if (!open || !visible) return
        const dismiss = (event: Event): void => {
            if (event instanceof KeyboardEvent) {
                if (event.key !== "Escape") return
                event.preventDefault()
                setOpen(false)
                toggleRef.current?.focus()
            } else if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
                setOpen(false)
            }
        }
        const desktop = window.matchMedia("(min-width: 1024px)")
        const closeOnDesktop = (): void => {
            if (desktop.matches) setOpen(false)
        }
        document.addEventListener("pointerdown", dismiss)
        document.addEventListener("keydown", dismiss)
        desktop.addEventListener("change", closeOnDesktop)
        return () => {
            document.removeEventListener("pointerdown", dismiss)
            document.removeEventListener("keydown", dismiss)
            desktop.removeEventListener("change", closeOnDesktop)
        }
    }, [open, visible])

    return (
        <div
            ref={rootRef}
            data-material-contents
            inert={!visible}
            aria-hidden={!visible}
            className={cn(
                "fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md transition-[transform,opacity] duration-200 motion-reduce:transition-none lg:hidden",
                visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
            )}>
            <nav aria-label="Spis treści artykułu" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                <button
                    ref={toggleRef}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    aria-label={`Na tej stronie: ${headings[activeIndex]?.title ?? headings[0]?.title ?? "Spis treści"}`}
                    onClick={() => setOpen(!open)}
                    className="flex h-11 w-full items-center justify-between gap-3 rounded-sm text-left text-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring">
                    <span className="truncate">{headings[activeIndex]?.title ?? headings[0]?.title}</span>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className={cn(
                            "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none",
                            open && "rotate-180",
                        )}
                    />
                </button>
                <div
                    id={panelId}
                    inert={!open}
                    aria-hidden={!open}
                    className={cn(
                        "grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}>
                    <div className="min-h-0 overflow-hidden">
                        <ol className="max-h-[60dvh] overflow-y-auto overscroll-contain pb-3">
                            {headings.map((heading, index) => (
                                <li key={heading.id}>
                                    <a
                                        href={`#${encodeURIComponent(heading.id)}`}
                                        aria-current={index === activeIndex ? "location" : undefined}
                                        onClick={(event) => {
                                            if (!onNavigate(event, heading.id)) return
                                            setOpen(false)
                                            if (event.detail === 0) toggleRef.current?.focus({ preventScroll: true })
                                        }}
                                        style={{ paddingInlineStart: depths[index] * 12 }}
                                        className={cn(
                                            "block rounded-sm py-2 text-sm leading-snug break-words focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                                            depths[index] > 0 && "border-l border-border",
                                            index === activeIndex
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground",
                                        )}>
                                        {heading.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </nav>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground transition-transform duration-150 motion-reduce:transition-none"
                style={{ transform: `scaleX(${articleProgress})` }}
            />
        </div>
    )
}

export default ContentsBarComponent
