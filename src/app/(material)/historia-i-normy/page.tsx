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
import ArticleHistoryTimelineComponent from "@/oliverperzyk/components/layout/material/article/historia-i-normy/ArticleHistoryTimelineComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/historia-i-normy")

/**
 * @summary The development of octane testing, unleaded road fuels, and fuel quality standards.
 */
function HistoryAndStandardsPage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="dlaczego-potrzebna-jest-liczba-oktanowa" level={2}>
                Dlaczego liczba oktanowa stała się potrzebna?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Gdy konstruktorzy silników o zapłonie iskrowym zwiększali stopień sprężania, obciążenie i osiągi,
                musieli skuteczniej kontrolować spalanie stukowe. Potrzebowali powtarzalnego sposobu oceny odporności
                paliwa na stuk. Dziś służą do tego między innymi metody ASTM D2699 dla RON i ASTM D2700 dla MON.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                W obu metodach paliwo bada się w silniku CFR z użyciem paliw odniesienia. Znormalizowane procedury
                pozwalają laboratoriom porównywać wyniki.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="era-benzyny-olowiowej" level={2}>
                Era benzyny ołowiowej
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Tetraetyloołów, czyli TEL, skutecznie zwiększał odporność benzyny na stuk. Według EPA w USA stosowano go
                powszechnie w tym celu od 1923 r.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Z czasem lepiej poznano skutki emisji ołowiu. Zmieniały się również wymagania techniczne samochodów. Od
                roku modelowego 1975 amerykańskie samochody osobowe i lekkie ciężarówki powszechnie wyposażano w
                katalizatory, które wymagały benzyny bezołowiowej. Od 1 stycznia 1996 r. w USA zakazano sprzedaży
                benzyny ołowiowej do pojazdów drogowych.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Dyrektywa 98/70/WE wymagała, by państwa Unii Europejskiej zakazały wprowadzania benzyny ołowiowej do
                obrotu najpóźniej od 1 stycznia 2000 r. Na świecie proces ten trwał dłużej. W sierpniu 2021 r. UNEP
                ogłosił, że po zakończeniu sprzedaży w Algierii ołowiowa benzyna samochodowa została wycofana globalnie.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="co-zastapilo-olow" level={2}>
                Co zastąpiło ołów?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Aby zachować odporność benzyny na stuk po wycofaniu ołowiu, rafinerie dobierały inne mieszanki
                składników. Korzystały z wysokooktanowych węglowodorów otrzymywanych w rafineriach i związków tlenowych,
                takich jak MTBE. Coraz częściej stosowały też etanol. Według EPA w USA MTBE używano od końca lat 70.,
                między innymi do podnoszenia liczby oktanowej w miejsce dodatków ołowiowych.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Etanol jest dziś powszechnym składnikiem benzyny. W Polsce 1 stycznia 2024 r. rozpoczęto wprowadzanie
                benzyny 95 E10 w miejsce 95 E5. Paliwo E10 może zawierać do 10% biokomponentów objętościowo.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="astm-iso-en" level={2}>
                ASTM, ISO i EN: metody badań i wymagania dla paliwa
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                ASTM D2699 i ISO 5164 opisują pomiar RON, a ASTM D2700 i ISO 5163 pomiar MON. Norma EN 228 określa
                wymagania dla gotowej benzyny bezołowiowej sprzedawanej w Europie oraz metody jej badań. Aktualne
                wydanie europejskie to EN 228:2025.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Określenie „norma oktanowa” jest więc zbyt wąskie dla EN 228. Dotyczy ona wielu właściwości gotowej
                benzyny samochodowej, a same metody pomiaru RON i MON opisują odrębne normy.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Normy europejskie wdrażają krajowe organizacje normalizacyjne. Konkretne wydanie PN-EN sprawdź w
                aktualnym katalogu Polskiego Komitetu Normalizacyjnego.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="os-czasu" level={3}>
                Oś czasu
            </ArticleHeadingComponent>
            <ArticleHistoryTimelineComponent />
            <ArticleHeadingComponent id="normy-i-dokumenty" level={2}>
                Normy i dokumenty dotyczące paliw
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Rola norm i dokumentów dotyczących paliw">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Dokument</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Rola</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">ASTM D2699-26</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Laboratoryjna metoda wyznaczania RON.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">ASTM D2700-26</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Laboratoryjna metoda wyznaczania MON.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">ISO 5164:2014</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Międzynarodowa metoda wyznaczania RON. Trwają prace nad nowym wydaniem.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">ISO 5163:2014</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Międzynarodowa metoda wyznaczania MON, potwierdzona w 2026 r. Trwają prace nad nowym
                            wydaniem.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">EN 228:2025</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Wymagania i metody badań benzyny bezołowiowej sprzedawanej w Europie.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">Dyrektywa 98/70/WE</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            Unijne przepisy dotyczące jakości paliw, w tym wycofania benzyny ołowiowej.
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    Potrzeba ograniczania spalania stukowego doprowadziła do rozwoju metod pomiaru liczby oktanowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Tetraetyloołów skutecznie zwiększał odporność paliwa na stuk. Skutki stosowania ołowiu dla zdrowia
                    doprowadziły jednak do globalnego wycofania ołowiowej benzyny samochodowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    ASTM i ISO opisują znormalizowane metody badania RON i MON.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    EN 228 określa szersze wymagania dla benzyny bezołowiowej na rynku europejskim.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Normy są aktualizowane, dlatego podawaj numer wydania i rok.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default HistoryAndStandardsPage
