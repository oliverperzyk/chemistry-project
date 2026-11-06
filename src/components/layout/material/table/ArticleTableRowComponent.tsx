import type { JSX } from "react"
import type { IArticleTableRow } from "@/oliverperzyk/lib/models/components/layout/material/table/interfaces/IArticleTableRow"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic tr element for educational articles.
 */
function ArticleTableRowComponent({ children, className, ...props }: Readonly<IArticleTableRow>): JSX.Element {
    return (
        <tr {...props} className={cn("[tbody_&]:border-b [tbody_&]:border-border", className)}>
            {children}
        </tr>
    )
}

export default ArticleTableRowComponent
