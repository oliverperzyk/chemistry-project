import type { Metadata } from "next"
import type { JSX } from "react"
import { PageMetadataManager } from "@/oliverperzyk/lib/globals/managers/material/PageMetadataManager"
import ArticleHeadingComponent from "@/oliverperzyk/components/layout/material/content/ArticleHeadingComponent"
import ArticleParagraphComponent from "@/oliverperzyk/components/layout/material/content/ArticleParagraphComponent"
import ArticleRememberComponent from "@/oliverperzyk/components/layout/material/content/ArticleRememberComponent"
import ArticleReferenceComponent from "@/oliverperzyk/components/layout/material/content/ArticleReferenceComponent"
import ArticleLink from "@/oliverperzyk/components/layout/material/content/ArticleLink"
import ArticleListItemComponent from "@/oliverperzyk/components/layout/material/list/ArticleListItemComponent"
import ArticleTableComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableComponent"
import ArticleTableHeadComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableHeadComponent"
import ArticleTableBodyComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableBodyComponent"
import ArticleTableRowComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableRowComponent"
import ArticleTableColumnComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableColumnComponent"
import ArticleTableElementComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableElementComponent"
import ArticleOctaneFormulaComponent from "@/oliverperzyk/components/layout/material/article/ron-mon-aki/ArticleOctaneFormulaComponent"
import ArticleFuelDecisionDiagramComponent from "@/oliverperzyk/components/layout/material/article/poradnik/ArticleFuelDecisionDiagramComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/poradnik")

/**
 * @summary Choosing gasoline by manufacturer requirements, octane scale, and ethanol compatibility.
 */
function FuelSelectionGuidePage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="wymagania-producenta" level={2}>
                Sprawdź wymagania producenta
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Sprawdź w instrukcji samochodu minimalną i zalecaną liczbę oktanową. Te wymagania są podstawą wyboru
                paliwa; reklama ani wyższa liczba na dystrybutorze ich nie zastępują. Informacje znajdziesz też przy
                wlewie paliwa i w oficjalnej dokumentacji producenta. Ministerstwo Klimatu i Środowiska zaleca te same
                źródła przy sprawdzaniu zgodności z E10. W razie wątpliwości radzi skontaktować się z producentem lub
                dealerem.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Jeśli producent wymaga minimum RON 95, benzyna 95 spełniająca odpowiednią normę odpowiada wymaganiom
                tego samochodu. Benzyna 98 też może być bezpiecznym wyborem pod względem liczby oktanowej. Sama wyższa
                liczba nie zapewnia jednak większej mocy, mniejszego zużycia paliwa ani „lepszego spalania”. Według{" "}
                <ArticleLink
                    href="https://www.fueleconomy.gov/feg/octane.shtml"
                    title="FuelEconomy.gov — Selecting the Right Octane Fuel">
                    FuelEconomy.gov
                </ArticleLink>{" "}
                w większości samochodów paliwo o liczbie oktanowej wyższej niż wymagana przynosi podczas normalnej jazdy
                niewielką korzyść lub nie przynosi jej wcale.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="kiedy-98-ma-sens" level={2}>
                Kiedy 98 ma sens?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Jeśli producent wymaga benzyny 98, tankuj paliwo spełniające to wymaganie. Niższa odporność na stuk może
                wymusić korekty pracy silnika przez układ sterowania i ograniczyć osiągi. Przy niewłaściwym użytkowaniu
                zwiększa też ryzyko problemów.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Zapis „minimum 95, 98 zalecane” zwykle pozwala tankować 95. W określonych warunkach silnik potrafi
                jednak wykorzystać większą odporność benzyny 98 na stuk. Zależy to od konstrukcji i oprogramowania,
                szczególnie w silnikach o wysokim stopniu sprężania, doładowanych i pracujących pod dużym obciążeniem.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Jeśli instrukcja przewiduje 95 i nie wskazuje korzyści z 98, sama liczba oktanowa nie uzasadnia zakupu
                droższego paliwa. Oznaczenie 98 mówi o większej odporności na stuk. Nie gwarantuje większej energii
                chemicznej na litr ani poprawy pozostałych parametrów paliwa.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="zgodnosc-z-e10" level={2}>
                Sprawdź również zgodność z E10
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Poza liczbą oktanową liczy się dopuszczalna zawartość etanolu. Od początku 2024 r. benzyna 95 w Polsce
                jest stopniowo oferowana jako E10. Według Ministerstwa Klimatu i Środowiska zdecydowana większość
                samochodów benzynowych wyprodukowanych po 1 stycznia 2010 r. jest do niej przystosowana. Zgodność
                starszego samochodu trzeba sprawdzić indywidualnie.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Pomóc może{" "}
                <ArticleLink
                    href="https://e10.klimat.gov.pl/"
                    title="Oficjalna wyszukiwarka kompatybilności pojazdów z benzyną E10">
                    oficjalna wyszukiwarka zgodności z E10
                </ArticleLink>
                . W razie wątpliwości kieruj się dokumentacją producenta konkretnego pojazdu.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="samochod-z-usa" level={2}>
                Samochód z USA: oznaczenia 87, 89 i 91
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                W amerykańskich instrukcjach i na dystrybutorach spotkasz liczby 87, 89 lub 91. W USA na stacjach
                stosuje się AKI, czyli średnią RON i MON.
            </ArticleParagraphComponent>
            <ArticleReferenceComponent>
                <p className="text-center text-lg font-semibold text-foreground sm:text-xl">
                    <ArticleOctaneFormulaComponent />
                </p>
            </ArticleReferenceComponent>
            <ArticleParagraphComponent>
                Zapis „87 octane” w amerykańskiej instrukcji nie oznacza więc „87 RON”. Starszy materiał EPA wskazuje,
                że RON typowej benzyny może być o kilka punktów wyższy od AKI. Nie jest to jednak uniwersalny
                przelicznik. Do dokładnego wyliczenia AKI trzeba znać zarówno RON, jak i MON.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Dla samochodu sprowadzonego z USA sprawdź skalę w dokumentacji producenta i na tej podstawie dobierz
                europejskie paliwo. Reguła „zawsze dodaj lub odejmij cztery punkty” nie daje dokładnego przeliczenia.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="wybor-paliwa-w-typowych-sytuacjach" level={2}>
                Wybór paliwa w typowych sytuacjach
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Wymagania samochodu a wybór benzyny">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Sytuacja</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Rozsądny wybór</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            Instrukcja: minimum 95 RON
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            95 spełnia wymaganie. Wyższa liczba oktanowa sama w sobie nie oznacza, że potrzebujesz 98.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            Instrukcja: 98 RON wymagane
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Wybierz paliwo spełniające co najmniej wymaganą klasę oktanową.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            Instrukcja: minimum 95, 98 zalecane
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            95 spełnia minimum producenta. 98 może przynieść korzyść w przewidzianych przez niego
                            warunkach.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            Starszy samochód, brak pewności co do E10
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Sprawdź instrukcję, oznaczenie przy wlewie i informacje producenta. Pomocniczo skorzystaj z
                            oficjalnej wyszukiwarki.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            Import z USA z oznaczeniem 87 lub 91
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Sprawdź, czy podano AKI. Nie porównuj tej wartości bezpośrednio z europejskim RON.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleHeadingComponent id="proste-drzewo-decyzji" level={3}>
                Jak dobrać benzynę?
            </ArticleHeadingComponent>
            <ArticleFuelDecisionDiagramComponent />
            <ArticleHeadingComponent id="mit-czy-fakt" level={2}>
                Mit czy fakt?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                „98 zawsze daje więcej mocy” to mit. Wyższa liczba oktanowa może poprawić osiągi, jeśli konstrukcja i
                ustawienia silnika pozwalają ją wykorzystać. W innych silnikach różnica może być pomijalna.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                „95 pali się gorzej niż 98” to zbyt duże uproszczenie. Liczba oktanowa określa odporność na stuk, a nie
                ogólną „jakość spalania”.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                „Amerykańskie 87 to fatalne paliwo w porównaniu z europejską 95” to mit oparty na porównaniu różnych
                skal. W USA stosuje się AKI, a w Europie RON.
            </ArticleParagraphComponent>
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    Wymagania dotyczące paliwa sprawdzaj w instrukcji i oficjalnej dokumentacji producenta samochodu.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Benzyna 98 jest bardziej odporna na stuk niż 95. Nie gwarantuje to jednak większej mocy ani
                    mniejszego zużycia paliwa.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Przy wyborze sprawdzaj zarówno wymaganą liczbę oktanową, jak i zgodność samochodu z E10.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Amerykańskie wartości 87, 89 i 91 zwykle oznaczają AKI. Nie porównuj ich bezpośrednio z europejskim
                    RON.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Wyższa liczba oktanowa jest szczególnie przydatna wtedy, gdy konstrukcja i sterowanie silnika
                    pozwalają ją wykorzystać.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default FuelSelectionGuidePage
