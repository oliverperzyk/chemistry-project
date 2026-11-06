/**
 * @summary An inline abbreviation and its expanded definition.
 */
interface IArticleAbbreviation {
    /**
     * @summary Abbreviation displayed in the article.
     */
    readonly children: string
    /**
     * @summary Expanded meaning of the abbreviation.
     */
    readonly definition: string
    /**
     * @summary Additional CSS classes applied to the abbreviation.
     */
    readonly className?: string
}

export type { IArticleAbbreviation }
