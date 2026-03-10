# Frontend Designer - Agent Memory

## Project Overview
- **Stack**: Next.js + Tailwind CSS v4
- **Design system docs**: `docs/design/style-guide.md`, `docs/design/component-specs.md`, `docs/design/design-tokens.css`
- **Main CSS**: `app/globals.css` (design tokens + n8n chat widget overrides)
- **Brand**: Warm, refined, fine-dining. Barrel Gold (amber) primary, Oak (warm neutrals), Sage (green accent), Ember (terracotta accent)

## Key Design Rules
- Never use pure black (#000) or pure white (#FFF) -- use oak-950 and oak-50
- Barrel Gold reserved for interactive elements only (CTAs, buttons, links)
- Shadows always warm-tinted: rgba(42, 30, 12, ...)
- Buttons are always pill-shaped (radius-full)
- Cards use radius-xl (24px), inputs use radius-md (10px)
- Primary CTA: barrel-400 bg, oak-950 text, barrel-500 hover, barrel-600 active
- Focus ring: 2px barrel-400 outline, 2px offset

## Z-Index Scale
- sticky: 200, overlay: 300, chat widget: 350, modal: 400, popover: 500, toast: 600

## Typography
- Display/Headings: Playfair Display (--font-display)
- Body/UI: DM Sans (--font-body)
- Prices: JetBrains Mono (--font-mono)
- Loaded via Next.js font vars: --font-playfair, --font-dm-sans, --font-jetbrains

## n8n Chat Widget
- Styled via CSS custom properties in `app/globals.css` under `/* -- n8n Chat Widget -- */`
- Component at `app/components/N8nChat.tsx` -- dynamically loads CSS and creates chat
- Additional refinements use `.n8n-chat` class selectors for shadow, transitions, focus rings
- Toggle button text color should be oak-950 (not white) to match site CTA pattern
- User message bubbles use barrel-400 bg with oak-950 text (matching CTA style)
