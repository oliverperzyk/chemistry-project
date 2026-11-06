import { cloneElement, createElement, Fragment, isValidElement, type HTMLAttributes, type ReactNode } from "react"
import ArticleAbbreviationComponent from "@/oliverperzyk/components/layout/material/content/ArticleAbbreviationComponent"

/**
 * @summary Shared explanations of abbreviations used in educational articles.
 */
class AbbreviationDefinitions {
    private constructor() {}

    // Add new terms below to include them in explanations, e.g.
    // public static readonly KEN: string = "Komisja Edukacji Narodowej"
    public static readonly PRF: string = "Primary Reference Fuels to podstawowe paliwa odniesienia."
    public static readonly RON: string = "Research Octane Number to badawcza liczba oktanowa."
    public static readonly MON: string = "Motor Octane Number to motorowa liczba oktanowa."
    public static readonly AKI: string = "Anti-Knock Index to indeks przeciwstukowy obliczany jako średnia RON i MON."
    public static readonly CFR: string =
        "CFR (Cooperative Fuel Research) oznacza znormalizowany silnik badawczy do pomiaru liczby oktanowej."
    public static readonly ASTM: string =
        "ASTM International to organizacja opracowująca normy, w tym metody badania paliw."
    public static readonly NIST: string =
        "National Institute of Standards and Technology to amerykański Narodowy Instytut Standardów i Technologii."
    public static readonly DOE: string = "U.S. Department of Energy to Departament Energii Stanów Zjednoczonych."
    public static readonly ISO: string =
        "International Organization for Standardization to Międzynarodowa Organizacja Normalizacyjna."
    public static readonly SI: string = "Spark Ignition to zapłon iskrowy."
    public static readonly ECU: string = "Electronic Control Unit to elektroniczny sterownik silnika."

    public static readonly FFV: string =
        "Flexible Fuel Vehicles to pojazdy przystosowane do pracy na paliwach o różnej zawartości etanolu."
    public static readonly FAA: string =
        "Federal Aviation Administration to Federalna Administracja Lotnictwa Stanów Zjednoczonych."

    public static readonly MTBE: string = "Methyl tert-butyl ether to eter metylowo-tert-butylowy."
    public static readonly TEL: string = "Tetraethyllead to tetraetyloołów."
    public static readonly EPA: string =
        "U.S. Environmental Protection Agency to amerykańska Agencja Ochrony Środowiska."

    public static readonly UNEP: string =
        "United Nations Environment Programme to Program Narodów Zjednoczonych ds. Środowiska."

    /**
     * @summary Elements that won't be affected by `explainTerms` method.
     */
    private static readonly excludedElements: ReadonlySet<string> = new Set([
        "a",
        "button",
        "abbr",
        "code",
        "pre",
        "svg",
        "math",
        "script",
        "style",
        "noscript",
        "input",
        "textarea",
        "select",
        "option",
        "label",
        "details",
        "summary",
        "audio",
        "video",
        "iframe",
        "canvas",
    ])

    /**
     * @summary Explains complete abbreviations without altering surrounding text or interactive content.
     * @param content - Either text or ReactNode that'll be transfered to include abbr references.
     * @returns Updated content with explained some of the terms.
     */
    public static explainTerms(text: string): ReactNode[]
    public static explainTerms(content: ReactNode): ReactNode
    public static explainTerms(content: ReactNode): ReactNode {
        if (typeof content === "string") return AbbreviationDefinitions.explainText(content)
        if (Array.isArray(content)) {
            return content.map((child, index) => {
                const explained = AbbreviationDefinitions.explainTerms(child)
                return isValidElement(explained) && explained.key === null
                    ? cloneElement(explained, { key: index })
                    : explained
            })
        }
        if (!isValidElement<HTMLAttributes<HTMLElement>>(content)) return content
        if (content.type !== Fragment && typeof content.type !== "string") return content

        const props = content.props
        if (
            (typeof content.type === "string" && AbbreviationDefinitions.excludedElements.has(content.type)) ||
            props.hidden ||
            props["aria-hidden"] === true ||
            props["aria-hidden"] === "true" ||
            props.className?.split(/\s+/u).includes("sr-only") ||
            (props.contentEditable != null && props.contentEditable !== false && props.contentEditable !== "false") ||
            props.role === "button" ||
            props.role === "link" ||
            props.onClick ||
            (props.tabIndex != null && props.tabIndex >= 0) ||
            props.dangerouslySetInnerHTML ||
            !("children" in props)
        )
            return content

        return cloneElement(content, undefined, AbbreviationDefinitions.explainTerms(props.children))
    }

    /**
     * @summary Retains punctuation and whitespace while creating stable abbreviation elements.
     */
    private static explainText(text: string): ReactNode[] {
        return text
            .split(
                /(?<![\p{L}\p{M}\p{N}_])(RON|MON|AKI|CFR|PRF|ASTM|NIST|DOE|ISO|SI|ECU|FFV|FAA|MTBE|TEL|EPA|UNEP)(?![\p{L}\p{M}\p{N}_])/u,
            )
            .map((part, index) => {
                if (index % 2 === 0) return part
                const term = part as
                    | "RON"
                    | "MON"
                    | "AKI"
                    | "CFR"
                    | "PRF"
                    | "ASTM"
                    | "NIST"
                    | "DOE"
                    | "ISO"
                    | "SI"
                    | "ECU"
                    | "FFV"
                    | "FAA"
                    | "MTBE"
                    | "TEL"
                    | "EPA"
                    | "UNEP"
                const props = {
                    key: index,
                    definition: AbbreviationDefinitions[term],
                    children: term,
                }
                return createElement(ArticleAbbreviationComponent, props)
            })
    }
}

export { AbbreviationDefinitions }
