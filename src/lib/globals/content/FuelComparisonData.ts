/** Comparable European RON classes; these are not ethanol-content measurements. */
export const roadFuelRatings = [
    { label: "95", value: 95 },
    { label: "98", value: 98 },
] as const

/** E5/E10 are upper limits; the E85 range describes U.S. DOE blends. */
export const ethanolContents = [
    { label: "E5", minimum: 0, maximum: 5, kind: "limit" },
    { label: "E10", minimum: 0, maximum: 10, kind: "limit" },
    { label: "E85", minimum: 51, maximum: 83, kind: "range" },
] as const
