function Terminal() {
    return (
        <div className="w-full max-w-lg bg-(--surface) rounded-lg overflow-hidden border border-(--divider) mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_color-mix(in_srgb,var(--primary)_10%,transparent)]">
            <div className="px-4 py-2 border-b border-(--divider) flex items-center justify-between bg-[color:color-mix(in srgb, var(--surface) 92%, var(--overlay) 8%)]">
                <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500"></div>
                    <div className="size-2.5 rounded-full bg-yellow-500"></div>
                    <div className="size-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">
                    bash — 80x24
                </span>
                <div className="w-10"></div>
            </div>
            <div className="p-6 text-left text-sm md:text-base space-y-2">
                Terminal simulation
            </div>
        </div>
    );
}

export default Terminal;
