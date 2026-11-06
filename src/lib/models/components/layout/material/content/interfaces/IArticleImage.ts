/**
 * @summary Local article image and its original source credit.
 */
interface IArticleImage {
    /**
     * @summary Path to the article image.
     */
    readonly src: string
    /**
     * @summary Original image width in pixels.
     */
    readonly width: number
    /**
     * @summary Original image height in pixels.
     */
    readonly height: number
    /**
     * @summary Alternative text describing the image.
     */
    readonly alt: string
    /**
     * @summary URL of the original image source.
     */
    readonly sourceUrl: string
    /**
     * @summary Label displayed for the image source link.
     */
    readonly sourceLabel: string
}

export type { IArticleImage }
