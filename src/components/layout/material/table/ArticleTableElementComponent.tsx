import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleTableElement } from "@/oliverperzyk/lib/models/components/layout/material/table/interfaces/IArticleTableElement"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic td element for educational articles.
 */
function ArticleTableElementComponent({
    children,
    className,
    numeric,
    ...props
}: Readonly<IArticleTableElement>): JSX.Element {
    return (
        <td {...props} className={cn("p-4", numeric && "text-right tabular-nums", className)}>
            {AbbreviationDefinitions.explainTerms(children)}
        </td>
    )
}

export default ArticleTableElementComponent
