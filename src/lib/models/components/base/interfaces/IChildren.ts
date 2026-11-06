import type { ReactNode } from "react"

/**
 * @summary Base interface used by all components with content inside.
 * @description Property is parsed between tags, e.g. `<ExampleComponent>I'm a children</ExampleComponent>`
 */
interface IChildren {
    /**
     * @summary Content deeper passed to components. Can be a text, number, another component, etc.
     */
    readonly children: ReactNode
}

export type { IChildren }
