import type { JSX } from "react"
import { ArrowDownIcon } from "lucide-react"
import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"
import ArticleAbbreviationComponent from "../../content/ArticleAbbreviationComponent"
import ArticleOctaneFormulaComponent from "./ArticleOctaneFormulaComponent"

/**
 * @summary Two independent octane tests and the calculation that combines their results.
 * @description It uses figure, so this element will be treated as an image, meanwhile it's just some grids & SVG images (icons).
 */
function ArticleMeasurementDiagramComponent(): JSX.Element {
    return (
        <figure
            data-reveal
            aria-label="Schemat wyznaczania RON i MON oraz obliczania AKI"
            className="space-y-4 rounded-2xl border border-border p-4 sm:p-6">
            <ol className="flex flex-col items-center gap-3 text-center">
                <li className="w-full max-w-sm rounded-xl bg-muted p-4 font-medium">Próbka badanego paliwa</li>
                <li className="flex w-full max-w-sm flex-col items-center gap-3">
                    <ArrowDownIcon aria-hidden="true" className="size-5 text-muted-foreground" />
                    <div className="w-full rounded-xl bg-muted p-4 font-medium">
                        Znormalizowany silnik{" "}
                        <ArticleAbbreviationComponent definition={AbbreviationDefinitions.CFR}>
                            CFR
                        </ArticleAbbreviationComponent>
                    </div>
                </li>
                <li className="flex flex-col items-center gap-3">
                    <ArrowDownIcon aria-hidden="true" className="size-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Wybrana metoda</span>
                </li>
            </ol>
            <div className="grid gap-4 sm:grid-cols-2">
                {(["RON", "MON"] as const).map((method) => (
                    <div
                        key={method}
                        className="flex min-w-0 flex-col items-center gap-3 rounded-xl bg-muted p-4 text-center">
                        <ArrowDownIcon aria-hidden="true" className="size-5 text-muted-foreground" />
                        <p className="text-xl font-semibold">
                            <ArticleAbbreviationComponent definition={AbbreviationDefinitions[method]}>
                                {method}
                            </ArticleAbbreviationComponent>
                        </p>
                        <p>{method === "RON" ? "łagodniejsze warunki" : "bardziej wymagające warunki"}</p>
                        <p className="text-sm text-muted-foreground">
                            <ArticleAbbreviationComponent definition={AbbreviationDefinitions.ASTM}>
                                ASTM
                            </ArticleAbbreviationComponent>{" "}
                            {method === "RON" ? "D2699" : "D2700"} /{" "}
                            <ArticleAbbreviationComponent definition={AbbreviationDefinitions.ISO}>
                                ISO
                            </ArticleAbbreviationComponent>{" "}
                            {method === "RON" ? "5164" : "5163"}
                        </p>
                        <ArrowDownIcon aria-hidden="true" className="size-5 text-muted-foreground" />
                        <p>
                            Porównanie intensywności stuku z paliwami{" "}
                            <ArticleAbbreviationComponent definition={AbbreviationDefinitions.PRF}>
                                PRF
                            </ArticleAbbreviationComponent>
                        </p>
                        <ArrowDownIcon aria-hidden="true" className="size-5 text-muted-foreground" />
                        <p className="font-semibold">
                            Wynik{" "}
                            <ArticleAbbreviationComponent definition={AbbreviationDefinitions[method]}>
                                {method}
                            </ArticleAbbreviationComponent>
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
                <ArrowDownIcon aria-hidden="true" className="size-5 text-muted-foreground" />
                <p className="w-full rounded-xl bg-muted p-4 text-lg font-semibold">
                    <ArticleOctaneFormulaComponent />
                </p>
            </div>
            <figcaption className="text-center text-sm leading-relaxed text-muted-foreground">
                Do obliczenia{" "}
                <ArticleAbbreviationComponent definition={AbbreviationDefinitions.AKI}>
                    AKI
                </ArticleAbbreviationComponent>{" "}
                potrzebne są wyniki dwóch odrębnych badań:{" "}
                <ArticleAbbreviationComponent definition={AbbreviationDefinitions.RON}>
                    RON
                </ArticleAbbreviationComponent>{" "}
                i{" "}
                <ArticleAbbreviationComponent definition={AbbreviationDefinitions.MON}>
                    MON
                </ArticleAbbreviationComponent>
                .
            </figcaption>
        </figure>
    )
}

export default ArticleMeasurementDiagramComponent
