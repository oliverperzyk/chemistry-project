import type { JSX } from "react"
import { BookOpenIcon } from "lucide-react"
import type { IArticleRemember } from "@/oliverperzyk/lib/models/components/layout/material/content/interfaces/IArticleRemember"
import ArticleHeadingComponent from "./ArticleHeadingComponent"
import ArticleUnorderedListComponent from "../list/ArticleUnorderedListComponent"

/**
 * @summary Shared Zapamiętaj summary panel; children are article list items.
 */
function ArticleRememberComponent({ children, id = "zapamietaj" }: Readonly<IArticleRemember>): JSX.Element {
    return (
        <section data-reveal aria-labelledby={id} className="space-y-5 rounded-2xl bg-muted p-5 sm:p-6">
            <ArticleHeadingComponent id={id} level={2} className="flex items-center gap-3 pt-0">
                <BookOpenIcon className="size-6 shrink-0" aria-hidden="true" />
                <span>Zapamiętaj</span>
            </ArticleHeadingComponent>
            <ArticleUnorderedListComponent className="pl-5">{children}</ArticleUnorderedListComponent>
        </section>
    )
}

export default ArticleRememberComponent
