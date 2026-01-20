import {
    Blocks,
    Code2,
    Cpu,
    ExternalLink,
    Layout,
    Palette,
} from 'lucide-react';

import Logo from '@/components/Logo/Logo.tsx';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';

/**
 * StyleGuide component showcasing the design system and components.
 */
const StyleGuide = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Toaster />

            {/* Glass Navigation Header */}
            <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <div className="h-6 w-px bg-border hidden sm:block" />
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest hidden sm:block">
                            Design System v1.0
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { label: 'Brand', href: '#brand' },
                            { label: 'Colors', href: '#colors' },
                            { label: 'Typography', href: '#typography' },
                            { label: 'Components', href: '#components' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="hidden sm:flex"
                        >
                            Export Assets
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-6 py-20 max-w-6xl">
                <ThemeSwitcher />
                {/* Hero Section */}
                <header className="mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl">
                        Systematic Design for Engineering Excellence
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        A comprehensive guide to the visual identity and user
                        interface components used across Oel Estrada's
                        portfolio. This system balances technical precision with
                        high-fidelity aesthetics, utilizing a deep-black
                        foundation and emerald accents.
                    </p>
                </header>

                {/* 01 BRAND IDENTITY */}
                <section id="brand" className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary font-mono text-sm font-bold">
                            01.
                        </span>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
                            Brand Identity
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl border border-border bg-surface p-12 flex flex-col items-center justify-center min-h-100">
                            <Logo />
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.4em]">
                                    Senior Frontend Engineer
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-2xl border border-border bg-surface p-8 aspect-square flex flex-col">
                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-auto">
                                    Logomark
                                </span>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="size-20 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                                        <Blocks className="size-10" />
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-border bg-surface p-8 aspect-square flex flex-col">
                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-auto">
                                    Favicon
                                </span>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="size-10 border border-primary/50 bg-primary/10 rounded flex items-center justify-center text-primary">
                                        <Blocks className="size-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02 COLOR PALETTE */}
                <section id="colors" className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary font-mono text-sm font-bold">
                            02.
                        </span>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
                            Color Palette
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            {
                                name: 'Primary',
                                token: '--primary',
                                class: 'bg-primary',
                            },
                            {
                                name: 'Background',
                                token: '--background',
                                class: 'bg-background border border-border',
                            },
                            {
                                name: 'Surface',
                                token: '--surface',
                                class: 'bg-surface border border-border',
                            },
                            {
                                name: 'Accent',
                                token: '--accent',
                                class: 'bg-accent',
                            },
                            {
                                name: 'Text Primary',
                                token: '--text-primary',
                                class: 'bg-text-primary',
                            },
                            {
                                name: 'Text Secondary',
                                token: '--text-secondary',
                                class: 'bg-text-secondary',
                            },
                            {
                                name: 'Success',
                                token: '--success',
                                class: 'bg-success',
                            },
                            {
                                name: 'Warning',
                                token: '--warning',
                                class: 'bg-warning',
                            },
                            {
                                name: 'Error',
                                token: '--error',
                                class: 'bg-error',
                            },
                            { name: 'Info', token: '--info', class: 'bg-info' },
                            {
                                name: 'Border',
                                token: '--border',
                                class: 'bg-border',
                            },
                            {
                                name: 'Text Muted',
                                token: '--text-muted',
                                class: 'bg-text-muted',
                            },
                        ].map((color) => (
                            <div key={color.name} className="space-y-3">
                                <div
                                    className={`aspect-4/3 rounded-xl shadow-sm ${color.class}`}
                                />
                                <div className="space-y-1">
                                    <p className="text-sm font-bold">
                                        {color.name}
                                    </p>
                                    <p className="text-[10px] font-mono text-muted-foreground uppercase">
                                        {color.token}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 03 TYPOGRAPHY */}
                <section id="typography" className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary font-mono text-sm font-bold">
                            03.
                        </span>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
                            Typography
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Sans-Serif */}
                        <div className="rounded-2xl border border-border bg-surface p-10">
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">
                                        Inter
                                    </h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                                        UI & Body Copy
                                    </p>
                                </div>
                                <Badge variant="outline">Sans-Serif</Badge>
                            </div>

                            <div className="space-y-6">
                                <p className="text-4xl font-bold tracking-tight">
                                    The quick brown fox jumps over the lazy dog.
                                </p>
                                <p className="text-2xl font-medium">
                                    The quick brown fox jumps over the lazy dog.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                                    The quick brown fox jumps over the lazy dog.
                                    Designers use Lorem Ipsum to fill space
                                    before content is ready. It helps visualize
                                    layout without the distraction of meaningful
                                    text.
                                </p>
                            </div>
                        </div>

                        {/* Monospace */}
                        <div className="rounded-2xl border border-border bg-surface p-10">
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">
                                        JetBrains Mono
                                    </h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                                        Code & Technical Data
                                    </p>
                                </div>
                                <Badge variant="outline">Monospace</Badge>
                            </div>

                            <div className="space-y-6">
                                <div className="font-mono bg-background/50 rounded-xl p-6 border border-border/50">
                                    <pre className="text-sm overflow-x-auto">
                                        <code>
                                            <span className="text-primary">
                                                const
                                            </span>{' '}
                                            portfolio = &#123; name:{' '}
                                            <span className="text-success">
                                                "Oel Estrada"
                                            </span>{' '}
                                            &#125;;
                                            <br />
                                            <br />
                                            <span className="text-primary">
                                                function
                                            </span>{' '}
                                            <span className="text-accent">
                                                InitializeSystem
                                            </span>
                                            () &#123;
                                            <br />
                                            &nbsp;&nbsp;console.
                                            <span className="text-accent">
                                                log
                                            </span>
                                            (
                                            <span className="text-success">
                                                'Activating Design Engine...'
                                            </span>
                                            );
                                            <br />
                                            &nbsp;&nbsp;
                                            <span className="text-primary">
                                                return
                                            </span>{' '}
                                            <span className="text-warning">
                                                true
                                            </span>
                                            ;<br />
                                            &#125;
                                        </code>
                                    </pre>
                                </div>
                                <div className="font-mono text-xs text-muted-foreground tracking-tighter opacity-50">
                                    0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                    <br />
                                    abcdefghijklmnopqrstuvwxyz !@#$%^&*()
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 04 UI COMPONENTS */}
                <section id="components" className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-primary font-mono text-sm font-bold">
                            04.
                        </span>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
                            UI Components
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="space-y-20">
                        {/* Buttons */}
                        <div>
                            <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] mb-8">
                                Buttons
                            </h3>
                            <div className="flex flex-wrap gap-6 items-center">
                                <Button size="lg">Primary Button</Button>
                                <Button variant="outline" size="lg">
                                    Outline Button
                                </Button>
                                <Button variant="ghost" size="lg">
                                    Ghost Button
                                </Button>
                                <Button disabled size="lg">
                                    Disabled
                                </Button>
                            </div>
                        </div>

                        {/* Form Elements */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] mb-8">
                                    Input Fields
                                </h3>
                                <div className="space-y-8 max-w-md">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground"
                                        >
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="invalid-input"
                                            className="text-[10px] font-mono uppercase tracking-widest text-error"
                                        >
                                            Error State
                                        </label>
                                        <Input
                                            id="invalid-input"
                                            className="border-error focus-visible:ring-error/20"
                                            defaultValue="invalid-input"
                                        />
                                        <p className="text-[10px] text-error font-medium">
                                            Please enter a valid email.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] mb-8">
                                    Chips & Badges
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="outline">REACT</Badge>
                                    <Badge>DESIGN SYSTEM</Badge>
                                    <Badge variant="secondary">
                                        2024 PROJECT
                                    </Badge>
                                    <Badge variant="success">
                                        <div className="size-1 bg-current rounded-full mr-1" />
                                        AVAILABLE
                                    </Badge>
                                    <Badge variant="warning">WARNING</Badge>
                                    <Badge variant="destructive">ERROR</Badge>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Cards */}
                        <div>
                            <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] mb-8">
                                Interactive Cards
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Card className="group cursor-pointer hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Cpu className="size-5" />
                                        </div>
                                        <CardTitle>
                                            Technical Architecture
                                        </CardTitle>
                                        <CardDescription>
                                            Scalable frontend systems built with
                                            React and TypeScript.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all"
                                        >
                                            Read Documentation
                                            <ExternalLink className="size-3" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                <Card className="group cursor-pointer hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                                            <Palette className="size-5" />
                                        </div>
                                        <CardTitle>Visual Design</CardTitle>
                                        <CardDescription>
                                            High-fidelity UI mockups and
                                            interactive prototypes with Framer
                                            Motion.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto text-accent text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all"
                                        >
                                            View Case Study
                                            <ExternalLink className="size-3" />
                                        </Button>
                                    </CardFooter>
                                </Card>

                                <Card className="group relative overflow-hidden bg-surface flex flex-col items-center justify-center text-center p-8">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Layout className="size-12 text-muted-foreground/20 mb-6" />
                                    <div className="h-px w-12 bg-border mb-6" />
                                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                                        Est. 2024
                                    </span>
                                    <h4 className="text-xl font-bold mt-2">
                                        Project Alpha
                                    </h4>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-surface py-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        © 2024 OEL ESTRADA // BUILT WITH TAILWIND CSS
                    </div>
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="icon">
                            <Code2 className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <ExternalLink className="size-4" />
                        </Button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StyleGuide;
