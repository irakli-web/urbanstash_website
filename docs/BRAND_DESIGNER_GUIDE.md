# UrbanStash Brand Designer Guiding Document

**Purpose:** This document provides the brand designer with a clear checklist of what to define and deliver for the UrbanStash rebrand. Complete each section to ensure a cohesive, implementable brand identity.

---

## Brand Positioning (Strategic Direction)

**Current state:** The website is more brand-oriented. The rebrand should shift toward building trust through real imagery and tangible proof points.

**Brand pillars** — the main brand should be anchored around:
- **Safe** — Security, reliability, peace of mind
- **Young** — Modern, fresh, urban, approachable
- **Close to you** — Neighborhood-based, convenient, local

**Imagery direction:** Start replacing placeholders with real photos (facilities, neighborhoods, customers where appropriate) to build trust and credibility.

---

## 1. Brand Assets

Define and deliver the following brand assets. All exports should be provided at appropriate resolutions (1x, 2x) and in standard formats (SVG for vectors, PNG for raster where needed).

| Asset | Description | Required Formats |
|-------|-------------|------------------|
| **Logo (full)** | Primary logo with wordmark | SVG, PNG (light & dark variants) |
| **Logo (icon only)** | Symbol/icon for app icon, favicon, social | SVG, PNG (16x16, 32x32, 180x180, 512x512) |
| **Logo (wordmark only)** | Text-only version | SVG, PNG |
| **Favicon** | Browser tab icon | ICO, PNG (32x32, 16x16) |
| **Social share image** | Default Open Graph / Twitter card | PNG, 1200x630px |
| **Hero placeholder** | Default hero image for homepage | JPG/WebP, 1920x1080 (or specified aspect ratio) |
| **Gallery placeholders** | Default facility/gallery images | JPG/WebP, multiple aspect ratios |

**Clear space rules:** Define minimum clear space around the logo (e.g., x-height of "UrbanStash" as unit).

**Minimum size:** Specify minimum reproduction size for logo (e.g., 24px height for digital).

---

## 2. Color Palette

Define a complete color system for light and dark contexts. Provide hex and HSL values.

### Primary Colors

| Token | Usage | Hex | HSL |
|-------|-------|-----|-----|
| Primary | Main brand color, CTAs, links | | |
| Primary (hover) | Hover states for primary | | |
| Primary (muted) | Backgrounds, subtle accents | | |

### Secondary Colors

| Token | Usage | Hex | HSL |
|-------|-------|-----|-----|
| Secondary | Secondary actions, accents | | |
| Secondary (hover) | | | |

### Neutrals (Background & Text)

| Token | Usage | Hex | HSL |
|-------|-------|-----|-----|
| Background (page) | Main page background | | |
| Background (card/surface) | Cards, panels, elevated surfaces | | |
| Background (subtle) | Borders, dividers | | |
| Text (primary) | Headlines, primary content | | |
| Text (secondary) | Body copy | | |
| Text (muted) | Captions, labels, placeholders | | |

### Semantic Colors

| Token | Usage | Hex |
|-------|-------|-----|
| Success | Confirmations, positive states | |
| Error | Errors, warnings, destructive actions | |
| Info | Informational messages | |

### Accessibility

- Document contrast ratios (WCAG 2.1 AA minimum: 4.5:1 for body text, 3:1 for large text)
- Note any color combinations to avoid

---

## 3. Typography

Define a typographic scale and usage rules.

### Font Families

| Role | Font | Fallback | Notes |
|------|------|----------|-------|
| Headlines | | | |
| Body | | | |
| UI / Labels | | (can match body) | |
| Mono (if needed) | | | For codes, numbers |

**License & loading:** Specify font license (Google Fonts, Adobe, self-hosted) and preferred loading strategy.

### Type Scale

Define sizes and line heights. Example structure:

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| H1 | | | Page titles |
| H2 | | | Section headings |
| H3 | | | Subsection headings |
| H4 | | | Card titles, small headings |
| H5 | | | |
| H6 | | | |
| Body (large) | | | Lead paragraphs |
| Body | | | Default body copy |
| Body (small) | | | Fine print |
| Caption | | | Labels, metadata |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body |
| Medium | 500 | Emphasis |
| Semibold | 600 | Subheadings |
| Bold | 700 | Headlines |

---

## 4. Language & Voice

Define how UrbanStash sounds in copy. This guides all web copy, marketing, and product messaging.

### Brand Voice

Describe the brand voice in 3–5 adjectives (e.g., friendly, urban, trustworthy, approachable, no-nonsense).

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Hero / headlines | | |
| Body copy | | |
| CTAs | | |
| Error messages | | |
| Success / confirmation | | |

### Key Phrases

List phrases that embody the brand (e.g., "Storage that lives where you do") and phrases to avoid.

### Do's and Don'ts

| Do | Don't |
|----|-------|
| | |
| | |

---

## 5. Visual Elements

Define the look and feel of UI building blocks.

### Buttons

| Variant | Description | States |
|---------|-------------|--------|
| Primary | Main CTA | Default, Hover, Active, Disabled |
| Secondary | Secondary actions | Default, Hover, Active, Disabled |
| Ghost/Text | Tertiary, low emphasis | Default, Hover |

**Specify:** Border radius, padding, font size/weight, min height.

### Cards

- Border radius
- Border or shadow treatment
- Padding (default)
- Hover state (if any)

### Icons

- Style: Outline, filled, or mixed
- Stroke weight (if outline)
- Default size (e.g., 24px)
- Recommended icon set (e.g., Heroicons, Phosphor, custom)

### Borders

- Default border color and width
- Border radius scale (e.g., sm, md, lg)

### Shadows

- Elevation levels (0–3 or similar)
- Shadow definitions for each level

### Spacing System

Define a spacing scale (e.g., 4, 8, 12, 16, 24, 32, 48, 64, 96) and when to use each.

---

## 6. Imagery

### Photography Style

- Mood (e.g., warm, minimal, urban, lifestyle)
- Subject matter (facilities, people, belongings, neighborhoods)
- Color treatment (natural, desaturated, high contrast)

### Illustrations (if any)

- Style (flat, line, 3D, etc.)
- Color usage within illustrations

### Image Treatment

- Aspect ratios for key contexts (hero, cards, gallery)
- Any filters or overlays to apply consistently

---

## 7. Motion & Animation (Optional)

Define if brand includes motion guidelines.

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page transitions | | | |
| Button hover | | | |
| Card hover | | | |
| Modal open/close | | | |

---

## 8. Deliverables Checklist

Before handoff, ensure the following are delivered:

- [ ] Figma file (or equivalent) with:
  - Logo variants and clear space
  - Color palette page
  - Typography scale page
  - Component library (buttons, cards, form elements)
- [ ] Exported assets:
  - Logo (SVG, PNG) in light and dark
  - Favicon and app icon sizes
  - Social share image
- [ ] CSS variables document (or JSON) with color/typography tokens
- [ ] Brand voice / copy guidelines document
- [ ] Any photography or illustration assets (or style board for future shoots)

---

## Questions or Clarifications

Contact: [Project lead / stakeholder]

Last updated: [Date]
