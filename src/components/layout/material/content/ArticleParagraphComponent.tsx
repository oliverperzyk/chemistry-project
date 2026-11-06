import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleParagraph } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleParagraph"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Readable article paragraph with support for inline markup.
 */
function ArticleParagraphComponent({ children, className, ...props }: Readonly<IArticleParagraph>): JSX.Element {
    return (
        <p {...props} data-reveal className={cn("text-base leading-relaxed sm:text-lg", className)}>
            {AbbreviationDefinitions.explainTerms(children)}
        </p>
    )
}

export default ArticleParagraphComponent
