import type { JSX } from 'react';

/**
 * "Coming Soon" page.
 * The page includes a header, animated elements, content, contact buttons,
 * and a footer, styled to fit a modern coming soon template.
 *
 * @return {JSX.Element} A JSX element representing the "Coming Soon" page.
 */
function ComingSoon2(): JSX.Element {
    return (
        <>
            <style type="text/tailwindcss">
                {`  .glass-nav {
            background: rgba(10, 15, 12, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(56, 224, 123, 0.1);
        }
            .mesh-grid {
            background-size: 40px 40px;
            background-image:
            linear-gradient(to right, rgba(56, 224, 123, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 224, 123, 0.05) 1px, transparent 1px);
        }
            .glitch-text {
            text-shadow: 2px 0 #ff00c1, -2px 0 #00fff9;
            position: relative;
        }
            .terminal-shadow {
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 224, 123, 0.1);
        }
            .cursor-blink {
            animation: blink 1s step-end infinite;
        }
            @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: #38e07b }
        }`}
            </style>
            <div className="fixed inset-0 pointer-events-none mesh-grid z-0"></div>
            <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark z-0"></div>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1100px]">
                <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-full flex items-center justify-center text-background-dark">
                            <span className="material-symbols-outlined font-bold text-xl">
                                terminal
                            </span>
                        </div>
                        <span className="font-extrabold tracking-tighter text-lg font-display">
                            OEL_ESTRADA
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            className="text-sm font-medium font-display hover:text-primary transition-colors"
                            href="#"
                        >
                            Work
                        </a>
                        <a
                            className="text-sm font-medium font-display hover:text-primary transition-colors"
                            href="#"
                        >
                            Stack
                        </a>
                        <a
                            className="text-sm font-medium font-display hover:text-primary transition-colors"
                            href="#"
                        >
                            Process
                        </a>
                        <a
                            className="text-sm font-medium font-display hover:text-primary transition-colors"
                            href="#"
                        >
                            Insights
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-5 bg-primary text-background-dark text-sm font-bold font-display transition-transform hover:scale-105 active:scale-95">
                            Contact
                        </button>
                        <div className="size-10 rounded-full border border-primary/20 overflow-hidden bg-surface-dark">
                            <img
                                alt="Profile"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwmDsVJe97_suDOoitWyWTRbDj64-1Y3JLl-qmKnpuJbKROhmT60VNOqztXd3GJE6RGS5pau6I-18_YyzpzfJTs-7fZEo84i1JFCQZTGDvVn3wg6sXGdIeM0jvpdRLTvz6rR6nG7b30eEzPSp5tXx9AIekoE5GaLQIfwoseYOA7t2BA0_EL27xkzH5jWSIqb0-n9zlV9GicnbiqD8fP7pHH8QUDX4G8k9q3iGtjfend4tGApTztmlv1GLGTpIGE3IkR6zLZCrCtNo"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
                <div className="flex flex-col items-center max-w-2xl w-full">
                    <div className="relative mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter leading-none glitch-text opacity-90">
                            404
                        </h1>
                        <div className="absolute -top-4 -right-8 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest rounded-md">
                            Critical Error
                        </div>
                    </div>
                    <div className="space-y-4 mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
                            Route Not Found
                        </h2>
                        <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                            The requested module at{' '}
                            <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                                /unknown-route
                            </code>{' '}
                            has been refactored or deleted from the main branch.
                        </p>
                    </div>
                    <div className="w-full max-w-lg terminal-bg terminal-shadow rounded-lg overflow-hidden border border-white/10 mb-10">
                        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/50"></div>
                                <div className="size-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="size-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                                bash — 80x24
                            </span>
                            <div className="w-10"></div>
                        </div>
                        <div className="p-6 text-left text-sm md:text-base space-y-2">
                            <div className="flex gap-2">
                                <span className="text-primary">➜</span>
                                <span className="text-slate-300">
                                    portfolio
                                </span>
                                <span className="text-primary font-bold">
                                    git:(main)
                                </span>
                                <span className="text-yellow-400">✗</span>
                                <span className="text-white">find page</span>
                            </div>
                            <div className="text-red-400">
                                Error: Entry point not found in manifest.json
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-primary">➜</span>
                                <span className="text-slate-300">
                                    portfolio
                                </span>
                                <span className="flex items-center">
                                    <span className="text-white">go back</span>
                                    <span className="ml-1 border-r-2 border-primary h-5 cursor-blink"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <a
                            className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary text-background-dark font-bold font-display hover:shadow-[0_0_30px_rgba(56,224,123,0.4)] transition-all transform hover:-translate-y-1"
                            href="#"
                        >
                            <span className="material-symbols-outlined">
                                build
                            </span>
                            Fix the bug
                        </a>
                        <a
                            className="flex items-center justify-center gap-2 rounded-full h-14 px-8 border border-white/10 bg-white/5 text-white font-bold font-display hover:bg-white/10 transition-all"
                            href="#"
                        >
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            Return Home
                        </a>
                    </div>
                </div>
            </main>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <footer className="fixed bottom-0 left-0 w-full px-6 py-3 border-t border-white/5 bg-background-dark/80 backdrop-blur-md z-50 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        <span>Status: 404_PAGE_NOT_FOUND</span>
                    </div>
                    <div className="hidden sm:block">
                        <span>Environment: Production</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <span className="hidden md:block">UTF-8</span>
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-xs">
                            account_tree
                        </span>
                        <span>main*</span>
                    </div>
                </div>
            </footer>{' '}
        </>
    );
}

export default ComingSoon2;
