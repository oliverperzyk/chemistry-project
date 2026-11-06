import type { IChildren } from "@/oliverperzyk/lib/models/components/base/interfaces/IChildren"
import type { JSX } from "react"
import MaterialArticleComponent from "@/oliverperzyk/components/layout/material/layout/MaterialArticleComponent"

/**
 * @summary Shared layout of the educational material pages.
 * @description Wraps server-rendered page content in the article header & automatic heading navigation.
 */
function MaterialLayout({ children }: Readonly<IChildren>): JSX.Element {
    return <MaterialArticleComponent>{children}</MaterialArticleComponent>
}

export default MaterialLayout
