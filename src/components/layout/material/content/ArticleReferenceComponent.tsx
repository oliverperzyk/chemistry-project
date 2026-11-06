import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleReference } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleReference"

/**
 * @summary Compact highlighted note within an article.
 */
function ArticleReferenceComponent({ children }: Readonly<IArticleReference>): JSX.Element {
    return (
        <div data-reveal className="rounded-xl bg-muted p-4 text-sm leading-relaxed text-muted-foreground sm:p-5">
            {AbbreviationDefinitions.explainTerms(children)}
        </div>
    )
}

export default ArticleReferenceComponent
