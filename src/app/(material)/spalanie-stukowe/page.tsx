import type { Metadata } from "next"
import type { JSX } from "react"
import ArticleLink from "@/oliverperzyk/components/layout/material/content/ArticleLink"
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
import ArticlePressureChartComponent from "@/oliverperzyk/components/layout/material/article/spalanie-stukowe/ArticlePressureChartComponent"
import ArticleCylinderDiagramComponent from "@/oliverperzyk/components/layout/material/article/spalanie-stukowe/ArticleCylinderDiagramComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/spalanie-stukowe")

/**
 * @summary Overview of engine knock and the effects of octane rating.
 * @description Explains what happens inside the cylinder and when higher RON can improve engine performance and fuel economy.
 */
function EngineKnockPage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="co-normalnie-dzieje-sie-w-cylindrze" level={2}>
                Co normalnie dzieje się w cylindrze?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                W silniku o zapłonie iskrowym tłok spręża mieszaninę powietrza i paliwa. Iskra ze świecy zapala ją, a
                front płomienia rozchodzi się przez komorę spalania. Rosnące ciśnienie gazów działa na tłok. Układ
                sterowania dobiera między innymi moment zapłonu tak, aby silnik pracował sprawnie i bez niepożądanego
                spalania.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Gdy płomień się rozchodzi, niespalona część mieszanki jest sprężana i ogrzewana. Jeśli temperatura i
                ciśnienie są dostatecznie wysokie i utrzymują się wystarczająco długo, mieszanka może zapalić się
                samoczynnie. Gwałtowne uwolnienie energii może wywołać fale ciśnienia. Literatura dotycząca silników SI
                opisuje ten samozapłon końcowej części niespalonej mieszanki, zwanej end-gas, jako mechanizm klasycznego
                spalania stukowego (ang. knock).
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="dlaczego-slychac-stukanie" level={2}>
                Dlaczego słychać „stukanie”?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Gwałtowne zmiany ciśnienia wprawiają komorę spalania i elementy silnika w drgania. Łagodny stuk może być
                słyszalny jako metaliczne dzwonienie, po angielsku nazywane „pinging”. Długotrwały silny stuk zwiększa
                obciążenia cieplne i mechaniczne. Projektanci silników starają się ograniczać go do bezpiecznego
                poziomu.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Spalanie stukowe to inne zjawisko niż ogólnie rozumiane „zapalenie się paliwa za wcześnie”. Przy
                klasycznym stuku iskra już zapaliła mieszankę i front płomienia się rozchodzi. Dopiero wtedy samoczynnie
                zapala się niespalona część mieszanki przed płomieniem. W silnikach występują też inne rodzaje
                nieprawidłowego spalania, dlatego warto rozróżniać te zjawiska.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="gdzie-pomaga-wyzsza-liczba-oktanowa" level={2}>
                Kiedy pomaga wyższa liczba oktanowa?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Im wyższe ciśnienie i temperatura końcowej części mieszanki, tym trudniej uniknąć samozapłonu. Dlatego
                silniki o wysokim stopniu sprężania, z turbodoładowaniem lub sprężarką mechaniczną często wymagają
                paliwa o wyższej liczbie oktanowej albo producent je zaleca. Amerykański portal{" "}
                <ArticleLink
                    href="https://www.fueleconomy.gov/feg/octane.shtml"
                    title="FuelEconomy.gov - Selecting the Right Octane Fuel">
                    FuelEconomy.gov
                </ArticleLink>{" "}
                wskazuje, że zwiększenie ciśnienia w cylindrze może poprawiać wykorzystanie energii przez silnik, ale
                jednocześnie zwiększa wymagania dotyczące odporności przeciwstukowej paliwa.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                W nowoczesnych samochodach sterownik często reaguje na ryzyko stuku, między innymi opóźniając zapłon.
                Dzięki temu paliwo o nieco mniejszej odporności może nie wywołać od razu słyszalnego stuku, choć osiągi
                lub sprawność mogą się pogorszyć. Nadal trzeba przestrzegać minimalnej liczby oktanowej podanej przez
                producenta.{" "}
                <ArticleLink
                    href="https://www.fueleconomy.gov/feg/octane.shtml"
                    title="FuelEconomy.gov - Selecting the Right Octane Fuel">
                    FuelEconomy.gov
                </ArticleLink>{" "}
                ostrzega, że paliwo o zbyt niskiej liczbie oktanowej może pogarszać pracę silnika i w dłuższej
                perspektywie prowadzić do problemów.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Benzyna 98 nie gwarantuje większej mocy ani mniejszego zużycia paliwa w samochodzie przystosowanym do
                benzyny 95. Jeśli stuk nie ogranicza pracy silnika, a sterownik nie potrafi wykorzystać większej
                odporności paliwa, różnica może być bardzo mała lub żadna.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="schemat-cisnienia-wzgledem-kata-walu" level={3}>
                Przebieg ciśnienia a kąt obrotu wału
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Linia ciągła pokazuje łagodny przebieg ciśnienia przy prawidłowym spalaniu. Na linii przerywanej widać
                gwałtowne wahania obrazujące stuk.
            </ArticleParagraphComponent>
            <ArticlePressureChartComponent />
            <ArticleHeadingComponent id="co-dzieje-sie-w-komorze-spalania" level={3}>
                Co dzieje się w komorze spalania?
            </ArticleHeadingComponent>
            <ArticleCylinderDiagramComponent />
            <ArticleHeadingComponent id="co-wplywa-na-ryzyko-stuku" level={2}>
                Co wpływa na ryzyko stuku?
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Czynniki wpływające na ryzyko spalania stukowego">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Czynnik</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Wpływ na ryzyko stuku</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            wyższe ciśnienie i temperatura mieszaniny
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            zwykle zwiększają wymagania wobec odporności przeciwstukowej
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">turbodoładowanie</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            może zwiększać zapotrzebowanie na paliwo wysokooktanowe
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            wyższy RON odpowiedniego paliwa
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            zwiększa odporność na klasyczne spalanie stukowe
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">
                            dostosowanie momentu zapłonu przez ECU
                        </ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            może ograniczyć stuk kosztem osiągów lub sprawności
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    Przy klasycznym stuku niespalona część mieszanki zapala się samoczynnie, gdy spalanie rozpoczęte
                    przez iskrę już trwa.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Wysokie ciśnienie i temperatura zwiększają wymagania dotyczące odporności przeciwstukowej paliwa.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Silniki o wysokim stopniu sprężania lub doładowane częściej korzystają z paliwa o wysokiej liczbie
                    oktanowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Elektroniczne sterowanie może ograniczać stuk, ale czasami odbywa się to kosztem osiągów lub
                    sprawności.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Wyższa liczba oktanowa daje korzyść przede wszystkim wtedy, gdy silnik potrafi ją wykorzystać.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default EngineKnockPage
