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
                    <span className="font-extrabold tracking-tighter text-lg">OEL_ESTRADA</span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="./">Work</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="./">Stack</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="./">Process</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="./">Insights</a>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="hidden sm:flex items-center justify-center rounded-full h-10 px-5 bg-primary text-primary-foreground text-sm font-bold transition-transform hover:scale-105 active:scale-95">
                        Contact
                    </button>
                    <div className="size-10 rounded-full border border-primary/20 overflow-hidden bg-surface"
                        data-alt="Professional headshot of a developer">
                        <img alt="Profile" className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwmDsVJe97_suDOoitWyWTRbDj64-1Y3JLl-qmKnpuJbKROhmT60VNOqztXd3GJE6RGS5pau6I-18_YyzpzfJTs-7fZEo84i1JFCQZTGDvVn3wg6sXGdIeM0jvpdRLTvz6rR6nG7b30eEzPSp5tXx9AIekoE5GaLQIfwoseYOA7t2BA0_EL27xkzH5jWSIqb0-n9zlV9GicnbiqD8fP7pHH8QUDX4G8k9q3iGtjfend4tGApTztmlv1GLGTpIGE3IkR6zLZCrCtNo" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
