export const ROUTES = {
    HOME: '/',
    PROCESS: 'process',
    PROJECTS: 'projects',
    PROJECTS_DETAIL: 'projects/:slug',
    TECH_STACK: 'tech-stack',
    INSIGHTS: 'insights',
    CONTACT: 'contact',
    STYLE_GUIDE: 'style-guide',
} as const;

/**
 * Builds a path by replacing parameters in the template with provided values.
 *
 * @param {string} template - The path template containing parameters (e.g., "/projects/:id").
 * @param {Record<string, string | number>} [params] - An object mapping parameter names to their values.
 * @param {Object} [options] - Optional configuration options.
 * @param {boolean} [options.encode=true] - Whether to encode parameter values using encodeURIComponent.
 *
 * @return {string} The constructed path with parameters replaced by their corresponding values.
 */
export function buildPath(
    template: string,
    params?: Record<string, string | number>,
    {
        encode = true,
    }: {
        encode?: boolean;
    } = {},
): string {
    if (!params) return template;

    return template.replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => {
        if (!Object.prototype.hasOwnProperty.call(params, key)) {
            return `:${key}`;
        }
        const raw = String(params[key]);
        return encode ? encodeURIComponent(raw) : raw;
    });
}
