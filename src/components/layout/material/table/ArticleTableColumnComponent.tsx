import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import type { JSX } from "react"
import type { IArticleTableColumn } from "@/oliverperzyk/lib/models/components/layout/material/table/interfaces/IArticleTableColumn"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic th element for educational articles.
 */
function ArticleTableColumnComponent({
    children,
    className,
    numeric,
    scope = "col",
    ...props
}: Readonly<IArticleTableColumn>): JSX.Element {
    return (
        <th
            {...props}
            scope={scope}
            className={cn("bg-muted p-4 font-semibold", numeric && "text-right tabular-nums", className)}>
            {AbbreviationDefinitions.explainTerms(children)}
        </th>
    )
}

export default ArticleTableColumnComponent
