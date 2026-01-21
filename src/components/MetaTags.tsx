import type { JSX } from 'react';

interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
}

/**
 * Generates and returns meta tags for SEO and social media sharing.
 * Creates tags for title, description, keywords, Open Graph, and Twitter metadata.
 *
 * @param {Object} props - The properties required to generate the meta tags.
 * @param {string} props.title - The title of the page to be set in the meta tags.
 * @param {string} props.description - A description of the page for SEO and social media.
 * @param {string} props.keywords - A comma-separated list of keywords for SEO.
 * @param {string} props.ogImage - The URL of an image to be used in Open Graph and Twitter meta tags.
 * @param {string} [props.ogType="website"] - The type of content for Open Graph, defaults to "website".
 *
 * @return {JSX.Element} The JSX structure containing the meta tags for the document head.
 */
function MetaTags({
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
}: MetaTagsProps): JSX.Element {
    return (
        <>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            {title && <meta property="og:title" content={title} />}
            {description && (
                <meta property="og:description" content={description} />
            )}
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {title && <meta name="twitter:title" content={title} />}
            {description && (
                <meta name="twitter:description" content={description} />
            )}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </>
    );
}

export default MetaTags;
