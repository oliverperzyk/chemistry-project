import type { Metadata } from "next"
import type { JSX } from "react"
import { PageMetadataManager } from "@/oliverperzyk/lib/globals/managers/material/PageMetadataManager"
import ArticleHeadingComponent from "@/oliverperzyk/components/layout/material/content/ArticleHeadingComponent"
import ArticleParagraphComponent from "@/oliverperzyk/components/layout/material/content/ArticleParagraphComponent"
import ArticleRememberComponent from "@/oliverperzyk/components/layout/material/content/ArticleRememberComponent"
import ArticleReferenceComponent from "@/oliverperzyk/components/layout/material/content/ArticleReferenceComponent"
import ArticleImageComponent from "@/oliverperzyk/components/layout/material/content/ArticleImageComponent"
import ArticleListItemComponent from "@/oliverperzyk/components/layout/material/list/ArticleListItemComponent"
import ArticleTableComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableComponent"
import ArticleTableHeadComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableHeadComponent"
import ArticleTableBodyComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableBodyComponent"
import ArticleTableRowComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableRowComponent"
import ArticleTableColumnComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableColumnComponent"
import ArticleTableElementComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableElementComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/dodatki")

/**
 * @summary Fuel components, octane-raising additives, and their health and environmental limitations.
 */
function FuelAdditivesPage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="sklad-chemiczny-a-liczba-oktanowa" level={2}>
                Liczba oktanowa zależy od składu chemicznego
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Benzyna zawiera wiele substancji o różnych właściwościach fizycznych i chemicznych. Rafineria dobiera
                frakcje i komponenty tak, aby paliwo miało odpowiednią odporność na stuk. Niektóre związki są znacznie
                odporniejsze od nierozgałęzionych alkanów. Na przykład rozgałęziony 2,2,4-trimetylopentan, czyli
                izooktan, jest bardziej odporny na stuk niż n-heptan.
            </ArticleParagraphComponent>
            <ArticleImageComponent
                src="/assets/images/material/co-to-jest/OctaneStds.png"
                width={863}
                height={572}
                alt="Wzory strukturalne rozgałęzionego izooktanu (2,2,4-trimetylopentanu) o liczbie oktanowej 100 i n-heptanu o prostym łańcuchu oraz liczbie oktanowej 0. Oba związki są substancjami odniesienia."
                sourceUrl="https://commons.wikimedia.org/wiki/File:OctaneStds.png"
                sourceLabel="Smokefoot - Wikimedia Commons, domena publiczna (PD chem)"
            />
            <ArticleParagraphComponent>
                Etanol i wysokooktanowe węglowodory mogą stanowić znaczną część gotowej benzyny. Są jej komponentami
                mieszankowymi. Dodatki, takie jak stosowany dawniej tetraetyloołów, zmieniają właściwości paliwa już w
                znacznie mniejszych ilościach. Potocznie oba rodzaje składników nazywa się „dodatkami”, ale w chemii i
                technologii paliw rozróżnia się ich rolę.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="etanol" level={2}>
                Etanol
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Według amerykańskiego Alternative Fuels Data Center etanol ma wyższą liczbę oktanową niż benzyna bazowa.
                Może więc zwiększać odporność mieszanki na spalanie stukowe.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Z tego powodu etanol dodaje się do współczesnych benzyn. W Polsce benzyna 95 E10 zawiera do 10%
                biokomponentów objętościowo, a E5 do 5%. Oznaczenie z literą „E” nie określa RON gotowego paliwa. Cała
                mieszanka musi spełniać wymagania jakościowe.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="etery-tlenowe-mtbe" level={2}>
                Etery tlenowe na przykładzie MTBE
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Do komponentów tlenowych należy również MTBE, czyli eter metylowo-tert-butylowy. EPA opisuje związki
                tlenowe jako substancje stosowane między innymi do podnoszenia liczby oktanowej. MTBE był powszechnie
                używany w benzynach w USA, początkowo także jako zamiennik ołowiowych dodatków przeciwstukowych.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                MTBE trzeba oceniać także pod kątem wpływu na środowisko. EPA zajmuje się zanieczyszczeniem wód takimi
                związkami po wyciekach z podziemnych zbiorników paliw. Przy doborze składu benzyny oprócz osiągów trzeba
                uwzględniać emisje, toksyczność, trwałość materiałów i ochronę środowiska.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="weglowodory-rozgalezione-i-aromatyczne" level={2}>
                Węglowodory rozgałęzione i aromatyczne
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Rozgałęzione alkany często są bardziej odporne na stuk niż ich nierozgałęzione odpowiedniki. Korzystne
                właściwości oktanowe mają też niektóre węglowodory aromatyczne. EPA wskazuje, że cięższe frakcje
                aromatyczne mogą istotnie podnosić liczbę oktanową. Ich udział w paliwie wpływa jednak również na emisje
                i jakość powietrza.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Zwiększanie udziału węglowodorów aromatycznych może poprawić liczbę oktanową kosztem innych właściwości
                benzyny. Dlatego normy produktowe, takie jak EN 228, określają wymagania dla wielu parametrów
                jednocześnie.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="tetraetyloolow" level={2}>
                Tetraetyloołów: skuteczność i toksyczność
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Tetraetyloołów, oznaczany skrótem TEL, był bardzo skutecznym dodatkiem przeciwstukowym. Dokumenty EPA
                opisują jego powszechne stosowanie w benzynie od lat 20. XX wieku w celu zwiększenia liczby oktanowej.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Ołów powodował jednak poważne szkody zdrowotne i środowiskowe. W USA sprzedaż ołowiowej benzyny do
                samochodów drogowych została zakazana od 1 stycznia 1996 r. Państwa Unii Europejskiej miały zakazać jej
                sprzedaży od początku 2000 r. Stosowanie ołowiowej benzyny samochodowej na świecie zakończyło się w 2021
                r., gdy Algieria wycofała ostatnie zapasy.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="porownanie-komponentow-i-dodatkow" level={2}>
                Porównanie komponentów i dodatków
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Wpływ komponentów i dodatków na właściwości paliwa">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Składnik lub grupa</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Wpływ na liczbę oktanową</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>O czym warto pamiętać?</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">Etanol</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>Ma wysoką liczbę oktanową.</ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Jako komponent tlenowy może zwiększać RON paliwa.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            MTBE i inne związki tlenowe
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>Mogą podnosić liczbę oktanową.</ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Parametry paliwa trzeba oceniać razem z jego wpływem na środowisko.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">Rozgałęzione węglowodory</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Często mają większą odporność na stuk.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Budowa cząsteczki wpływa na właściwości paliwa.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">Węglowodory aromatyczne</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Niektóre z nich korzystnie wpływają na liczbę oktanową.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Liczba oktanowa jest jednym z wielu parametrów jakości benzyny.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">TEL</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Bardzo skuteczny, stosowany dawniej środek przeciwstukowy.
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            Wycofano go z benzyny samochodowej ze względów zdrowotnych i środowiskowych.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleReferenceComponent>
                Nie mieszaj samodzielnie „octane boosterów” z paliwem. Gotowe paliwa mają kontrolowaną specyfikację. Do
                samochodu wybieraj paliwo dopuszczone przez jego producenta.
            </ArticleReferenceComponent>
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    Liczba oktanowa zależy od składu całej mieszaniny paliwowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Etanol jest wysokooktanowym komponentem benzyny. Jego zawartość musi jednak odpowiadać wymaganiom
                    pojazdu.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Rozgałęzienie łańcucha węglowego często zwiększa odporność alkanów na stuk.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    TEL skutecznie podnosił liczbę oktanową, ale toksyczność ołowiu doprowadziła do wycofania go z
                    benzyny samochodowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    O jakości i bezpieczeństwie paliwa decyduje wiele parametrów, w tym liczba oktanowa.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default FuelAdditivesPage
