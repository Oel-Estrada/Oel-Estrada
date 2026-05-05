# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Oel Estrada Campos (Frontend Engineer). The site is in **active development** — in production (`VITE_APP_ENV=prod`) only a `ComingSoonPage` is shown; the full portfolio app renders only in dev mode.

**Stack:** React 19, TypeScript 5.9, Vite 7, TailwindCSS v4, React Router v7, i18next, shadcn/ui (New York style), Motion (Framer Motion v12), next-themes.

**Package manager:** pnpm (required — do not use npm or yarn).

---

## Commands

```bash
pnpm dev          # Start dev server (Vite)
pnpm build        # Type-check + Vite build
pnpm preview      # Preview production build
pnpm lint         # ESLint on src/
pnpm lint:fix     # ESLint with auto-fix
pnpm format       # Prettier on src/**/*.{ts,tsx,css,md}
pnpm format:all   # Prettier on all tracked file types

# i18n tooling
pnpm i18n:check   # Find missing/extra keys across locales
pnpm i18n:sort    # Alphabetically sort all locale JSON files
pnpm i18n:sync    # Interactive sync of missing keys from reference locale
pnpm i18n:extract # Interactive extract of selected keys to a new file
```

No test runner is configured yet.

---

## Architecture

### Environment Control

`VITE_APP_ENV` (set in `.env`) drives two distinct app modes:

| Value | Behavior |
|-------|----------|
| `dev` | Full portfolio rendered: `MainLayout` + all pages |
| `prod` | Only `ComingSoonPage` shown; development routes excluded |

The `ENVIRONMENTS` object in `src/env.ts` exposes `.isDev` / `.isProd` booleans consumed throughout routing and layout.

### URL-Based Internationalization

All routes are prefixed with `/:lang` (e.g., `/es/`, `/en/projects`). Supported languages are `es`, `en`, `ru` — defined once in `src/i18n/shared.ts`. The `LangLayout` route validates the `lang` param and calls `i18n.changeLanguage()` on every route change; invalid langs redirect to `DEFAULT_LANGUAGE` (`es`).

Translations are loaded at runtime via HTTP backend from `public/locales/{lang}/{namespace}.json`. Current namespaces: `common`, `home`, `comingSoon`, `notFound`.

### Routing Wrappers — Critical Pattern

**Never use React Router primitives directly inside app code.** Always import from `@/routes`:

```ts
import { Link, NavLink, Navigate, useNavigation, useLocalizedPath } from '@/routes';
```

These wrappers (`src/routes/Link.tsx`, `NavLink.tsx`, `Navigate.tsx`, `hooks/useNavigation.tsx`) auto-prepend `/:lang` to every path via `useLocalizedPath`. External URLs (`http://`, `mailto:`, `tel:`) are passed through unchanged.

### Route Gating with `isDevelopment`

Routes in `src/routes/routes.tsx` can be tagged `isDevelopment: true`. The `filterRoutes` function strips them from the tree in production. New pages/sections should start as `isDevelopment: true` until ready for public release.

### Layout

```
ThemeProvider (next-themes)
  └─ BrowserRouter
       └─ AppRoutes (useRoutes)
            └─ LangLayout (/:lang — validates lang, syncs i18n)
                 └─ MainLayout (dev only — Navbar, AppSidebar, Footer, ThemeSwitcher)
                      └─ <Page />
```

In production the `MainLayout` is replaced by `Outlet` directly, rendering only `ComingSoonPage`.

### Pages Structure

Each page lives in `src/pages/<PageName>/` with its own:
- `<PageName>Page.tsx` — top-level page component
- `components/` — page-specific components (not shared)
- `constants/` — data, motion variants, and other page-scoped constants

Shared layout components (`Navbar`, `Footer`, `AppSidebar`, `ThemeSwitcher`, `Logo`) live in `src/components/`.

### UI Components

`src/components/ui/` contains shadcn/ui primitives (configured via `components.json`). Add new ones with the shadcn CLI. Do not manually edit shadcn primitives; customize via Tailwind CSS variables or wrapper components.

The design token system lives in `src/styles/App.css` using Tailwind v4 `@theme` — all color, typography, and radius tokens are CSS variables mapped there.

---

## Code Conventions

- **Imports:** always sorted by `simple-import-sort` (enforced by ESLint as error). Order: externals → internal `@/` aliases. `.ts`/`.tsx` extensions must be explicit in import paths.
- **Type imports:** use `import type { ... }` for type-only imports (`@typescript-eslint/consistent-type-imports` is enforced).
- **Unused vars:** prefix with `_` to suppress (`_param`).
- **JSX strings:** use plain strings, not `{'string'}` wrappers.
- **Pre-commit:** Husky runs `lint-staged` — Prettier + ESLint auto-fix on every commit.
- **Formatting:** 4-space indent, single quotes, semicolons, trailing commas, 80-char print width (`.prettierrc`).
- **Contact data:** All contact info is centralized in `src/lib/constants.ts` (`contactInfo` instance of `ContactInfo`). Use its computed getters (`contactInfo.whatsapp`, `contactInfo.telegram`, etc.) rather than constructing URLs manually.

---

## SOLID Principles Applied

- **Single Responsibility:** Pages own their components and constants in co-located subdirectories. Routing wrappers handle only localization; layout handles only structure.
- **Open/Closed:** Adding a new page means appending to `routesConfig` and placing files under `src/pages/` — no modification of existing routing logic required.
- **Liskov Substitution:** `AppLinkProps`, `AppNavLinkProps`, and `AppNavigate` extend their React Router counterparts, so wrappers are drop-in replacements.
- **Interface Segregation:** Navigation types (`NavbarLink`) are defined with only what each consumer needs; `ContactInfo` exposes computed getters only for the protocols actually used.
- **Dependency Inversion:** Components depend on the `@/routes` abstraction layer, not on React Router directly. i18n is consumed via `useTranslation` hook, not accessed globally.
