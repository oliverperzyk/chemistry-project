import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleContentHeading } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleContentHeading"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Semantic section heading discovered by the article table of contents.
 */
function ArticleHeadingComponent({
    level,
    children,
    className,
    ...props
}: Readonly<IArticleContentHeading>): JSX.Element {
    const Heading = `h${level}` as "h2" | "h3" | "h4" | "h5" | "h6"
    const sizes = {
        2: "text-2xl sm:text-3xl",
        3: "text-xl sm:text-2xl",
        4: "text-lg sm:text-xl",
        5: "text-base sm:text-lg",
        6: "text-base",
    }
    return (
        <Heading
            {...props}
            data-reveal
            className={cn("pt-4 font-bold leading-snug tracking-tight break-words", sizes[level], className)}>
            {AbbreviationDefinitions.explainTerms(children)}
        </Heading>
    )
}

export default ArticleHeadingComponent
