# CLAUDE.md — Oak & Barrel

This file provides guidance for AI assistants working in this repository.

---

## Project Overview

**Oak & Barrel** is a Next.js restaurant website — a frontend-only application with no backend or database. It serves three pages (Homepage, Menu, About) with a polished design system and interactive components.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Fonts | Playfair Display, DM Sans, JetBrains Mono |
| Images | Next.js `<Image>` with WebP assets in `/public/images/` |
| Linting | ESLint 9 with `next/core-web-vitals` |
| Package Manager | npm |

There is **no backend, no database, no API routes, and no test framework**.

---

## Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

There are no test commands. There are no database migration commands.

---

## Repository Structure

```
oak-and-barrel/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx           # Polymorphic (accepts `as` prop)
│   │   ├── DishCard.tsx
│   │   ├── Footer.tsx           # "use client"
│   │   ├── HeroReserveButton.tsx
│   │   ├── MenuBrowser.tsx      # "use client" — category carousel
│   │   ├── Navbar.tsx           # "use client" — sticky + mobile hamburger
│   │   ├── ReservationContext.tsx  # "use client" — modal open/close state
│   │   ├── ReservationModal.tsx    # "use client" — form + success state
│   │   ├── ScrollReveal.tsx     # "use client" — IntersectionObserver wrapper
│   │   └── SectionHeader.tsx
│   ├── data/
│   │   └── menu.ts          # Static menu item data (26 items)
│   ├── about/page.tsx       # /about route
│   ├── menu/page.tsx        # /menu route
│   ├── layout.tsx           # Root layout — fonts, providers
│   ├── page.tsx             # / (homepage)
│   └── globals.css          # Design tokens + Tailwind directives
├── public/
│   └── images/              # 34 WebP images
├── docs/
│   └── design/
│       ├── style-guide.md       # Source of truth for design decisions
│       ├── component-specs.md   # Spec for all 17 components
│       └── design-tokens.css    # Shadow, motion, spacing tokens
└── .claude/
    └── agents/
        └── frontend-designer.md  # Specialized design-system agent
```

---

## Routing

| URL | File |
|---|---|
| `/` | `app/page.tsx` |
| `/menu` | `app/menu/page.tsx` |
| `/about` | `app/about/page.tsx` |

No dynamic routes exist. No API routes exist.

---

## Code Conventions

### TypeScript

- Strict mode is enabled (`tsconfig.json`).
- Always type component props explicitly.
- Use `React.ComponentPropsWithoutRef<T>` for polymorphic/extended components.
- Export types from data files (e.g., `MenuItem`, `Category`, `BadgeType` from `app/data/menu.ts`).

### React / Next.js

- Pages default to **Server Components** unless interactivity is required.
- Mark components `"use client"` at the top when they use hooks, event handlers, browser APIs, or context.
- Use the **React Context API** for shared UI state (see `ReservationContext.tsx`).
- No third-party state management libraries.

### Styling

- Use **Tailwind utility classes** as the primary styling mechanism.
- Leverage **CSS custom properties** (design tokens) defined in `globals.css` for colors, shadows, spacing, and motion — do not hardcode color hex values or shadow values in components.
- Follow **mobile-first** responsive design: base styles for mobile, `md:` / `lg:` for larger screens.
- Max content width: `1280px` (`max-w-screen-xl`).
- Horizontal padding: `px-6` mobile → `lg:px-16` desktop.

### Naming Conventions

| Thing | Convention |
|---|---|
| Component files | `PascalCase.tsx` |
| Page files | `page.tsx` (Next.js convention) |
| Data/utility files | `camelCase.ts` |
| React components | PascalCase |
| Props, variables | camelCase |
| CSS custom properties | `--kebab-case` |

### Images

- All images live in `/public/images/` as `.webp` files.
- Always use the Next.js `<Image>` component (never a raw `<img>` tag) for content images.
- Provide meaningful `alt` text.

---

## Design System

The design system is the **source of truth** for all visual decisions. Consult these files before implementing or modifying any UI:

- **`docs/design/style-guide.md`** — brand principles, color palette, typography scale, spacing, shadows, motion, accessibility requirements.
- **`docs/design/component-specs.md`** — detailed specifications for all 17 components, including variants, states, and responsive behavior.
- **`docs/design/design-tokens.css`** — token definitions for shadows, motion, and spacing.

### Key design tokens (from `globals.css`)

```css
/* Colors */
--color-barrel-gold: #C9A84C;
--color-oak-dark: #2C1A0E;
--color-sage: #6B7B5E;
--color-ember: #B94F2E;

/* Typography */
--font-display: 'Playfair Display';
--font-body: 'DM Sans';
--font-mono: 'JetBrains Mono';   /* Used for prices */

/* Motion */
--duration-normal: 300ms;
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```

### Accessibility requirements

- WCAG AA contrast on all text.
- Minimum `44px` touch targets for interactive elements.
- Keyboard navigation must work for all interactive components (arrow keys in `MenuBrowser`, Escape to close modal).
- Use semantic HTML elements.

---

## Component Patterns

### Polymorphic Button

```tsx
<Button as="a" href="/menu">View Menu</Button>
<Button as="button" onClick={fn}>Reserve</Button>
```

### Reservation Modal

- Open/close state lives in `ReservationContext`.
- Any component can open the modal by calling `openModal()` from `useReservation()`.
- The form is frontend-only — no backend submission.

### ScrollReveal

Wrap any section that should animate on scroll:

```tsx
<ScrollReveal delay={200}>
  <DishCard ... />
</ScrollReveal>
```

### MenuBrowser

- Reads categories from `app/data/menu.ts`.
- Supports click, arrow keys, and touch swipe for navigation.
- Category filter tabs are rendered dynamically from data.

---

## Adding / Editing Menu Data

Menu items live in `app/data/menu.ts`. Each item follows the `MenuItem` interface:

```ts
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;          // e.g., "$24"
  image: string;          // path relative to /public
  category: Category;     // 'mains' | 'starters' | 'desserts' | 'drinks'
  badge?: BadgeType;      // 'Chef\'s Pick' | 'New' | 'Seasonal' | 'Popular'
}
```

---

## Git Workflow

- The main branch is `master`.
- Feature/session branches follow the pattern: `claude/<slug>`.
- Commit with clear, descriptive messages.
- Push with: `git push -u origin <branch-name>`

---

## What This Project Does NOT Have

- No backend or server-side logic
- No database or ORM
- No API routes (`/app/api/` does not exist)
- No authentication
- No environment variables or `.env` files required
- No test framework (Jest, Vitest, Playwright, etc.)
- No CI/CD configuration
- No Docker configuration
