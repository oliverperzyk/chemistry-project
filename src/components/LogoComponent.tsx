import type { JSX } from "react"

/**
 * @summary Octane badge & wordmark of the infographic.
 * @description Combines an octagonal gauge-inspired mark with the Polish site name, following the current text color.
 */
function LogoComponent(): JSX.Element {
    return (
        <span className="inline-flex h-10 items-center gap-2.5 align-middle">
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden="true"
                focusable="false">
                <path d="M11 2H25L34 11V25L25 34H11L2 25V11Z" />
                <ellipse cx="18" cy="21" rx="6" ry="8" strokeWidth="2.25" />
                <path d="M11 8L12.5 10M18 6V9M25 8L23.5 10" />
            </svg>
            <span className="flex flex-col text-base leading-4 font-semibold tracking-tight">
                <span>Liczba </span>
                <span>oktanowa</span>
            </span>
        </span>
    )
}

export default LogoComponent
