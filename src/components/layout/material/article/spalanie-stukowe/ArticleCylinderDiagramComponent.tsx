import type { JSX } from "react"

/**
 * @summary The normal spark-initiated flame and separate end-gas autoignition during knock.
 */
function ArticleCylinderDiagramComponent(): JSX.Element {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {[false, true].map((knock) => {
                const id = knock ? "knocking-cylinder" : "normal-cylinder"
                const label = knock ? "Spalanie stukowe" : "Spalanie prawidłowe"
                return (
                    <figure
                        key={id}
                        data-reveal
                        className="min-w-0 space-y-3 rounded-2xl border border-border p-3 sm:p-4">
                        <p className="text-center font-semibold">{label}</p>
                        <svg
                            viewBox="0 0 380 400"
                            role="img"
                            aria-labelledby={`${id}-title ${id}-description`}
                            className="h-auto w-full">
                            <title id={`${id}-title`}>{`${label}: przekrój cylindra`}</title>
                            <desc id={`${id}-description`}>
                                {knock
                                    ? "Iskra ze świecy rozpoczęła spalanie. Przed frontem płomienia samoczynnie zapala się niespalona część mieszanki, zwana end-gas. Wokół niej powstają fale ciśnienia."
                                    : "Iskra ze świecy zapala mieszankę i front płomienia rozchodzi się przez komorę. Przed nim, nad tłokiem, znajduje się niespalona część mieszanki, zwana end-gas."}
                            </desc>
                            <rect x={58} y={104} width={264} height={204} rx={8} fill="#eff6ff" />
                            <path
                                d="M58 305 V105 L110 80 H270 L322 105 V305"
                                fill="none"
                                stroke="#475569"
                                strokeWidth={8}
                            />
                            <path d="M112 86 L128 107 M268 86 L252 107" fill="none" stroke="#64748b" strokeWidth={8} />
                            <rect
                                x={178}
                                y={61}
                                width={24}
                                height={44}
                                rx={4}
                                fill="#94a3b8"
                                stroke="#475569"
                                strokeWidth={2}
                            />
                            <path d="M190 104 V116" stroke="#475569" strokeWidth={4} />
                            <path d="M183 116 L190 126 L197 116" fill="none" stroke="#b45309" strokeWidth={3} />
                            <path
                                d="M190 125 C145 133 105 160 107 211 C110 238 137 254 169 247 C210 237 225 191 213 155 Z"
                                fill="#fed7aa"
                            />
                            <path
                                d="M190 125 C145 133 105 160 107 211 C110 238 137 254 169 247 C210 237 225 191 213 155"
                                fill="none"
                                stroke="#c2410c"
                                strokeWidth={3}
                            />
                            <rect
                                x={63}
                                y={280}
                                width={254}
                                height={42}
                                rx={4}
                                fill="#cbd5e1"
                                stroke="#475569"
                                strokeWidth={3}
                            />
                            <path d="M65 291 H315 M65 301 H315" stroke="#64748b" strokeWidth={2} />
                            <rect x={178} y={323} width={24} height={35} fill="#94a3b8" />
                            {knock && (
                                <g>
                                    <circle cx={266} cy={202} r={14} fill="#b91c1c" />
                                    {[25, 37, 49].map((radius) => (
                                        <circle
                                            key={radius}
                                            cx={266}
                                            cy={202}
                                            r={radius}
                                            fill="none"
                                            stroke="#b91c1c"
                                            strokeWidth={2}
                                            strokeDasharray="4 4"
                                        />
                                    ))}
                                    <path d="M274 249 L300 264" stroke="#b91c1c" strokeWidth={1.5} aria-hidden="true" />
                                    <text x={302} y={267} textAnchor="end" fontSize={15} fill="#991b1b">
                                        Fale ciśnienia
                                    </text>
                                </g>
                            )}
                            <g fontSize={16} fill="#334155">
                                <text x={190} y={31} textAnchor="middle">
                                    Świeca zapłonowa
                                </text>
                                <path d="M190 38 V59" stroke="#64748b" aria-hidden="true" />
                                <text x={78} y={147}>
                                    Front płomienia
                                </text>
                                <path d="M121 151 L137 166" stroke="#64748b" aria-hidden="true" />
                                {knock && (
                                    <g>
                                        <text x={280} y={135} textAnchor="middle">
                                            end-gas
                                        </text>
                                        <text x={280} y={154} textAnchor="middle" fontSize={14}>
                                            niespalona mieszanka
                                        </text>
                                        <path d="M273 158 L266 188" stroke="#64748b" aria-hidden="true" />
                                    </g>
                                )}
                                <text x={190} y={308} textAnchor="middle">
                                    Tłok
                                </text>
                            </g>
                            {knock && (
                                <text x={190} y={385} textAnchor="middle" fontSize={16} fill="#991b1b">
                                    Samozapłon end-gas
                                </text>
                            )}
                        </svg>
                        <figcaption className="text-sm leading-relaxed text-muted-foreground">
                            {knock
                                ? "Po zapłonie od iskry niespalona część mieszanki przed frontem płomienia (end-gas) zapala się samoczynnie. Wywołuje to gwałtowne wahania ciśnienia."
                                : "Płomień powstały od iskry stopniowo obejmuje mieszankę. Jej niespaloną część nazywa się end-gas."}
                        </figcaption>
                    </figure>
                )
            })}
        </div>
    )
}

export default ArticleCylinderDiagramComponent
