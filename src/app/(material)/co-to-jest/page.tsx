import type { Metadata } from "next"
import type { JSX } from "react"
import { PageMetadataManager } from "@/oliverperzyk/lib/globals/managers/material/PageMetadataManager"
import ArticleHeadingComponent from "@/oliverperzyk/components/layout/material/content/ArticleHeadingComponent"
import ArticleParagraphComponent from "@/oliverperzyk/components/layout/material/content/ArticleParagraphComponent"
import ArticleImageComponent from "@/oliverperzyk/components/layout/material/content/ArticleImageComponent"
import ArticleRememberComponent from "@/oliverperzyk/components/layout/material/content/ArticleRememberComponent"
import ArticleListItemComponent from "@/oliverperzyk/components/layout/material/list/ArticleListItemComponent"
import ArticleTableComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableComponent"
import ArticleTableHeadComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableHeadComponent"
import ArticleTableBodyComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableBodyComponent"
import ArticleTableRowComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableRowComponent"
import ArticleTableColumnComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableColumnComponent"
import ArticleTableElementComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableElementComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/co-to-jest")

/**
 * @summary Introduction to octane rating.
 * @description Explains knock resistance, reference fuels, and the role of isooctane and n-heptane.
 */
function OctaneRatingPage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="liczba-oktanowa-co-wlasciwie-mierzy" level={2}>
                Co właściwie mierzy liczba oktanowa?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Liczba oktanowa określa odporność paliwa na spalanie stukowe w silniku o zapłonie iskrowym. Im jest
                wyższa, tym trudniejsze warunki paliwo wytrzymuje bez wystąpienia stuku. Wynik pochodzi z badania w
                ściśle określonych warunkach. Nie jest miarą energii paliwa, więc benzyna 98 nie zawiera z tego powodu
                „więcej mocy” niż benzyna 95.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                W prawidłowo działającym silniku benzynowym iskra na świecy zapłonowej zapala mieszaninę powietrza i
                paliwa. Od tego miejsca rozchodzi się front płomienia. Jeśli niespalona mieszanka przed nim osiągnie
                odpowiednio wysoką temperaturę i ciśnienie, może zapalić się samoczynnie. Jej gwałtowne spalanie może
                wywołać drgania ciśnienia. Badania silników o zapłonie iskrowym wskazują ten samozapłon końcowej części
                mieszanki jako jeden z podstawowych mechanizmów klasycznego spalania stukowego.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="skad-wziela-sie-skala-oktanowa" level={2}>
                Skąd wzięła się skala oktanowa?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Podstawą klasycznej skali są dwa węglowodory: n-heptan i 2,2,4-trimetylopentan, tradycyjnie nazywany
                izooktanem. n-Heptan łatwo ulega spalaniu stukowemu, dlatego przypisano mu wartość 0. Znacznie
                odporniejszy izooktan otrzymał wartość 100. NIST podaje dla n-heptanu wzór C<sub>7</sub>H<sub>16</sub>,
                a dla 2,2,4-trimetylopentanu C<sub>8</sub>H<sub>18</sub>.
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
                Te substancje służą do przygotowania podstawowych paliw odniesienia, czyli PRF. W metodzie RON próbkę
                spala się w znormalizowanym silniku CFR i porównuje intensywność stuku z uzyskaną dla mieszanin PRF.
                Mieszanina dająca taki sam stuk wyznacza liczbę oktanową próbki. Jak wyjaśnia ASTM, badanie porównuje
                odporność na stuk, a nie procentową zawartość izooktanu w benzynie ze stacji.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Zdanie „benzyna 95 składa się w 95% z izooktanu i w 5% z heptanu” błędnie opisuje skład paliwa ze
                stacji. RON 95 oznacza, że w teście paliwo ma odporność na stuk odpowiadającą paliwu odniesienia o
                wyniku 95. Współczesna benzyna zawiera wiele węglowodorów i może mieć też komponenty tlenowe, na
                przykład etanol.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="dlaczego-budowa-czasteczki-ma-znaczenie" level={3}>
                Dlaczego budowa cząsteczki ma znaczenie?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Budowa węglowodorów wpływa na reakcje poprzedzające samozapłon. n-Heptan i silnie rozgałęziony
                2,2,4-trimetylopentan znacznie różnią się odpornością na stuk. Wśród alkanów rozgałęzienie łańcucha
                często zwiększa liczbę oktanową, ale tej zależności nie można przenosić na wszystkie klasy związków
                chemicznych.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="czy-100-oktanow-to-maksimum" level={2}>
                Czy 100 oktanów to maksimum?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Paliwa i komponenty paliwowe mogą mieć liczbę oktanową powyżej 100. Tę wartość przypisano izooktanowi
                jako punktowi odniesienia, więc nie wyznacza ona fizycznej granicy skali. ASTM D2699-26 opisuje skalę
                RON od 0 do 120 i zakres roboczy metody od 40 do 120. Analogiczny zakres przewiduje metoda MON.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="pojecia-w-skrocie" level={2}>
                Pojęcia w skrócie
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Podstawowe pojęcia związane z liczbą oktanową">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Pojęcie</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Znaczenie</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">RON</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            odporność na stuk mierzona metodą Research w łagodniejszych warunkach pracy silnika
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">MON</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            odporność na stuk badana metodą Motor w bardziej wymagających warunkach
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">PRF</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            podstawowe paliwa odniesienia używane do wyznaczania liczby oktanowej
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">izooktan</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            2,2,4-trimetylopentan, klasyczny punkt odniesienia 100
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">n-heptan</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>klasyczny punkt odniesienia 0</ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    Liczba oktanowa opisuje odporność benzyny na spalanie stukowe, a nie „moc” paliwa.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Izooktan i n-heptan są klasycznymi substancjami odniesienia dla skali oktanowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Oznaczenie benzyny 95 nie informuje o procentowej zawartości izooktanu.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Wartość 100 nie stanowi górnej granicy skali liczby oktanowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Aby poprawnie porównywać liczby przy dystrybutorze, trzeba wiedzieć, czy podano RON, MON czy AKI.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default OctaneRatingPage
