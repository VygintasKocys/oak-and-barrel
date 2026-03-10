# Oak & Barrel — Style Guide

> A warm, refined design language for a restaurant that celebrates
> the craft of slow cooking, aged spirits, and honest ingredients.

---

## 1. Brand Essence

**Oak & Barrel** evokes the warmth of a wood-fired kitchen, the glow of amber
bourbon in a heavy glass, and the comfort of a meal cooked with patience.
Every design decision should feel **warm, confident, and inviting** — never
cold, sterile, or hurried.

### Design Principles

| Principle | Meaning | Example |
|---|---|---|
| **Warmth First** | Every surface, shadow, and color carries a golden undertone | Shadows use `rgba(42,30,12,…)` not neutral gray |
| **Generous Space** | Let content breathe — whitespace is a luxury | 96px section gaps, 24px card padding minimum |
| **Honest Craft** | No gratuitous decoration; every element earns its place | Icons are functional, not ornamental |
| **Soft Confidence** | Rounded forms, unhurried motion, steady rhythm | Pill buttons, spring easing, 1.25 type scale |
| **Food is the Hero** | Photography dominates; UI recedes into a supporting role | Muted chrome, vibrant food images |

---

## 2. Color Palette

### Primary: Barrel Gold

The signature color. Used sparingly for maximum impact — CTAs, active tabs,
price highlights, and brand moments.

| Token | Hex | Usage |
|---|---|---|
| `barrel-50` | `#FFF7E6` | Tinted backgrounds, hover fills |
| `barrel-100` | `#FFECC4` | Light accents |
| `barrel-200` | `#FFDB8A` | Badges, tags |
| `barrel-300` | `#F5C45C` | Icon tints, star ratings |
| `barrel-400` | `#E8A435` | **Primary CTA**, buttons, links |
| `barrel-500` | `#D4891A` | Hover state for primary |
| `barrel-600` | `#B56E0F` | Active/pressed state |
| `barrel-700` | `#8F5409` | Text on light backgrounds |

### Neutral: Oak

Warm neutrals form the backbone of every layout.

| Token | Hex | Usage |
|---|---|---|
| `oak-50` | `#FDFBF7` | **Page background** |
| `oak-100` | `#F9F4EB` | Card backgrounds, section fills |
| `oak-150` | `#F5EDE0` | Nested surfaces, table stripes |
| `oak-200` | `#EDE3D3` | Borders, dividers |
| `oak-700` | `#6B5940` | Body text |
| `oak-900` | `#2C2418` | Dark section backgrounds |
| `oak-950` | `#1A150E` | Headings, high-emphasis text |

### Accent: Sage

A herbal green for freshness, tags, and success states.

| Token | Hex | Usage |
|---|---|---|
| `sage-400` | `#6E9E6E` | Success icons, fresh/veg tags |
| `sage-500` | `#527D52` | Success text |
| `sage-50` | `#F2F7F2` | Success background |

### Accent: Ember

A warm terracotta for alerts and spicy indicators.

| Token | Hex | Usage |
|---|---|---|
| `ember-400` | `#E07040` | Spice-level indicators, warnings |
| `ember-500` | `#C4521F` | Error/alert text |
| `ember-50` | `#FFF5F0` | Error/alert background |

### Color Usage Rules

1. **Never use pure black (`#000`) or pure white (`#FFF`) for text or backgrounds.** Use `oak-950` and `oak-50` instead.
2. **Barrel Gold is reserved for interactive elements** — buttons, links, active states. Do not use it for large background fills (use `barrel-50` for tinted sections).
3. **Shadows are always warm-tinted** — `rgba(42, 30, 12, …)` — never neutral gray.
4. **Food photography must remain the most saturated element** on any page. UI chrome should be desaturated by comparison.

---

## 3. Typography

### Font Stack

| Role | Font | Fallback | Weight(s) |
|---|---|---|---|
| **Display / Headings** | Playfair Display | Georgia, serif | 700, 900 |
| **Body / UI** | DM Sans | Segoe UI, system-ui, sans-serif | 400, 500, 600 |
| **Prices / Codes** | JetBrains Mono | Consolas, monospace | 500 |

### Type Scale (1.25 ratio)

| Token | Size | Line Height | Use |
|---|---|---|---|
| `text-7xl` | 5.96rem (95px) | 1.0 | Hero headline |
| `text-6xl` | 4.768rem (76px) | 1.0 | Display text |
| `text-5xl` | 3.815rem (61px) | 1.15 | Page titles (H1) |
| `text-4xl` | 3.052rem (49px) | 1.15 | Section headings (H2) |
| `text-3xl` | 2.441rem (39px) | 1.3 | Subsection headings (H3) |
| `text-2xl` | 1.953rem (31px) | 1.3 | Card titles (H4) |
| `text-xl` | 1.563rem (25px) | 1.3 | Large labels (H5) |
| `text-lg` | 1.25rem (20px) | 1.6 | Lead paragraph |
| `text-md` | 1.125rem (18px) | 1.6 | Emphasized body |
| `text-base` | 1rem (16px) | 1.6 | Body copy |
| `text-sm` | 0.833rem (13px) | 1.6 | Captions, meta |
| `text-xs` | 0.694rem (11px) | 1.6 | Fine print, badges |

### Heading Styles

```
H1 — Playfair Display Bold, text-5xl, tracking-tight, oak-950
H2 — Playfair Display Bold, text-4xl, tracking-tight, oak-950
H3 — Playfair Display Bold, text-3xl, tracking-normal, oak-950
H4 — DM Sans Semibold, text-2xl, tracking-normal, oak-900
H5 — DM Sans Semibold, text-xl, tracking-wide, uppercase, oak-700
H6 — DM Sans Medium, text-lg, tracking-wider, uppercase, oak-600
```

### Typography Rules

1. **Headings are always Playfair Display** (H1–H3) or **DM Sans Semibold** (H4–H6).
2. **Body text is DM Sans Regular at 16px** with 1.6 line height. Maximum line length: 65 characters (~36rem).
3. **Prices use JetBrains Mono Medium** to ensure tabular alignment. Prefix with currency symbol, no decimal for whole numbers (e.g., `$18` not `$18.00` unless cents differ).
4. **All-caps is reserved for H5/H6 labels** and should always include `tracking-wide` or `tracking-wider` letter spacing.
5. **Never use font weights below 400** (Regular). The thinnest allowed text is Regular weight at `text-sm` size.

---

## 4. Spacing & Layout

### Grid System

- **12-column grid** at desktop (1280px+)
- **8-column grid** at tablet (768px–1279px)
- **4-column grid** at mobile (< 768px)
- **Column gutter:** 24px (default), 32px (wide layouts)
- **Page margin:** 24px (mobile), 64px (desktop)
- **Max content width:** 1280px (`container-xl`), centered

### Section Rhythm

| Context | Spacing | Token |
|---|---|---|
| Between major sections | 96px | `section-gap-md` |
| Between hero and first section | 128px | `section-gap-lg` |
| Between compact sections (related) | 64px | `section-gap-sm` |
| Between section title and content | 48px | `space-12` |
| Between cards in a grid | 24px | `space-6` |

### Responsive Breakpoints

| Name | Width | Columns | Page Margin |
|---|---|---|---|
| Mobile | < 480px | 4 | 24px |
| Mobile Landscape | 480–767px | 4 | 24px |
| Tablet | 768–1023px | 8 | 32px |
| Desktop | 1024–1279px | 12 | 48px |
| Wide Desktop | 1280px+ | 12 | 64px |

---

## 5. Borders & Corners

### Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Subtle rounding: tags, badges |
| `radius-md` | 10px | Inputs, small cards |
| `radius-lg` | 16px | Standard cards, panels |
| `radius-xl` | 24px | Feature cards, images |
| `radius-2xl` | 32px | Hero images, CTA blocks |
| `radius-full` | 9999px | Pill buttons, avatars, chips |

### Rules

1. **Buttons are always pill-shaped** (`radius-full`).
2. **Cards use `radius-xl` (24px)** for a soft, inviting feel.
3. **Food images use `radius-xl`** or `radius-2xl` — never sharp corners.
4. **Avatars/portraits are always circular** (`radius-full`).
5. **Inputs use `radius-md` (10px)** for a subtle, grounded feel.

---

## 6. Shadows & Elevation

All shadows use warm-tinted RGBA values (`42, 30, 12`) to maintain the golden atmosphere.

| Level | Token | Usage |
|---|---|---|
| 0 | none | Flat elements, disabled cards |
| 1 | `shadow-xs` | Subtle lift: tags, chips |
| 2 | `shadow-sm` | Default card resting state |
| 3 | `shadow-md` | Hovered cards, dropdowns |
| 4 | `shadow-lg` | Elevated panels, popovers |
| 5 | `shadow-xl` | Modals, dialogs |
| 6 | `shadow-2xl` | Full-screen overlays |
| Brand | `shadow-brand` | Focused CTA buttons (amber glow) |

### Hover Elevation Pattern

Cards should transition from `shadow-sm` to `shadow-lg` on hover, combined with a subtle `translateY(-2px)` lift:

```css
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

---

## 7. Motion & Animation

### Principles

1. **Organic, not mechanical.** Use spring/bounce easing for playful elements (add-to-cart), ease-out for entrances, ease-in for exits.
2. **Fast feedback, slow delight.** Interactive feedback (hover, press) should be < 150ms. Decorative animations can be 400–600ms.
3. **Stagger for rhythm.** When multiple elements enter (menu cards, grid items), stagger by 75–100ms each.
4. **Respect prefers-reduced-motion.** Wrap all animations:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

### Standard Transitions

| Interaction | Property | Duration | Easing |
|---|---|---|---|
| Button hover | background, shadow | 150ms | ease-default |
| Card hover | shadow, transform | 250ms | ease-out |
| Page section entrance | opacity, transform | 500ms | ease-out |
| Modal open | opacity, transform | 400ms | ease-spring |
| Modal close | opacity, transform | 250ms | ease-in |
| Navigation scroll shrink | height, padding | 300ms | ease-in-out |
| Stagger delay per item | — | 75ms | — |

### Scroll-Triggered Entrances

Sections fade in and slide up on scroll into viewport:

```css
.section-enter {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-entrance) var(--ease-out),
              transform var(--duration-entrance) var(--ease-out);
}
.section-enter.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 8. Iconography

### Style

- **Line icons, 1.5px stroke weight, rounded caps and joins**
- Icon size: 20px (default), 16px (compact), 24px (large)
- Color inherits from current text color unless specifically branded
- Recommended set: **Lucide** (consistent stroke weight, MIT license)

### Common Icons

| Context | Icon | Notes |
|---|---|---|
| Navigation menu | `Menu`, `X` | Hamburger and close |
| Search | `Search` | Magnifying glass |
| Cart | `ShoppingBag` | Not ShoppingCart — bag is warmer |
| User account | `User` | Circular outline |
| Phone/Reserve | `Phone` | For reservation CTAs |
| Location | `MapPin` | Address in footer |
| Clock | `Clock` | Operating hours |
| Star rating | `Star` | Filled/half/empty variants |
| Arrow/CTA | `ArrowRight` | In buttons and links |
| Spice level | `Flame` | 1–3 flames for heat |
| Vegetarian | `Leaf` | Sage green color |

---

## 9. Photography & Imagery

### Guidelines

1. **Warm white balance.** All food photography should lean warm (3200–4000K color temperature). Cool/blue-tinted images must be color-corrected.
2. **Shallow depth of field.** Hero and feature images use a soft bokeh background to keep focus on the dish.
3. **Overhead and 45-degree angles.** These are the two primary shot angles. Avoid straight-on side shots.
4. **Generous plating space.** Images should include the plate edge and some table surface — never tightly cropped to just the food.
5. **Consistent aspect ratios:**
   - Hero: 16:9 or 3:2 (landscape)
   - Menu card: 4:3 or 1:1 (square)
   - Chef portrait: 1:1 (square, cropped to circle)
   - Gallery: 3:4 (portrait)
6. **Image treatment:** Apply a subtle warm overlay (`barrel-50` at 5% opacity) for consistency across varied photo sources.

---

## 10. Voice & Copy Style

| Element | Style | Example |
|---|---|---|
| Headlines | Warm, inviting, slightly poetic. Use sentence case. | "We serve the taste you love" |
| CTAs | Action-oriented, confident. Short verb phrases. | "Reserve Your Table", "View Full Menu" |
| Descriptions | Appetizing, sensory language. 1–2 sentences max. | "Slow-roasted lamb shoulder with rosemary jus and roasted root vegetables." |
| Prices | Clean, no-nonsense. JetBrains Mono. | "$24" or "$18.50" |
| Empty states | Friendly and helpful, never blaming. | "Your cart is empty — let's find something delicious." |

---

## 11. Accessibility

1. **Color contrast:** All text meets WCAG 2.1 AA minimum (4.5:1 for body, 3:1 for large text). The `oak-950` on `oak-50` pairing exceeds 15:1.
2. **Focus indicators:** A 2px `barrel-400` outline with 2px offset on all interactive elements. Never remove focus outlines.
3. **Touch targets:** Minimum 44x44px for all interactive elements on mobile.
4. **Alt text:** All food images require descriptive alt text naming the dish (e.g., "Grilled salmon fillet with lemon herb butter and seasonal vegetables").
5. **Reduced motion:** All animations respect `prefers-reduced-motion` (see Section 7).
6. **Semantic markup:** Use proper heading hierarchy (H1 > H2 > H3), landmark roles, and ARIA labels where needed.

---

## 12. Do's and Don'ts

### Do
- Use generous whitespace between sections
- Let food photography be the most colorful element
- Use Barrel Gold for primary CTAs only
- Apply warm-tinted shadows throughout
- Round all corners softly (minimum `radius-sm`)
- Use Playfair Display for emotional/brand headings
- Stagger entrance animations for rhythm

### Don't
- Use pure black or pure white anywhere
- Apply Barrel Gold to large background areas
- Use more than 2 font families on a single page
- Add decorative elements that compete with food imagery
- Use sharp/square corners on cards or images
- Make UI chrome more saturated than food photos
- Skip the `prefers-reduced-motion` check
