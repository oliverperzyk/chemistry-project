import type { INavigationDestination } from "../interfaces/INavigationDestination"

/**
 * @summary Navigation entry of the infographic.
 * @description Represents either a topic group or a direct page link.
 */
type NavigationEntry =
    | {
          /**
           * @summary Polish heading of the topic group.
           */
          label: string
          /**
           * @summary Ordered destinations displayed within the topic group.
           */
          items: readonly INavigationDestination[]
      }
    | INavigationDestination

export type { NavigationEntry }
