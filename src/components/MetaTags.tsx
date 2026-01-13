interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
}

/**
 * Set meta tags for a page.
 * @param {string} [title] - The title of the page.
 * @param {string} [description] - The description of the page.
 * @param {string} [keywords] - The keywords for the page.
 * @param {string} [ogImage] - Open Graph image URL.
 * @param {string} [ogType] - Open Graph type (e.g., website, article).
 * @constructor
 */
export function MetaTags({ title, description, keywords, ogImage, ogType = "website" }: MetaTagsProps) {
    return (
        <>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </>
    );
}
