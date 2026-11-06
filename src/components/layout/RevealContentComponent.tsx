"use client"

import { useEffect, useRef, type JSX } from "react"
import { usePathname } from "next/navigation"
import type { IChildren } from "@/oliverperzyk/lib/models/components/base/interfaces/IChildren"

/**
 * @summary Reveals page content once as it enters the viewport, without hiding server-rendered content.
 */
function RevealContentComponent({ children }: Readonly<IChildren>): JSX.Element {
    const pathname = usePathname()
    const mainRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const main = mainRef.current
        if (!main || !("IntersectionObserver" in window)) return

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
        const targets = new Set<HTMLElement>()
        let disposed = false

        const reveal = (target: HTMLElement, animate: boolean): void => {
            if (animate && target.dataset.revealState) return
            target.dataset.revealState = animate && !reducedMotion.matches ? "visible" : "complete"
            observer.unobserve(target)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (disposed) return
                for (const entry of entries) {
                    if (entry.isIntersecting) reveal(entry.target as HTMLElement, true)
                }
            },
            { threshold: 0 },
        )

        const registerTargets = (): void => {
            for (const target of main.querySelectorAll<HTMLElement>("[data-reveal]")) {
                if (targets.has(target) || target.parentElement?.closest("[data-reveal]")) continue
                targets.add(target)
                if (reducedMotion.matches || target.contains(document.activeElement)) {
                    reveal(target, false)
                } else {
                    observer.observe(target)
                }
            }
            for (const target of targets) {
                if (!main.contains(target)) {
                    observer.unobserve(target)
                    targets.delete(target)
                }
            }
        }

        const onFocus = (event: FocusEvent): void => {
            if (!(event.target instanceof Element)) return
            for (const target of targets) {
                if (target.contains(event.target)) reveal(target, false)
            }
        }

        const onMotionChange = (): void => {
            if (reducedMotion.matches) {
                for (const target of targets) reveal(target, false)
            }
        }

        registerTargets()
        // Route content and reading estimates can arrive after this effect runs.
        const mutations = new MutationObserver(registerTargets)
        mutations.observe(main, { childList: true, subtree: true })
        main.addEventListener("focusin", onFocus)
        reducedMotion.addEventListener("change", onMotionChange)

        return () => {
            disposed = true
            observer.disconnect()
            mutations.disconnect()
            main.removeEventListener("focusin", onFocus)
            reducedMotion.removeEventListener("change", onMotionChange)
            for (const target of targets) delete target.dataset.revealState
        }
    }, [pathname])

    return (
        <main ref={mainRef} className="flex-1">
            {children}
        </main>
    )
}

export default RevealContentComponent
