import type { JSX } from "react"
import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"

/**
 * @summary Chronological milestones in road fuel development and standardization.
 */
function ArticleHistoryTimelineComponent(): JSX.Element {
    const events = [
        {
            year: "1923",
            text: "W USA zaczyna się powszechnie stosować TEL, który zwiększa odporność benzyny na stuk.",
        },
        {
            year: "1975",
            text: "Począwszy od roku modelowego 1975, amerykańskie samochody osobowe i lekkie ciężarówki powszechnie wyposaża się w katalizatory wymagające paliwa bezołowiowego.",
        },
        {
            year: "1996",
            text: "Od 1 stycznia w USA obowiązuje zakaz sprzedaży benzyny ołowiowej do pojazdów drogowych.",
        },
        {
            year: "2000",
            text: "Zgodnie z dyrektywą 98/70/WE państwa UE mają zakazać wprowadzania benzyny ołowiowej do obrotu najpóźniej od 1 stycznia.",
        },
        {
            year: "2021",
            text: "W sierpniu UNEP ogłasza globalne wycofanie ołowiowej benzyny samochodowej po zakończeniu jej sprzedaży w Algierii.",
        },
        { year: "2024", text: "1 stycznia w Polsce rozpoczyna się zastępowanie benzyny 95 E5 paliwem 95 E10." },
        {
            year: "2025",
            text: "Ukazuje się EN 228:2025, europejska norma określająca wymagania dla gotowej benzyny bezołowiowej.",
        },
        { year: "2026", text: "Trwają prace nad nowymi wydaniami ISO 5164 i ISO 5163." },
    ] as const

    return (
        <figure
            data-reveal
            aria-labelledby="history-timeline-caption"
            className="space-y-5 rounded-2xl border border-border p-4 sm:p-6">
            <div className="relative">
                <span aria-hidden="true" className="absolute inset-y-4 left-2 w-px bg-border" />
                <ol className="relative space-y-4" role="list">
                    {events.map(({ year, text }) => (
                        <li key={year} className="relative pl-7 sm:pl-8">
                            <span
                                aria-hidden="true"
                                className="absolute top-5 left-0.5 size-3 rounded-full border-2 border-background bg-primary"
                            />
                            <div className="grid min-w-0 gap-2 rounded-xl bg-muted p-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4">
                                <time dateTime={year} className="text-lg font-semibold tabular-nums text-primary">
                                    {year}
                                </time>
                                <p className="text-sm leading-relaxed sm:text-base">
                                    {AbbreviationDefinitions.explainTerms(text)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <figcaption
                id="history-timeline-caption"
                className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p className="font-medium text-foreground">Od benzyny ołowiowej do współczesnych norm</p>
                <p>
                    Daty 1923, 1996, 2000, 2021, 2024 i 2025 oraz stan prac ISO w 2026 r. pochodzą z materiałów EPA,
                    EUR-Lex, UNEP, Ministerstwa Klimatu i Środowiska, British Standards Institution oraz ISO.
                </p>
            </figcaption>
        </figure>
    )
}

export default ArticleHistoryTimelineComponent
