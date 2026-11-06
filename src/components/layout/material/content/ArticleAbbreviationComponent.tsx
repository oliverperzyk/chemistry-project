"use client"

import { useId, useState, type JSX } from "react"
import { Popover } from "@base-ui/react/popover"
import type { IArticleAbbreviation } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleAbbreviation"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary An inline abbreviation with a definition available on hover, focus, or tap.
 */
function ArticleAbbreviationComponent({
    children,
    definition,
    className,
}: Readonly<IArticleAbbreviation>): JSX.Element {
    const [open, setOpen] = useState(false)
    const descriptionId: string = useId()

    return (
        <Popover.Root open={open} onOpenChange={setOpen} modal={false}>
            <Popover.Trigger
                type="button"
                openOnHover
                delay={150}
                closeDelay={100}
                aria-describedby={open ? descriptionId : undefined}
                onFocus={(event) => {
                    if (event.currentTarget.matches(":focus-visible")) setOpen(true)
                }}
                onBlur={() => setOpen(false)}
                className={cn(
                    "inline cursor-help rounded-sm border-0 bg-transparent p-0 text-inherit [font:inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    className,
                )}>
                <abbr className="underline decoration-dotted underline-offset-4">{children}</abbr>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner side="bottom" sideOffset={6} collisionPadding={8} className="z-50">
                    <Popover.Popup
                        initialFocus={false}
                        finalFocus={false}
                        aria-label={children}
                        className="max-w-[min(20rem,calc(100vw-1rem))] rounded-lg border border-border bg-popover px-3 py-2 text-sm leading-relaxed break-words text-popover-foreground shadow-md transition-[opacity,translate] duration-150 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:data-ending-style:translate-y-1 motion-safe:data-starting-style:translate-y-1 motion-reduce:transition-none">
                        <Popover.Description id={descriptionId}>{definition}</Popover.Description>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default ArticleAbbreviationComponent
