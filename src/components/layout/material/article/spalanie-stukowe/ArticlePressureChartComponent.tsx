import type { JSX } from "react"

/**
 * @summary Illustrative pressure curves, not engine measurements or a calibrated physical model.
 * @description Generated code by using existing data from a chart maker.
 */
function ArticlePressureChartComponent(): JSX.Element {
    const x = (angle: number): number => 72 + ((angle + 30) / 70) * 656
    const y = (pressure: number): number => 330 - (pressure / 100) * 308
    const curve = (knock: boolean): string =>
        Array.from({ length: 421 }, (_, index) => {
            const angle = -30 + index / 6
            const normal = 10 + 70 * Math.exp(-Math.pow((angle - 12) / 17, 2))
            const elapsed = angle - 7
            const oscillation =
                knock && elapsed > 0
                    ? 14 * (1 - Math.exp(-elapsed / 1.2)) * Math.exp(-elapsed / 10) * Math.sin(elapsed * 2.8)
                    : 0
            return `${index === 0 ? "M" : "L"}${x(angle).toFixed(2)},${y(normal + oscillation).toFixed(2)}`
        }).join(" ")

    return (
        <figure data-reveal className="space-y-4 rounded-2xl border border-border p-3 sm:p-6">
            <p className="text-sm font-medium">Ciśnienie względne (wartości umowne)</p>
            <svg
                viewBox="0 0 760 390"
                role="img"
                aria-labelledby="knock-pressure-title knock-pressure-description"
                className="h-auto w-full">
                <title id="knock-pressure-title">Schematyczny przebieg ciśnienia w cylindrze</title>
                <desc id="knock-pressure-description">
                    Wykres obejmuje kąt obrotu wału od minus 30 do plus 40 stopni i ciśnienie względne od 0 do 100. Przy
                    prawidłowym spalaniu ciśnienie osiąga łagodne maksimum po górnym martwym położeniu tłoka. Na drugim
                    przebiegu widać wygasające wahania obrazujące stuk. Krzywe są umowne i nie przedstawiają pomiaru.
                </desc>
                {Array.from({ length: 11 }, (_, index) => index * 10).map((pressure) => (
                    <g key={pressure}>
                        <line x1={72} y1={y(pressure)} x2={728} y2={y(pressure)} className="stroke-border" />
                        <text
                            x={56}
                            y={y(pressure) + 7}
                            textAnchor="end"
                            fontSize={22}
                            className="fill-muted-foreground">
                            {pressure}
                        </text>
                    </g>
                ))}
                <line x1={72} y1={22} x2={72} y2={330} className="stroke-foreground" />
                <line x1={72} y1={330} x2={728} y2={330} className="stroke-foreground" />
                <line x1={x(0)} y1={22} x2={x(0)} y2={330} strokeDasharray="4 5" className="stroke-muted-foreground" />
                {[-30, -20, -10, 0, 5, 10, 15, 20, 25, 30, 35, 40].map((angle) => (
                    <g key={angle}>
                        <line x1={x(angle)} y1={330} x2={x(angle)} y2={338} className="stroke-foreground" />
                        <text x={x(angle)} y={367} textAnchor="middle" fontSize={22} className="fill-muted-foreground">
                            {angle > 0 ? `+${angle}` : angle}
                        </text>
                    </g>
                ))}
                <path
                    d={curve(false)}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    vectorEffect="non-scaling-stroke"
                />
                <path
                    d={curve(true)}
                    fill="none"
                    stroke="#b91c1c"
                    strokeWidth={2.5}
                    strokeDasharray="7 4"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
            <p className="text-center text-sm">Kąt obrotu wału korbowego [°]</p>
            <ul aria-label="Legenda wykresu" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="w-8 border-t-2 border-[#2563eb]" />
                    Spalanie prawidłowe
                </li>
                <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="w-8 border-t-2 border-dashed border-[#b91c1c]" />
                    Spalanie stukowe
                </li>
            </ul>
            <figcaption className="text-sm leading-relaxed text-muted-foreground">
                0° oznacza górne martwe położenie tłoka. Przebiegi służą do wyjaśnienia zjawiska. Nie podają
                rzeczywistego ciśnienia ani dokładnego kąta wystąpienia stuku.
            </figcaption>
        </figure>
    )
}

export default ArticlePressureChartComponent
