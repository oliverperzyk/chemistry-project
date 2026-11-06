import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleListItem } from "@/oliverperzyk/lib/models/components/layout/material/list/interfaces/IArticleListItem"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic li element for educational articles.
 */
function ArticleListItemComponent({ children, className, ...props }: Readonly<IArticleListItem>): JSX.Element {
    return (
        <li {...props} data-reveal className={cn("", className)}>
            {AbbreviationDefinitions.explainTerms(children)}
        </li>
    )
}

export default ArticleListItemComponent
