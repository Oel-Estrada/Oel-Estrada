interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
}

/**
 * Set meta tags for a page.
 * @param {string} [title] - The title of the page.
 * @param {string} [description] - The description of the page.
 * @param {string} [keywords] - The keywords for the page.
 * @constructor
 */
export function MetaTags({ title, description, keywords }: MetaTagsProps) {
    return (
        <>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
        </>
    );
}
