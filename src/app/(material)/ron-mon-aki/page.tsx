import type { Metadata } from "next"
import type { JSX } from "react"
import ArticleOctaneFormulaComponent from "@/oliverperzyk/components/layout/material/article/ron-mon-aki/ArticleOctaneFormulaComponent"
import { PageMetadataManager } from "@/oliverperzyk/lib/globals/managers/material/PageMetadataManager"
import ArticleHeadingComponent from "@/oliverperzyk/components/layout/material/content/ArticleHeadingComponent"
import ArticleParagraphComponent from "@/oliverperzyk/components/layout/material/content/ArticleParagraphComponent"
import ArticleReferenceComponent from "@/oliverperzyk/components/layout/material/content/ArticleReferenceComponent"
import ArticleRememberComponent from "@/oliverperzyk/components/layout/material/content/ArticleRememberComponent"
import ArticleMeasurementDiagramComponent from "@/oliverperzyk/components/layout/material/article/ron-mon-aki/ArticleMeasurementDiagramComponent"
import ArticleListItemComponent from "@/oliverperzyk/components/layout/material/list/ArticleListItemComponent"
import ArticleTableComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableComponent"
import ArticleTableHeadComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableHeadComponent"
import ArticleTableBodyComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableBodyComponent"
import ArticleTableRowComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableRowComponent"
import ArticleTableColumnComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableColumnComponent"
import ArticleTableElementComponent from "@/oliverperzyk/components/layout/material/table/ArticleTableElementComponent"

export const metadata: Metadata = PageMetadataManager.getMetadata("/ron-mon-aki")

/**
 * @summary Overview of RON, MON, and AKI measurement methods.
 * @description Explains CFR engine tests, fuel standards, and how AKI is calculated.
 */
function OctaneMeasurementPage(): JSX.Element {
    return (
        <>
            <ArticleHeadingComponent id="jedno-paliwo-kilka-liczb" level={2}>
                Jedno paliwo, kilka liczb
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Liczby 95, 98 i 87 przy dystrybutorze trzeba odczytywać razem z oznaczeniem skali. RON i MON są wynikami
                badań silnikowych. AKI oblicza się jako ich średnią:
            </ArticleParagraphComponent>
            <ArticleReferenceComponent>
                <p className="text-center text-lg font-semibold text-foreground sm:text-xl">
                    <ArticleOctaneFormulaComponent />
                </p>
            </ArticleReferenceComponent>
            <ArticleParagraphComponent>
                W amerykańskich materiałach DOE ta średnia nosi nazwę „pump octane number”.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                W Polsce i większości Europy stosuje się RON: benzyna 95 ma RON 95, a benzyna 98 ma RON 98. Amerykańskie
                oznaczenie 87 najczęściej podaje AKI, obliczone z RON i MON. Sama niższa liczba nie oznacza więc, że
                paliwo jest znacznie gorsze od europejskiej benzyny 95.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="jak-bada-sie-ron" level={2}>
                Jak bada się RON?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                Aktualna norma ASTM D2699-26 opisuje badanie w znormalizowanym, jednocylindrowym, czterosuwowym silniku
                CFR z regulowanym stopniem sprężania. W określonych warunkach porównuje się intensywność stuku próbki z
                wynikami dla paliw PRF. Paliwo odniesienia dające taką samą intensywność stuku wyznacza RON próbki.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Międzynarodową metodę opisuje ISO 5164:2014. Według tej normy RON mierzy odporność na stuk w
                łagodniejszych warunkach pracy. Wydanie z 2014 r. pozostaje aktualne, a w 2026 r. trwają prace nad piątą
                edycją.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="czym-mon-rozni-sie-od-ron" level={2}>
                Czym MON różni się od RON?
            </ArticleHeadingComponent>
            <ArticleParagraphComponent>
                MON również mierzy się w znormalizowanym silniku CFR, w bardziej wymagających warunkach niż RON. ISO
                5163 określa je jako „severe conditions”, czyli ostrzejsze warunki pracy silnika. W marcu 2026 r. ISO
                ponownie potwierdziła aktualność wydania ISO 5163:2014 i jednocześnie rozpoczęła prace nad jego
                następcą.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Norma ASTM D2700-26 opisuje skalę MON od 0 do 120. Podobnie jak w metodzie RON badanie polega na
                porównaniu paliwa z paliwami odniesienia w jednocylindrowym silniku CFR. Według ASTM typowe paliwa
                samochodowe uzyskują MON przeważnie od 80 do 90.
            </ArticleParagraphComponent>
            <ArticleParagraphComponent>
                Różnica RON − MON to czułość oktanowa paliwa. Dwa paliwa o takim samym RON mogą mieć różne MON i inaczej
                zachowywać się w bardziej wymagających warunkach. Bez znajomości MON nie da się więc dokładnie
                przeliczyć RON na AKI.
            </ArticleParagraphComponent>
            <ArticleHeadingComponent id="porownanie-ron-mon-i-aki" level={2}>
                Porównanie RON, MON i AKI
            </ArticleHeadingComponent>
            <ArticleTableComponent caption="Porównanie metod RON i MON oraz wskaźnika AKI">
                <ArticleTableHeadComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent>Wskaźnik</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Jak powstaje?</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Co opisuje?</ArticleTableColumnComponent>
                        <ArticleTableColumnComponent>Gdzie jest stosowany?</ArticleTableColumnComponent>
                    </ArticleTableRowComponent>
                </ArticleTableHeadComponent>
                <ArticleTableBodyComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">RON</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>badanie CFR, ASTM D2699 / ISO 5164</ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            odporność na stuk w łagodniejszych warunkach
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>Europa, w tym Polska</ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">MON</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>badanie CFR, ASTM D2700 / ISO 5163</ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            odporność w bardziej wymagających warunkach
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>
                            normy i laboratoria, także lotnictwo
                        </ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                    <ArticleTableRowComponent>
                        <ArticleTableColumnComponent scope="row">AKI</ArticleTableColumnComponent>
                        <ArticleTableElementComponent>
                            <ArticleOctaneFormulaComponent showResult={false} />
                        </ArticleTableElementComponent>
                        <ArticleTableElementComponent>uśredniony wskaźnik przeciwstukowy</ArticleTableElementComponent>
                        <ArticleTableElementComponent>dystrybutory m.in. w USA</ArticleTableElementComponent>
                    </ArticleTableRowComponent>
                </ArticleTableBodyComponent>
            </ArticleTableComponent>
            <ArticleHeadingComponent id="schemat-metody-pomiarowej" level={3}>
                Schemat metody pomiarowej
            </ArticleHeadingComponent>
            <ArticleMeasurementDiagramComponent />
            <ArticleParagraphComponent>
                Schemat upraszcza przebieg badania. Normy określają też szczegółowe parametry oraz procedury kontroli
                sprzętu i paliw odniesienia.
            </ArticleParagraphComponent>
            <ArticleRememberComponent>
                <ArticleListItemComponent>
                    RON i MON są wynikami dwóch różnych znormalizowanych badań odporności paliwa na stuk.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    RON mierzy się w łagodniejszych, a MON w bardziej wymagających warunkach.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    AKI to średnia RON i MON, a nie wynik trzeciej próby silnikowej.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Europejskie 95 RON i amerykańskie 95 AKI nie są równoważnymi oznaczeniami.
                </ArticleListItemComponent>
                <ArticleListItemComponent>
                    Do dokładnego wyliczenia AKI nie wystarczy znajomość samego RON.
                </ArticleListItemComponent>
            </ArticleRememberComponent>
        </>
    )
}

export default OctaneMeasurementPage
