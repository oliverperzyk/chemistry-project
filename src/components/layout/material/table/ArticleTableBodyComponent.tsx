import type { JSX } from "react"
import type { IArticleTableSection } from "@/oliverperzyk/lib/models/components/layout/material/table/interfaces/IArticleTableSection"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic tbody element for educational articles.
 */
function ArticleTableBodyComponent({ children, className, ...props }: Readonly<IArticleTableSection>): JSX.Element {
    return (
        <tbody {...props} className={cn("", className)}>
            {children}
        </tbody>
    )
}

export default ArticleTableBodyComponent
