import type { JSX } from "react";
import { SquareChevronRight } from "lucide-react";

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
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-275">
            <div className="glass-nav">
                <div className="flex items-center gap-2">
                    <div
                        className="size-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <span className="material-symbols-outlined font-bold text-xl">
                            <SquareChevronRight size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
