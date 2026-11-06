import type { JSX } from "react"
import { ArrowDownIcon } from "lucide-react"
import { AbbreviationDefinitions } from "@/oliverperzyk/lib/globals/content/AbbreviationDefinitions"

/**
 * @summary A simple diagram for users to check which type of fuel they should choose.
 */
function ArticleFuelDecisionDiagramComponent(): JSX.Element {
    const octaneChoices = [
        {
            label: "Minimum 95 RON",
            result: "Benzyna 95 spełnia wymaganie oktanowe. Jeśli producent zaleca 98, jej użycie może przynieść korzyść w określonych przez niego warunkach.",
        },
        {
            label: "Wymagane 98 RON",
            result: "Wybierz benzynę 98 lub inne paliwo o liczbie oktanowej co najmniej równej wymaganej.",
        },
        {
            label: "Oznaczenie AKI",
            result: "Sprawdź skalę (RON, MON lub AKI) i wymagania producenta. Dodanie stałej liczby punktów nie daje dokładnego przeliczenia na RON.",
        },
    ] as const
    const ethanolChoices = [
        {
            label: "Tak, zgodność potwierdzona",
            result: "Można stosować E10, jeśli paliwo spełnia również wymagania oktanowe producenta.",
        },
        {
            label: "Nie lub brak pewności",
            result: "Sprawdź dokumentację producenta i dostępne E5. Paliwo musi też spełniać wymaganą klasę oktanową.",
        },
    ] as const

    return (
        <figure
            data-reveal
            aria-labelledby="fuel-decision-caption"
            className="min-w-0 space-y-4 rounded-2xl border border-border p-4 sm:p-6">
            <p className="rounded-xl bg-muted p-4 text-center font-medium">
                Sprawdź instrukcję lub oznaczenie przy wlewie paliwa.
            </p>
            <ArrowDownIcon aria-hidden="true" className="mx-auto size-5 text-muted-foreground" />
            <p className="text-center font-semibold">Jaka jest minimalna liczba oktanowa?</p>
            <ul role="list" className="grid gap-3 sm:grid-cols-3">
                {octaneChoices.map(({ label, result }) => (
                    <li key={label} className="min-w-0 space-y-3 rounded-xl bg-muted p-4">
                        <p className="font-semibold">{AbbreviationDefinitions.explainTerms(label)}</p>
                        <p className="text-sm leading-relaxed">{AbbreviationDefinitions.explainTerms(result)}</p>
                    </li>
                ))}
            </ul>
            <ArrowDownIcon aria-hidden="true" className="mx-auto size-5 text-muted-foreground" />
            <p className="text-center font-semibold">Czy samochód jest przystosowany do E10?</p>
            <ul role="list" className="grid gap-3 sm:grid-cols-2">
                {ethanolChoices.map(({ label, result }) => (
                    <li key={label} className="min-w-0 space-y-3 rounded-xl bg-muted p-4">
                        <p className="font-semibold">{label}</p>
                        <p className="text-sm leading-relaxed">{result}</p>
                    </li>
                ))}
            </ul>
            <figcaption id="fuel-decision-caption" className="text-sm leading-relaxed text-muted-foreground">
                Wybór benzyny wymaga sprawdzenia zarówno liczby oktanowej, jak i dopuszczalnej zawartości etanolu.
            </figcaption>
        </figure>
    )
}

export default ArticleFuelDecisionDiagramComponent
