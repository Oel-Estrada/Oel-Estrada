import type { JSX } from 'react';

/**
 * Not Found Page component.
 *
 * Used by the router to display a 404 Not Found page.
 *
 * @returns {JSX.Element} The NotFoundPage component.
 */
function NotFoundPage(): JSX.Element {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
            NotFoundPage
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        </div>
    );
}

export default NotFoundPage;
