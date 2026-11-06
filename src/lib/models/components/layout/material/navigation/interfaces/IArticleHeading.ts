/**
 * @summary Heading destination in a material article.
 * @description Stores the anchor, visible title & hierarchy used by the table of contents.
 */
interface IArticleHeading {
    /**
     * @summary Unique fragment identifier of the heading.
     */
    readonly id: string
    /**
     * @summary Nonempty text displayed in the contents link.
     */
    readonly title: string
    /**
     * @summary HTML section heading level from two through six.
     */
    readonly level: number
}

export type { IArticleHeading }
