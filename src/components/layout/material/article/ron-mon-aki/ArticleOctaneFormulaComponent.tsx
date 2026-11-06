import type { JSX } from "react"
import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import ArticleAbbreviationComponent from "../../content/ArticleAbbreviationComponent"

/**
 * @summary The octane index formula displayed as a stacked fraction.
 * @description It's used in the beginning of the article & in comparsion table.
 */
function ArticleOctaneFormulaComponent({ showResult = true }: { readonly showResult?: boolean }): JSX.Element {
    return (
        <span className="inline-flex items-center gap-3 align-middle whitespace-nowrap">
            {showResult && (
                <>
                    <ArticleAbbreviationComponent definition={AbbreviationDefinitions.AKI}>
                        AKI
                    </ArticleAbbreviationComponent>
                    <span>=</span>
                </>
            )}
            <span className="inline-flex flex-col items-stretch text-center">
                <span className="sr-only">Suma </span>
                <span className="inline-flex items-center justify-center gap-2 border-b border-current px-2 pb-2">
                    <ArticleAbbreviationComponent definition={AbbreviationDefinitions.RON}>
                        RON
                    </ArticleAbbreviationComponent>
                    <span>+</span>
                    <ArticleAbbreviationComponent definition={AbbreviationDefinitions.MON}>
                        MON
                    </ArticleAbbreviationComponent>
                </span>
                <span className="sr-only"> podzielona przez </span>
                <span className="pt-2">2</span>
            </span>
        </span>
    )
}

export default ArticleOctaneFormulaComponent
