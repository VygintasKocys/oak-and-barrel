# Oak & Barrel — Component Specifications

> Detailed specs for every UI component in the design system.
> All components reference tokens from `design-tokens.css`.

---

## Table of Contents

1. [Navigation Bar](#1-navigation-bar)
2. [Buttons](#2-buttons)
3. [Dish Card](#3-dish-card)
4. [Menu Section Card](#4-menu-section-card)
5. [Hero Section](#5-hero-section)
6. [Section Header](#6-section-header)
7. [Chef Profile Card](#7-chef-profile-card)
8. [Testimonial Card](#8-testimonial-card)
9. [Star Rating](#9-star-rating)
10. [CTA Banner](#10-cta-banner)
11. [Footer](#11-footer)
12. [Reservation Form](#12-reservation-form)
13. [Badge / Tag](#13-badge--tag)
14. [App Download Banner](#14-app-download-banner)
15. [Image Gallery Grid](#15-image-gallery-grid)
16. [Input Fields](#16-input-fields)
17. [Toast / Notification](#17-toast--notification)

---

## 1. Navigation Bar

A sticky, glass-morphism navbar that compresses on scroll.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]          [Menu] [About] [Chefs] [Contact]  [🛒] │
└─────────────────────────────────────────────────────────┘
```

### Specs

| Property | Default | Scrolled |
|---|---|---|
| Height | `var(--nav-height)` 72px | `var(--nav-height-scrolled)` 60px |
| Background | `var(--nav-bg)` rgba(253,251,247,0.92) | same |
| Backdrop filter | `blur(12px)` | `blur(12px)` |
| Border bottom | none | `1px solid var(--border-subtle)` |
| Position | `fixed`, top 0, full width | same |
| z-index | `var(--z-sticky)` 200 | same |
| Padding | `0 var(--page-margin)` | same |
| Transition | height 300ms ease-in-out | — |

### Logo

- **Font:** Playfair Display Bold, `text-xl` (25px)
- **Color:** `var(--text-primary)` oak-950
- **Ampersand** styled in `var(--color-barrel-400)` for brand accent

### Nav Links

- **Font:** DM Sans Medium, `text-base` (16px)
- **Color:** `var(--text-secondary)` oak-700
- **Hover:** `var(--text-primary)` oak-950
- **Active/Current:** `var(--color-barrel-500)` with a 2px bottom underline offset 6px
- **Gap between links:** `var(--space-8)` 32px

### Mobile (< 768px)

- Hamburger icon replaces nav links
- Full-screen overlay menu on `var(--surface-primary)`
- Links stacked vertically, `text-2xl`, centered
- Animate: slide in from right, 400ms ease-out

### Cart Icon

- Lucide `ShoppingBag`, 20px
- Badge (item count): 16px circle, `var(--color-barrel-400)` bg, white text, `text-xs`, positioned top-right with -4px offset

---

## 2. Buttons

### Variants

#### Primary (Barrel Gold)

| Property | Value |
|---|---|
| Background | `var(--color-barrel-400)` |
| Text | `var(--text-on-brand)` oak-950 |
| Font | DM Sans Semibold, `text-base` |
| Height | `var(--btn-height-md)` 44px |
| Padding | `0 var(--btn-padding-x)` 0 24px |
| Border radius | `var(--btn-radius)` pill |
| Shadow | `var(--shadow-xs)` |
| **Hover** | bg `var(--color-barrel-500)`, shadow `var(--shadow-brand)` |
| **Active** | bg `var(--color-barrel-600)`, shadow none, scale(0.98) |
| **Disabled** | bg `var(--color-oak-200)`, text `var(--text-disabled)`, no shadow, cursor not-allowed |

#### Secondary (Outline)

| Property | Value |
|---|---|
| Background | transparent |
| Border | 2px solid `var(--color-barrel-400)` |
| Text | `var(--color-barrel-600)` |
| **Hover** | bg `var(--color-barrel-50)`, border `var(--color-barrel-500)` |
| **Active** | bg `var(--color-barrel-100)` |

#### Ghost (Text-only)

| Property | Value |
|---|---|
| Background | transparent |
| Text | `var(--text-link)` barrel-600 |
| Padding | `0 var(--space-3)` |
| **Hover** | bg `var(--color-barrel-50)` |
| **Active** | bg `var(--color-barrel-100)` |

### Sizes

| Size | Height | Font Size | Padding X | Icon Size |
|---|---|---|---|---|
| Small | 36px | `text-sm` | 16px | 16px |
| Medium | 44px | `text-base` | 24px | 20px |
| Large | 52px | `text-md` | 32px | 20px |

### With Icon

- Icon placed left or right of label, 8px gap
- Icon inherits text color
- Icon-only button: square (same height as width), centered icon

### Focus State (all variants)

```css
outline: 2px solid var(--color-barrel-400);
outline-offset: 2px;
```

---

## 3. Dish Card

The primary menu item display. Used in "Popular Dishes" and "Regular Menu Pack" grids.

### Structure

```
┌──────────────────────┐
│                      │
│   [Dish Image 4:3]   │
│                      │
├──────────────────────┤
│  Dish Name           │
│  ★★★★☆  (4.2)       │
│  $18.00              │
└──────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Width | Fluid, grid-based (min 260px) |
| Background | `var(--surface-elevated)` white |
| Border radius | `var(--card-radius)` 24px |
| Shadow | `var(--card-shadow)` shadow-sm |
| Padding | 0 (image bleeds to edge), `var(--card-padding)` 24px for text area |
| Transition | shadow 250ms ease-out, transform 250ms ease-out |
| **Hover** | shadow-lg, translateY(-2px) |
| Cursor | pointer |

### Image

| Property | Value |
|---|---|
| Aspect ratio | 4:3 |
| Border radius | 24px 24px 0 0 (top corners match card) |
| Object fit | cover |
| Placeholder | `var(--surface-tertiary)` with Lucide `UtensilsCrossed` icon centered, oak-400 |

### Text Area

| Element | Style |
|---|---|
| **Dish Name** | DM Sans Semibold, `text-lg` (20px), `var(--text-primary)`, 1 line max (ellipsis overflow) |
| **Rating** | Star component (see #9) + count in DM Sans Regular `text-sm`, `var(--text-tertiary)`. Gap 4px. Margin top 8px. |
| **Price** | JetBrains Mono Medium, `text-md` (18px), `var(--color-barrel-600)`. Margin top 8px. |
| **Spacing** | Name → Rating: 8px. Rating → Price: 8px. Bottom padding: 24px. |

### Grid Layout

| Breakpoint | Columns | Gap |
|---|---|---|
| Mobile (< 480px) | 1 | 16px |
| Mobile landscape (480–767px) | 2 | 16px |
| Tablet (768–1023px) | 3 | 24px |
| Desktop (1024px+) | 4 | 24px |

---

## 4. Menu Section Card

A wider card variant used in the "Regular Menu Pack" section, showing a categorized collection.

### Specs

Same as Dish Card, but with these differences:

| Property | Value |
|---|---|
| Image aspect | 1:1 (square) |
| Category label | Positioned as overlay badge on image, bottom-left, 12px inset |
| Layout | Can be displayed in 3-column grid at desktop |

---

## 5. Hero Section

The full-width opening statement of the homepage.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌──────────────────┐    ┌─────────────────────────┐   │
│  │  We Serve The     │    │                         │   │
│  │  Taste You Love 😊│    │    [Hero Dish Image]     │   │
│  │                   │    │    (circular plate)      │   │
│  │  [body text]      │    │                         │   │
│  │                   │    └─────────────────────────┘   │
│  │  [Order Now] [▶]  │                                  │
│  └──────────────────┘                                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Min height | `100svh - var(--nav-height)` |
| Background | `var(--surface-primary)` oak-50 |
| Layout | 2-column (55% text / 45% image) at desktop, stacked on mobile |
| Container | `var(--container-xl)` 1280px, centered |
| Vertical alignment | Center |
| Padding top | `var(--nav-height)` + `var(--space-16)` |

### Headline

| Property | Value |
|---|---|
| Font | Playfair Display Black (900), `text-7xl` (95px) at desktop, `text-5xl` (61px) at mobile |
| Color | `var(--text-primary)` oak-950 |
| Line height | `var(--leading-none)` 1.0 |
| Letter spacing | `var(--tracking-tighter)` |
| Max width | 10ch (forces dramatic line breaks) |

### Body Text

| Property | Value |
|---|---|
| Font | DM Sans Regular, `text-md` (18px) |
| Color | `var(--text-secondary)` oak-700 |
| Max width | 40ch |
| Margin top | `var(--space-6)` 24px |
| Line height | `var(--leading-normal)` 1.6 |

### CTA Row

| Property | Value |
|---|---|
| Gap | `var(--space-4)` 16px |
| Margin top | `var(--space-8)` 32px |
| Primary button | "Order Now" — Primary variant, Large size |
| Secondary action | Play button (circular, 52px, outline variant) for video/about |

### Hero Image

| Property | Value |
|---|---|
| Shape | Circular or soft-rounded (radius-2xl) |
| Size | 400–550px diameter at desktop, 280px at mobile |
| Decoration | Subtle dotted circle pattern behind at 50% opacity, offset 20px |
| Animation | Gentle float (translateY ±8px) over 6s, infinite, ease-in-out |

### Entrance Animation

1. Headline: fade up from 30px below, 500ms, ease-out
2. Body text: fade up, 500ms, delay 100ms
3. CTAs: fade up, 500ms, delay 200ms
4. Hero image: fade in + scale from 0.9 to 1.0, 600ms, delay 150ms

---

## 6. Section Header

Consistent heading pattern for all content sections.

### Structure

```
          Section Title
    Short descriptive subtitle
```

### Specs

| Property | Value |
|---|---|
| Alignment | Center (default), Left (variant) |
| **Title** | Playfair Display Bold, `text-4xl` (49px) desktop / `text-3xl` (39px) mobile |
| Title color | `var(--text-primary)` |
| **Subtitle** | DM Sans Regular, `text-md` (18px), `var(--text-secondary)` |
| Subtitle max width | 50ch |
| Gap title → subtitle | `var(--space-3)` 12px |
| Gap header → content | `var(--space-12)` 48px |

### Decorative Variant

An optional decorative underline element below the title:

- Width: 60px
- Height: 3px
- Background: `var(--color-barrel-400)`
- Border radius: `radius-full`
- Margin top: `var(--space-4)` 16px
- Centered under text

---

## 7. Chef Profile Card

Used in the "Meet Our Chefs" section.

### Structure

```
┌──────────────────────┐
│                      │
│     [Portrait]       │
│    (circular 160px)  │
│                      │
│     Chef Name        │
│     Specialty        │
│                      │
│  [Social icons row]  │
└──────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Width | Fluid, 3-column grid at desktop |
| Background | `var(--surface-elevated)` or `var(--surface-secondary)` |
| Border radius | `var(--card-radius)` 24px |
| Padding | `var(--space-8)` 32px |
| Text align | Center |
| Shadow | `var(--shadow-sm)` |
| **Hover** | shadow-lg, image scale 1.05 |

### Portrait

| Property | Value |
|---|---|
| Size | `var(--avatar-2xl)` 160px |
| Shape | Circle (`radius-full`) |
| Border | 4px solid `var(--color-barrel-200)` |
| Object fit | cover |
| Transition | transform 400ms ease-out |
| **Hover** | scale(1.05) |

### Text

| Element | Style |
|---|---|
| **Name** | DM Sans Semibold, `text-xl` (25px), `var(--text-primary)`. Margin top 20px. |
| **Specialty** | DM Sans Regular, `text-sm` (13px), `var(--text-tertiary)`, italic. Margin top 4px. |

### Social Icons

- Row of 3–4 icons (Instagram, Twitter/X, LinkedIn)
- Icon size: 18px, color `var(--text-tertiary)`
- Hover: color `var(--color-barrel-500)`
- Gap: 16px
- Margin top: 16px

### Grid Layout

| Breakpoint | Columns | Gap |
|---|---|---|
| Mobile | 1 (horizontal card variant) | 16px |
| Tablet | 2 | 24px |
| Desktop | 3 | 32px |

---

## 8. Testimonial Card

Used in "What Our Customers Say" section.

### Structure

```
┌──────────────────────────────────────┐
│  "The food was absolutely amazing.   │
│   Every dish was a masterpiece."     │
│                                      │
│  ┌──┐  Customer Name                │
│  │🧑│  ★★★★★                        │
│  └──┘                                │
└──────────────────────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Background | `var(--surface-elevated)` |
| Border radius | `var(--card-radius)` 24px |
| Padding | `var(--space-8)` 32px |
| Shadow | `var(--shadow-sm)` |
| Border left | 4px solid `var(--color-barrel-300)` (accent variant) |
| Max width | 480px |

### Quote

| Property | Value |
|---|---|
| Font | DM Sans Regular, `text-md` (18px), italic |
| Color | `var(--text-secondary)` |
| Line height | `var(--leading-relaxed)` 1.75 |
| Opening quotation mark | Playfair Display, `text-5xl`, `var(--color-barrel-200)`, positioned absolutely top-left |

### Attribution

| Element | Style |
|---|---|
| **Avatar** | `var(--avatar-md)` 56px, circular |
| **Name** | DM Sans Semibold, `text-base`, `var(--text-primary)` |
| **Rating** | Star component, inline, below name |
| **Layout** | Flex row, avatar left, text right, gap 12px |
| **Margin top** | `var(--space-6)` 24px |

### Carousel/Grid

- Desktop: 3-column grid or horizontal carousel
- Tablet: 2-column
- Mobile: single column or swipeable carousel
- Carousel indicators: small dots, `var(--color-barrel-400)` active, `var(--color-oak-300)` inactive

---

## 9. Star Rating

Reusable rating display component.

### Specs

| Property | Value |
|---|---|
| Icon | Lucide `Star` (filled variant for active, outline for empty) |
| Size | `var(--star-size)` 18px |
| Gap | `var(--star-gap)` 2px |
| Filled color | `var(--star-filled)` barrel-400 |
| Empty color | `var(--star-empty)` oak-300 |
| Half-star | CSS clip-path at 50% on filled star |

### With Count

```
★★★★☆  4.2
```

- Count text: DM Sans Regular, `text-sm`, `var(--text-tertiary)`
- Gap between last star and count: 6px

### Interactive Variant (for forms)

- Cursor pointer on each star
- Hover: all stars up to and including hovered star fill with `var(--color-barrel-300)`
- Click: sets rating, stars fill with `var(--color-barrel-400)`
- Transition: color 150ms ease-default

---

## 10. CTA Banner

Full-width call-to-action band. Used for "Reserve Your Table" and similar prompts.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────────────┐     ┌──────────────────────────┐  │
│  │  [Chef/Food       │     │  Do You Have Any Dinner  │  │
│  │   Image]          │     │  Plan Today? Reserve     │  │
│  │                   │     │  Your Table              │  │
│  │                   │     │                          │  │
│  │                   │     │  [Reserve Now →]         │  │
│  └──────────────────┘     └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Background | `var(--surface-brand)` barrel-50, or `var(--surface-inverse)` for dark variant |
| Border radius | `var(--radius-2xl)` 32px (inset variant within page container) |
| Padding | `var(--space-16)` 64px vertical, `var(--space-12)` 48px horizontal |
| Layout | 2-column (image + text) at desktop, stacked on mobile |
| Shadow | `var(--shadow-lg)` (inset variant) or none (full-bleed) |

### Dark Variant (for "Reserve" CTA)

| Property | Value |
|---|---|
| Background | `var(--color-oak-900)` |
| Text | `var(--text-on-inverse)` oak-100 |
| Button | Primary (barrel-400) stands out against dark bg |

### Content

| Element | Style |
|---|---|
| **Headline** | Playfair Display Bold, `text-4xl`, white or oak-950 |
| **Body** | DM Sans Regular, `text-md`, reduced opacity (0.8) on dark bg |
| **CTA** | Primary button, Large size, with ArrowRight icon |

---

## 11. Footer

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]        [Quick Links]   [Hours]    [Newsletter]  │
│  About text    Menu            Mon-Fri    [email input]  │
│                About           9am-10pm   [Subscribe →]  │
│                Reservation     Sat-Sun                   │
│                Contact         10am-11pm                 │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│  © 2026 Oak & Barrel     [Social Icons]                 │
└─────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Background | `var(--color-oak-900)` |
| Text color | `var(--color-oak-300)` (body), `var(--color-oak-100)` (headings) |
| Padding | `var(--space-16)` 64px top, `var(--space-8)` 32px bottom |
| Layout | 4-column grid at desktop, 2x2 at tablet, stacked on mobile |
| Logo color | `var(--color-oak-100)` |

### Column Headings

- DM Sans Semibold, `text-sm`, uppercase, `tracking-wider`, `var(--color-barrel-400)`

### Links

- DM Sans Regular, `text-base`, `var(--color-oak-400)`
- Hover: `var(--color-oak-100)`
- Line height: `var(--leading-loose)` 2 (generous click targets)

### Newsletter Input

- Inline: text input + submit button
- Input: `var(--color-oak-800)` bg, `var(--color-oak-600)` border, white text
- Button: Primary (barrel-400), icon-only (ArrowRight)
- Border radius: `radius-full` for both, grouped

### Bottom Bar

- Top border: `1px solid var(--color-oak-800)`
- Flex row: copyright left, social icons right
- Copyright: DM Sans Regular, `text-sm`, `var(--color-oak-600)`
- Social icons: 20px, `var(--color-oak-500)`, hover `var(--color-barrel-400)`

---

## 12. Reservation Form

Modal or inline form for table booking.

### Fields

| Field | Type | Placeholder |
|---|---|---|
| Full Name | Text input | "Your name" |
| Email | Email input | "your@email.com" |
| Phone | Tel input | "+1 (555) 000-0000" |
| Date | Date picker | "Select date" |
| Time | Time picker / select | "Select time" |
| Party Size | Number stepper (1–20) | "2 guests" |
| Special Requests | Textarea | "Any dietary requirements or special requests?" |

### Layout

- 2-column grid at desktop (name/email row, phone/date row, etc.)
- Single column on mobile
- Submit button: Primary, Large, full-width on mobile, "Reserve Table →"

### Field Specs

See [Input Fields](#16-input-fields) for individual field styling.

---

## 13. Badge / Tag

Small labels for categorization and status.

### Variants

| Variant | Background | Text | Border |
|---|---|---|---|
| **Default** | `var(--color-oak-150)` | `var(--text-secondary)` | none |
| **Brand** | `var(--color-barrel-100)` | `var(--color-barrel-700)` | none |
| **Success** | `var(--color-sage-100)` | `var(--color-sage-700)` | none |
| **Warning** | `var(--color-barrel-100)` | `var(--color-barrel-700)` | none |
| **Spicy** | `var(--color-ember-100)` | `var(--color-ember-700)` | none |
| **Outline** | transparent | `var(--text-secondary)` | `1px solid var(--border-default)` |

### Specs

| Property | Value |
|---|---|
| Font | DM Sans Medium, `text-xs` (11px) |
| Letter spacing | `var(--tracking-wide)` |
| Text transform | uppercase |
| Height | 22px |
| Padding | 0 8px |
| Border radius | `var(--radius-sm)` 6px |

### With Dot Indicator

- 6px circle before text, same color as text, 6px gap
- Used for "Available", "Sold Out", "Vegetarian" tags

---

## 14. App Download Banner

Promotional section for the mobile app.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Never Feel Hungry!            ┌────────────────────┐  │
│   Download Our Mobile App       │                    │  │
│   Enjoy Delicious Foods         │  [Phone Mockup]    │  │
│                                 │                    │  │
│   [App Store] [Play Store]      └────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
|---|---|
| Background | `var(--color-oak-900)` or gradient from `oak-900` to `oak-950` |
| Border radius | `var(--radius-2xl)` 32px (inset) |
| Padding | `var(--space-16)` |
| Layout | 2-column, text left, phone mockup right |

### Store Buttons

- Height: 48px
- Standard App Store / Play Store badge images
- Gap: 12px between them
- Row layout, wrap on narrow screens

---

## 15. Image Gallery Grid

Masonry or uniform grid for showcasing dishes/ambiance.

### Specs

| Property | Value |
|---|---|
| Layout | CSS Grid, 3 columns at desktop, 2 at tablet, 1 at mobile |
| Gap | `var(--space-4)` 16px |
| Image radius | `var(--radius-xl)` 24px |
| Aspect ratios | Mix of 1:1, 4:3, and 3:4 for visual variety |
| Hover | Slight zoom (scale 1.03), overlay with dish name, 300ms |

### Hover Overlay

- Background: `rgba(26, 21, 14, 0.5)` (warm dark)
- Text: DM Sans Semibold, `text-lg`, white, centered
- Transition: opacity 300ms ease-out

---

## 16. Input Fields

### Text Input

| Property | Value |
|---|---|
| Height | `var(--input-height)` 44px |
| Background | `var(--input-bg)` white |
| Border | `1px solid var(--border-default)` oak-200 |
| Border radius | `var(--input-radius)` 10px |
| Padding | `0 var(--input-padding-x)` 0 16px |
| Font | DM Sans Regular, `text-base` |
| Text color | `var(--text-primary)` |
| Placeholder color | `var(--text-disabled)` oak-400 |

### States

| State | Style |
|---|---|
| **Default** | Border `var(--border-default)` |
| **Hover** | Border `var(--border-strong)` oak-400 |
| **Focus** | Border `var(--color-barrel-400)`, shadow `0 0 0 3px rgba(232,164,53,0.15)` |
| **Error** | Border `var(--color-ember-400)`, shadow `0 0 0 3px rgba(224,112,64,0.10)` |
| **Disabled** | Background `var(--color-oak-100)`, text `var(--text-disabled)`, cursor not-allowed |

### Label

- DM Sans Medium, `text-sm`, `var(--text-secondary)`
- Margin bottom: 6px
- Required indicator: `*` in `var(--color-ember-400)`, 2px left margin

### Helper / Error Text

- DM Sans Regular, `text-sm`
- Helper: `var(--text-tertiary)`
- Error: `var(--color-ember-500)`
- Margin top: 4px
- With icon: 16px Lucide icon inline, 4px gap

### Textarea

- Same styling as text input
- Min height: 120px
- Resize: vertical only
- Line height: `var(--leading-normal)` 1.6

### Select / Dropdown

- Same base styling as text input
- Chevron icon (Lucide `ChevronDown`) right-aligned, 20px, `var(--text-tertiary)`
- Dropdown panel: `var(--surface-elevated)`, `var(--shadow-lg)`, `var(--radius-lg)`
- Option hover: `var(--color-barrel-50)` background

---

## 17. Toast / Notification

Pop-up notifications for actions (order placed, reservation confirmed, etc.).

### Specs

| Property | Value |
|---|---|
| Position | Fixed, bottom-right, 24px from edges |
| Width | 360px max |
| Background | `var(--surface-elevated)` |
| Border radius | `var(--radius-lg)` 16px |
| Shadow | `var(--shadow-xl)` |
| Padding | 16px 20px |
| Border left | 4px solid (varies by type) |

### Types

| Type | Border Color | Icon |
|---|---|---|
| Success | `var(--color-sage-400)` | `CheckCircle` in sage-400 |
| Error | `var(--color-ember-400)` | `AlertCircle` in ember-400 |
| Info | `var(--status-info)` | `Info` in status-info |
| Warning | `var(--color-barrel-400)` | `AlertTriangle` in barrel-400 |

### Content

| Element | Style |
|---|---|
| **Title** | DM Sans Semibold, `text-base`, `var(--text-primary)` |
| **Message** | DM Sans Regular, `text-sm`, `var(--text-secondary)`, margin top 2px |
| **Close** | Lucide `X`, 16px, `var(--text-tertiary)`, top-right corner |

### Animation

- Enter: slide in from right (translateX 100% → 0), fade in, 400ms, ease-spring
- Exit: fade out + slide right, 250ms, ease-in
- Auto-dismiss: 5 seconds (with progress bar variant)

---

## Component Interaction Map

```
┌─────────────────────────────────────────────────────────┐
│ NAVIGATION BAR                                          │
├─────────────────────────────────────────────────────────┤
│ HERO SECTION                                            │
│   └── Button (Primary, Large)                           │
│   └── Button (Secondary, circular play)                 │
├─────────────────────────────────────────────────────────┤
│ SECTION HEADER ("Popular Dishes")                       │
│ DISH CARD GRID (4-col)                                  │
│   └── Dish Card × 4                                     │
│       └── Star Rating                                   │
│       └── Badge (optional: "Spicy", "Veg")              │
├─────────────────────────────────────────────────────────┤
│ SECTION HEADER ("Our Regular Menu Pack")                │
│ MENU SECTION CARD GRID (4-col)                          │
├─────────────────────────────────────────────────────────┤
│ CTA BANNER ("Reserve Your Table") — dark variant        │
│   └── Button (Primary, Large)                           │
├─────────────────────────────────────────────────────────┤
│ SECTION HEADER ("What Our Customers Say")               │
│ TESTIMONIAL CARD GRID or CAROUSEL                       │
│   └── Testimonial Card × 3                              │
│       └── Star Rating                                   │
├─────────────────────────────────────────────────────────┤
│ SECTION HEADER ("Meet Our Chefs")                       │
│ CHEF PROFILE CARD GRID (3-col)                          │
├─────────────────────────────────────────────────────────┤
│ APP DOWNLOAD BANNER                                     │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│   └── Input (Newsletter)                                │
│   └── Button (Icon-only)                                │
└─────────────────────────────────────────────────────────┘
```

---

## Responsive Behavior Summary

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Nav | Hamburger menu | Hamburger or inline | Inline links |
| Hero | Stacked, image above text | Stacked | 2-column side-by-side |
| Dish Cards | 1-col | 2-col | 4-col |
| Chef Cards | Horizontal card | 2-col | 3-col |
| Testimonials | 1-col / carousel | 2-col | 3-col |
| CTA Banner | Stacked, full-bleed | 2-col | 2-col |
| Footer | Stacked accordion | 2x2 grid | 4-col |
