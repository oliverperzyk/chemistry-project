import type { JSX } from "react"
import type { IArticleUnorderedList } from "@/oliverperzyk/lib/models/components/layout/material/list/interfaces/IArticleUnorderedList"
import { cn } from "@/oliverperzyk/lib/utils"

/**
 * @summary Consistent semantic ul element for educational articles.
 */
function ArticleUnorderedListComponent({
    children,
    className,
    ...props
}: Readonly<IArticleUnorderedList>): JSX.Element {
    return (
        <ul {...props} className={cn("list-disc space-y-2 pl-6 text-base leading-relaxed sm:text-lg", className)}>
            {children}
        </ul>
    )
}

export default ArticleUnorderedListComponent
