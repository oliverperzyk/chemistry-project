import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleTable } from "@/oliverperzyk/lib/models/components/layout/material/table/interfaces/IArticleTable"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Semantic article table with keyboard-accessible horizontal scrolling.
 */
function ArticleTableComponent({ caption, children, className, ...props }: Readonly<IArticleTable>): JSX.Element {
    return (
        <div
            data-reveal
            role="region"
            aria-label={caption}
            tabIndex={0}
            className="max-w-full overflow-x-auto rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <table
                {...props}
                className={cn(
                    "w-full min-w-xl border-collapse text-left text-sm leading-relaxed sm:text-base",
                    className,
                )}>
                <caption className="caption-top pb-3 text-left text-sm text-muted-foreground">
                    {AbbreviationDefinitions.explainTerms(caption)}
                </caption>
                {children}
            </table>
        </div>
    )
}

export default ArticleTableComponent
