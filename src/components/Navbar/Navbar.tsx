import type { JSX } from "react";

/**
 * Renders the Navbar component.
 *
 * This component represents a fixed navigation bar at the top of the page.
 * It includes a semi-transparent background, a border at the bottom,
 * and uses flexbox for layout to space its child elements.
 *
 * Used by {@link MainLayout} to provide consistent navigation across the application.
 *
 * @return {JSX.Element} A JSX element that renders a navigation bar.
 */
function Navbar(): JSX.Element {
    return (
        <nav
            className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md py-4 px-6 flex justify-between items-center">
            Navbar
        </nav>
    );
}

export default Navbar;
