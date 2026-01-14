import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card/Card.tsx";
import { Input } from "@/components/ui/Input/Input.tsx";
import { Toaster } from "@/components/ui/Sonner/Sonner.tsx";
import { toast } from "sonner";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.tsx";
import { Badge } from "@/components/ui/Badge/Badge.tsx";

/**
 * StyleGuide component showcasing the design system and components.
 */
const StyleGuide = () => {
    return (
        <div className="min-h-screen bg-background text-text-primary p-8 md:p-16 relative">
            <Toaster />
            <ThemeSwitcher />

            <header className="mb-12 border-b border-border pb-6">
                <h1 className="text-4xl font-extrabold mb-2">Style Guide</h1>
                <p className="text-text-secondary">Visible only in development environment. Integrating Shadcn UI +
                    Framer Motion.</p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Base Color Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {[
                        { name: 'Primary', class: 'bg-primary text-primary-foreground', token: '--primary' },
                        { name: 'Background', class: 'bg-background border border-border', token: '--background' },
                        { name: 'Surface/Card', class: 'bg-surface border border-border', token: '--surface' },
                        { name: 'Text Primary', class: 'bg-text-primary text-text-inverse', token: '--text-primary' },
                        {
                            name: 'Text Secondary',
                            class: 'bg-text-secondary text-text-inverse',
                            token: '--text-secondary'
                        },
                        { name: 'Accent', class: 'bg-accent text-accent-foreground', token: '--accent' },
                        {
                            name: 'Destructive/Error',
                            class: 'bg-error text-text-inverse',
                            token: '--error'
                        },
                    ].map((color) => (
                        <div key={color.name} className="flex flex-col gap-2">
                            <div
                                className={`h-20 rounded-lg ${color.class} flex items-center justify-center font-bold shadow-sm`}>
                                Aa
                            </div>
                            <span className="text-sm font-medium">{color.name}</span>
                            <code className="text-[10px] text-text-secondary">{color.token}</code>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Semantic States</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Success', class: 'bg-success text-text-inverse', token: '--success' },
                        { name: 'Warning', class: 'bg-warning text-text-inverse', token: '--warning' },
                        { name: 'Error', class: 'bg-error text-text-inverse', token: '--error' },
                        { name: 'Info', class: 'bg-info text-text-inverse', token: '--info' },
                    ].map((color) => (
                        <div key={color.name} className="flex flex-col gap-2">
                            <div
                                className={`h-20 rounded-lg ${color.class} flex items-center justify-center font-bold shadow-sm`}>
                                {color.name}
                            </div>
                            <code className="text-[10px] text-text-secondary">{color.token}</code>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Interaction and Text</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Interactive States</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="h-12 w-24 rounded bg-primary-hover flex items-center justify-center text-[10px] text-primary-foreground">Hover
                                </div>
                                <code className="text-[10px]">--primary-hover</code>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="h-12 w-24 rounded bg-primary-active flex items-center justify-center text-[10px] text-primary-foreground">Active
                                </div>
                                <code className="text-[10px]">--primary-active</code>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button disabled>Disabled Button</Button>
                            <div className="flex flex-col gap-1">
                                <span className="text-disabled-text text-sm">Disabled text</span>
                                <code className="text-[10px]">--disabled-text</code>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Extended Text</h3>
                        <div className="space-y-2">
                            <p className="text-text-muted">This is a muted text (placeholders, help texts).</p>
                            <code className="text-[10px] text-text-secondary">--text-muted</code>
                            <p><a href="./" className="text-link">This is an explicit link</a></p>
                            <code className="text-[10px] text-text-secondary">--link</code>
                            <div className="p-4 bg-primary text-text-inverse rounded">
                                Inverse text on strong background
                            </div>
                            <code className="text-[10px] text-text-secondary">--text-inverse</code>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Typography</h2>
                <div className="space-y-8">
                    <div className="border border-border p-6 rounded-xl">
                        <h3 className="text-sm text-text-secondary mb-4 uppercase tracking-wider">Headings (Plus Jakarta
                            Sans)</h3>
                        <h1 className="text-5xl font-extrabold mb-4">Heading 1 - 48px</h1>
                        <h2 className="text-4xl font-bold mb-3">Heading 2 - 36px</h2>
                        <h3 className="text-3xl font-bold mb-2">Heading 3 - 30px</h3>
                        <h4 className="text-2xl font-semibold mb-2">Heading 4 - 24px</h4>
                    </div>

                    <div className="border border-border p-6 rounded-xl">
                        <h3 className="text-sm text-text-secondary mb-4 uppercase tracking-wider">Body (Inter / Work
                            Sans)</h3>
                        <p className="text-xl mb-4 leading-relaxed">Large Text: The quick brown fox jumps over the
                            lazy dog.</p>
                        <p className="text-base mb-4 leading-relaxed">Base Text: The quick brown fox jumps over the
                            lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-sm text-text-secondary leading-relaxed">Secondary Text: This is the style
                            for secondary or metadata texts.</p>
                    </div>

                    <div className="border border-border p-6 rounded-xl">
                        <h3 className="text-sm text-text-secondary mb-4 uppercase tracking-wider">Code (JetBrains
                            Mono)</h3>
                        <code className="block bg-surface p-4 rounded-lg border border-border">
                            const developer = &#123;<br />
                            &nbsp;&nbsp;name: "Oel Estrada",<br />
                            &nbsp;&nbsp;role: "Software Engineer",<br />
                            &nbsp;&nbsp;skills: ["React", "TypeScript", "Tailwind"]<br />
                            &#125;;
                        </code>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Surfaces, Focus, and Others</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase text-text-muted">Focus Ring</h3>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="px-4 py-2 rounded border border-border focus:ring-[3px] focus:ring-ring outline-none transition-all">
                                Focus me
                            </button>
                            <code className="text-[10px]">--focus-ring</code>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase text-text-muted">Dividers and Icons</h3>
                        <div className="space-y-2">
                            <div className="h-px bg-divider w-full" />
                            <code className="text-[10px]">--divider</code>
                            <div className="flex gap-4">
                                <div className="text-icon-primary flex flex-col items-center">
                                    <span className="text-2xl">★</span>
                                    <code className="text-[10px]">icon-primary</code>
                                </div>
                                <div className="text-icon-muted flex flex-col items-center">
                                    <span className="text-2xl">★</span>
                                    <code className="text-[10px]">icon-muted</code>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase text-text-muted">Selection</h3>
                        <p className="selection:bg-selection selection:text-text-primary">
                            Select this text to see the custom selection color.
                        </p>
                        <code className="text-[10px]">--selection</code>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Shadcn UI Components</h2>
                <div className="space-y-12">
                    {/* Buttons */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Buttons (Variants)</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button variant="default">Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Form elements */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Inputs & Labels</h3>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <label htmlFor="disabled"
                                    className="text-sm font-medium leading-none opacity-70">Disabled</label>
                                <Input disabled type="text" id="disabled" placeholder="You cannot write here" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Badges</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                                <Badge variant="success">Success</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="info">Info</Badge>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Cards (Shadcn)</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Brief description of the card.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-text-secondary">This is the main content using
                                        Shadcn components.</p>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="ghost">Cancel</Button>
                                    <Button>Accept</Button>
                                </CardFooter>
                            </Card>

                            <Card className="border-primary/50">
                                <CardHeader>
                                    <CardTitle className="text-primary">Highlighted</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">A card with a primary accent border.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Main Action</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    {/* Feedback */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Feedback (Sonner)</h3>
                        <p className="text-sm text-text-secondary">Configured to display up to 6 simultaneous
                            notifications with opaque background.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => toast("Standard Notification", { description: "This is a test message with an opaque background." })}>Show
                                Toast</Button>
                            <Button variant="outline"
                                onClick={() => toast.success("Operation Successful", { description: "Changes were saved successfully." })}>Success
                                Toast</Button>
                            <Button variant="outline"
                                onClick={() => toast.error("Critical Error", { description: "Could not connect to the server." })}>Error
                                Toast</Button>
                            <Button variant="secondary" onClick={() => {
                                for (let idx = 1; idx <= 6; idx++) {
                                    setTimeout(() => toast(`Multiple Notification #${idx.toString()}`), idx * 150);
                                }
                            }}>Launch 6 Toasts</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Microinteractions (Framer Motion)</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="card cursor-pointer"
                    >
                        <h3 className="font-bold mb-2">Hover Lift</h3>
                        <p className="text-sm text-text-secondary">This card lifts when hovering over it.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="card"
                    >
                        <h3 className="font-bold mb-2">Smooth Entry</h3>
                        <p className="text-sm text-text-secondary">Appears with a scale and opacity animation.</p>
                    </motion.div>

                    <div className="card flex items-center justify-center">
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-accent/20 p-4 rounded-full"
                        >
                            <span className="text-2xl">✨</span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StyleGuide;
