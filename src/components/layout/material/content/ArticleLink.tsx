import type { JSX } from "react"
import type { IArticleLink } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleLink"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary An inline article link with shared underline, hover, and keyboard-focus styling.
 * @param options - Options of the article link.
 */
function ArticleLink({ children, className, ...props }: Readonly<IArticleLink>): JSX.Element {
    return (
        <a
            {...props}
            className={cn(
                "rounded-sm underline underline-offset-4 decoration-muted-foreground/50 transition-colors hover:text-primary hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
                className,
            )}>
            {children}
        </a>
    )
}

export default ArticleLink
