import type { JSX } from "react"
import type { IArticleTableSection } from "@/oliverperzyk/lib/models/components/layout/material/table/interfaces/IArticleTableSection"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic thead element for educational articles.
 */
function ArticleTableHeadComponent({ children, className, ...props }: Readonly<IArticleTableSection>): JSX.Element {
    return (
        <thead {...props} className={cn("", className)}>
            {children}
        </thead>
    )
}

export default ArticleTableHeadComponent
