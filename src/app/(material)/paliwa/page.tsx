import type { Metadata } from "next"
import type { JSX } from "react"
import { PageMetadataManager } from "@/oliverperzyk/lib/globals/managers/material/PageMetadataManager"
import ArticleHeadingComponent from "@/oliverperzyk/components/layout/material/content/ArticleHeadingComponent"
import ArticleParagraphComponent from "@/oliverperzyk/components/layout/material/content/ArticleParagraphComponent"
import ArticleRememberComponent from "@/oliverperzyk/components/layout/material/content/ArticleRememberComponent"
import ArticleListItemComponent from "@/oliverperzyk/components/layout/material/list/ArticleListItemComponent"
import ArticleTableComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableComponent"
import ArticleTableHeadComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableHeadComponent"
import ArticleTableBodyComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableBodyComponent"
import ArticleTableRowComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableRowComponent"
import ArticleTableColumnComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableColumnComponent"
import ArticleTableElementComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableElementComponent"
import ArticleFuelComparisonComponent from "@/oliverperzyk/components/layout/material/article/paliwa/ArticleFuelComparisonComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/paliwa")

/**
 * @summary Comparison of road fuel labels, ethanol content, and aviation gasoline.
 */
function FuelsPage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="95-to-nie-to-samo-co-e10" level={2}>
                Co oznaczają 95 i E10?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Na dystrybutorze symbole „95” i „E10” opisują różne właściwości benzyny. Liczba 95 określa odporność na
                spalanie stukowe w stosowanej w Europie skali RON. E10 podaje maksymalną zawartość etanolu.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                1 stycznia 2024 r. w Polsce rozpoczęto zastępowanie standardowej benzyny 95 E5 paliwem 95 E10. Benzyna
                E10 może zawierać do 10% etanolu objętościowo, a E5 do 5%.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                E10 nie oznacza więc „10 oktanów”. Benzyna 98 także może występować jako E10, bo zawartość etanolu i
                odporność na stuk to osobne parametry. W komunikatach rządowych o wprowadzeniu 95 E10 zapowiedziano, że
                benzyna 98 pozostanie dostępna jako E5. Przy tankowaniu zawsze sprawdź oznaczenie paliwa na
                dystrybutorze.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="najpopularniejsze-paliwa" level={2}>
                Co oznaczają nazwy popularnych paliw?
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Porównanie oznaczeń i zastosowań paliw">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Oznaczenie</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Znaczenie</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>O czym warto pamiętać?</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">95</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Benzyna o liczbie oktanowej 95 w skali RON.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Od 2024 r. w Polsce stopniowo wprowadza się standardową benzynę 95 w wariancie E10.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">98</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Benzyna bardziej odporna na spalanie stukowe niż benzyna RON 95.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Stosuj ją przede wszystkim wtedy, gdy producent silnika jej wymaga lub ją zaleca.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">E10</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Benzyna zawierająca do 10% etanolu objętościowo.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            To oznaczenie nie określa liczby oktanowej.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">E85</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Mieszanka z dużym udziałem etanolu do samochodów flex-fuel. Według amerykańskiego DOE
                            zawiera od 51 do 83% etanolu, zależnie od sezonu i regionu.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Nie nadaje się do zwykłych samochodów benzynowych bez odpowiedniego przystosowania.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">100LL avgas</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Ołowiowa benzyna lotnicza używana w części samolotów z silnikami tłokowymi.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Oznaczenia lotnicze nie są bezpośrednimi odpowiednikami samochodowej skali RON.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleHeadingComponent id="e85-nazwa-i-sklad" level={2}>
                Dlaczego E85 nie zawsze zawiera 85% etanolu?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Skład E85 zmienia się między innymi w zależności od pory roku i regionu sprzedaży. Według amerykańskiego
                DOE paliwo z tym oznaczeniem zawiera od 51 do 83% etanolu.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Takie mieszanki są przeznaczone do pojazdów FFV, czyli <em>Flexible Fuel Vehicles</em>. Ich silniki i
                układy paliwowe przystosowano do paliw o bardzo różnej zawartości etanolu.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Etanol ma wysoką liczbę oktanową, dlatego może zwiększać odporność paliwa na spalanie stukowe. Paliwom
                E85 nie można jednak przypisać jednej, stałej liczby oktanowej. Jej wartość zależy od składu mieszanki i
                metody pomiaru.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="paliwo-lotnicze-100ll" level={2}>
                Jak rozumieć oznaczenie lotniczego paliwa 100LL?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Avgas to benzyna do tłokowych silników lotniczych o zapłonie iskrowym. Ma inne wymagania niż benzyna
                samochodowa, a jej właściwości opisuje się w inny sposób.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Norma ISO 5163 opisuje badanie paliw lotniczych metodą MON oraz związek tej metody z lotniczą liczbą
                oktanową lub parametrem <em>performance number</em>. Dlatego „100” w nazwie 100LL nie oznacza „100 RON”.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                W 2026 r. FAA pracuje nad wycofaniem ołowiowej benzyny lotniczej. Planuje stworzyć warunki do przejścia
                na paliwa bezołowiowe do 2030 r. W okresie przejściowym 100LL ma pozostać dostępna tam, gdzie jest
                potrzebna do bezpiecznego użytkowania obecnej floty samolotów.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="porownaj-oznaczenia-paliw" level={3}>
                Oznaczenia paliw a ich zastosowanie
            </ArticleHeadingComponent>
            <ArticleFuelComparisonComponent />
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    Oznaczenia 95 i 98 określają odporność benzyny na spalanie stukowe. Symbole E5, E10 i E85 odnoszą
                    się przede wszystkim do zawartości etanolu.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    W 2024 r. w Polsce rozpoczęto stopniowe zastępowanie standardowej benzyny 95 E5 wariantem 95 E10.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    E85 jest przeznaczone do samochodów flex-fuel. Zawartość etanolu w tym paliwie nie musi wynosić
                    dokładnie 85%.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Na podstawie samej liczby w nazwie 100LL nie można bezpośrednio porównać tej benzyny lotniczej z
                    samochodową.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Porównując liczby oktanowe, sprawdź zastosowaną skalę lub metodę: RON, MON, AKI albo system
                    lotniczy.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default FuelsPage
