"use client"

import type { JSX } from "react"
import { Tabs } from "@base-ui/react/tabs"
import { ethanolContents, roadFuelRatings } from "@/oliverperzyk/lib/globals/content/FuelComparisonData"
import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"

import ArticleTableComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableComponent"
import ArticleTableHeadComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableHeadComponent"
import ArticleTableBodyComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableBodyComponent"
import ArticleTableRowComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableRowComponent"
import ArticleTableColumnComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableColumnComponent"
import ArticleTableElementComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableElementComponent"

/**
 * @summary Compares like-for-like fuel properties without mixing octane and ethanol scales.
 * @description Uses Tabs component from Base UI (that relies on shadcn/ui) to fit more content inside a single card, to not make the website feel bloated.
 */
function ArticleFuelComparisonComponent(): JSX.Element {
    return (
        <section
            data-reveal
            aria-label="Interaktywne porównanie paliw"
            className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-6">
            <Tabs.Root defaultValue="ron">
                <Tabs.List
                    activateOnFocus
                    aria-label="Wybierz, co chcesz porównać"
                    className="grid grid-cols-3 gap-1 rounded-xl bg-muted p-1">
                    {[
                        ["ron", "RON"],
                        ["ethanol", "Zawartość etanolu"],
                        ["usage", "Zastosowanie"],
                    ].map(([value, label]) => (
                        <Tabs.Tab
                            key={value}
                            value={value}
                            className="min-w-0 cursor-pointer rounded-lg px-2 py-3 text-xs font-medium text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[active]:bg-background data-[active]:text-foreground data-[active]:shadow-sm sm:text-sm">
                            {label}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                <Tabs.Panel value="ron" className="space-y-5 pt-6 focus-visible:outline-2 focus-visible:outline-ring">
                    <p className="text-sm leading-relaxed">
                        {AbbreviationDefinitions.explainTerms(
                            "Benzyna 98 jest bardziej odporna na spalanie stukowe niż 95. Obie liczby RON wyznacza się tą samą metodą.",
                        )}
                    </p>
                    <div className="space-y-4" aria-label="Klasy RON na skali od 0 do 100">
                        {roadFuelRatings.map(({ label, value }) => (
                            <div key={label} className="space-y-2">
                                <p className="flex justify-between gap-3 text-sm font-medium">
                                    <span>Benzyna {label}</span>
                                    <span>{value} RON</span>
                                </p>
                                <div aria-hidden="true" className="h-4 overflow-hidden rounded-full bg-muted">
                                    <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
                                </div>
                            </div>
                        ))}
                        <div aria-hidden="true" className="flex justify-between text-xs text-muted-foreground">
                            <span>0</span>
                            <span>50</span>
                            <span>100 RON</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {AbbreviationDefinitions.explainTerms(
                            "E10 i E85 opisują udział etanolu, a 100LL to oznaczenie lotnicze. Żadne z tych oznaczeń nie podaje liczby RON, którą można bezpośrednio porównać z 95 lub 98.",
                        )}
                    </p>
                </Tabs.Panel>
                <Tabs.Panel
                    value="ethanol"
                    className="space-y-5 pt-6 focus-visible:outline-2 focus-visible:outline-ring">
                    <p className="text-sm leading-relaxed">
                        {AbbreviationDefinitions.explainTerms(
                            "E5 i E10 określają maksymalną zawartość etanolu. Według amerykańskiego DOE E85 zawiera od 51 do 83% etanolu, zależnie od sezonu i regionu.",
                        )}
                    </p>
                    <div className="space-y-4" aria-label="Zawartość etanolu na skali od 0 do 100 procent objętościowo">
                        {ethanolContents.map(({ label, minimum, maximum, kind }) => (
                            <div key={label} className="space-y-2">
                                <p className="flex flex-wrap justify-between gap-x-3 text-sm font-medium">
                                    <span>{label}</span>
                                    <span>
                                        {kind === "limit"
                                            ? `Limit: do ${maximum}%`
                                            : `Zakres: od ${minimum} do ${maximum}%`}
                                    </span>
                                </p>
                                <div aria-hidden="true" className="relative h-5 rounded-full bg-muted">
                                    <div
                                        className={
                                            kind === "limit"
                                                ? "absolute inset-y-0 rounded-l-full border-r-2 border-dashed border-primary bg-primary/25"
                                                : "absolute inset-y-0 rounded-full border-2 border-primary bg-primary"
                                        }
                                        style={{ left: `${minimum}%`, width: `${maximum - minimum}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                        <div aria-hidden="true" className="flex justify-between text-xs text-muted-foreground">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Przerywana linia wyznacza maksymalną zawartość etanolu, a pełny odcinek pokazuje jej zakres. Są
                        to dopuszczalne granice zawartości etanolu, a nie wyniki pomiaru konkretnej próbki paliwa.
                    </p>
                </Tabs.Panel>
                <Tabs.Panel value="usage" className="space-y-3 pt-6 focus-visible:outline-2 focus-visible:outline-ring">
                    <ArticleTableComponent caption="Zastosowanie paliw">
                        <ArticleTableHeadComponent>
                            <ArticleTableRowComponent>
                                <ArticleTableColumnComponent>Paliwo lub oznaczenie</ArticleTableColumnComponent>
                                <ArticleTableColumnComponent>
                                    Do jakich pojazdów jest przeznaczone?
                                </ArticleTableColumnComponent>
                            </ArticleTableRowComponent>
                        </ArticleTableHeadComponent>
                        <ArticleTableBodyComponent>
                            <ArticleTableRowComponent>
                                <ArticleTableColumnComponent scope="row">
                                    Benzyna 95 lub 98 oznaczona jako E10
                                </ArticleTableColumnComponent>
                                <ArticleTableElementComponent>
                                    Do samochodów benzynowych, których producent dopuszcza E10. Paliwo musi też mieć
                                    wymaganą liczbę oktanową.
                                </ArticleTableElementComponent>
                            </ArticleTableRowComponent>
                            <ArticleTableRowComponent>
                                <ArticleTableColumnComponent scope="row">E85</ArticleTableColumnComponent>
                                <ArticleTableElementComponent>
                                    Do pojazdów FFV przystosowanych do mieszanek o dużej i zmiennej zawartości etanolu,
                                    zgodnie z zaleceniami producenta.
                                </ArticleTableElementComponent>
                            </ArticleTableRowComponent>
                            <ArticleTableRowComponent>
                                <ArticleTableColumnComponent scope="row">100LL avgas</ArticleTableColumnComponent>
                                <ArticleTableElementComponent>
                                    Do odpowiednich lotniczych silników tłokowych o zapłonie iskrowym, zgodnie z
                                    dokumentacją samolotu i silnika.
                                </ArticleTableElementComponent>
                            </ArticleTableRowComponent>
                        </ArticleTableBodyComponent>
                    </ArticleTableComponent>
                </Tabs.Panel>
            </Tabs.Root>
        </section>
    )
}

export default ArticleFuelComparisonComponent
