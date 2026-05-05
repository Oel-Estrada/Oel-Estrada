import type { JSX } from 'react';

interface PersonSchema {
    '@context': 'https://schema.org';
    '@type': 'Person';
    name: string;
    jobTitle: string;
    url: string;
    email: string;
    telephone: string;
    sameAs: string[];
}

interface JsonLdProps {
    schema: PersonSchema;
}

/**
 * Renders a JSON-LD structured data script tag for search engine indexing.
 */
function JsonLd({ schema }: JsonLdProps): JSX.Element {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default JsonLd;
export type { PersonSchema };
