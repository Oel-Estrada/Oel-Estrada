import type { JSX } from 'react';

/**
 * Renders the Next.js logo as an SVG element.
 *
 * @param {object} props - The properties object for the NextJsLogo component.
 * @param {string} [props.color='#000000'] - The fill color of the logo. Defaults to black.
 * @param {string} [props.className=''] - Additional CSS class names to apply to the SVG element.
 *
 * @return {JSX.Element} The rendered SVG element containing the Next.js logo.
 */
function NextJsLogo({
    color = '#000000',
    className = '',
}: {
    color?: string;
    className?: string;
}): JSX.Element {
    return (
        <svg
            className={className}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>NextJs</title>
            <path
                fill={color}
                d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
            />
        </svg>
    );
}

export default NextJsLogo;
