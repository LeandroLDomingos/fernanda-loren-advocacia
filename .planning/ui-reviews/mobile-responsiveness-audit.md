# Mobile Responsiveness Audit — Fernanda Loren Advocacia

**Audited:** 2026-03-25
**Scope:** All components, screens < 768px (mobile breakpoint)
**Screenshots:** Not captured (no dev server running — code-only audit)
**Tailwind breakpoint reference:** `md:` = 768px, `sm:` = 640px

---

## Summary Table

| Component | Severity | Issues Found |
|-----------|----------|-------------|
| Navbar | HIGH | No mobile menu, CTA button overflows pill navbar, brand name truncation risk |
| Hero | HIGH | Image stacks below huge text block, button padding too wide, vertical rhythm collapse |
| About | MEDIUM | `py-32` too tall, decorative blobs overflow clipping area, text size unchanged |
| Services | MEDIUM | `p-10` card padding too large, `py-32` vertical padding excessive, header layout issue |
| Manifesto | HIGH | `py-40` vertical padding extreme, `text-8xl` heading unguarded on mobile, `text-[20vw]` watermark causes overflow |
| Workflow | HIGH | `p-10`/`p-16` step padding excessive, `text-8xl` step number oversized, `text-4xl` step title too large |
| Testimonials | MEDIUM | `p-12` card padding too large, `py-32` section padding excessive, `text-5xl` heading unguarded |
| Footer | MEDIUM | `gap-16` grid gap too large, `pt-32` top padding excessive, bottom bar social links don't wrap cleanly |
| WhatsAppButton | LOW | `bottom-10 right-10` positioning clips against edge on narrow screens |

---

## Component-by-Component Findings and Fixes

---

### Navbar

**File:** `src/components/Navbar.tsx`

#### Problem 1 — No mobile hamburger menu (lines 36–49)
The nav links are hidden with `hidden md:flex` and never replaced with a mobile menu. On mobile, users see only the brand name and the "Consultoria" CTA button with no navigation. This is a complete feature absence.

**Fix:** Add a hamburger state and a mobile menu drawer. At minimum, add a visible menu toggle:
```
// Add useState for isMenuOpen
// Add a <button className="md:hidden ..."> hamburger icon
// Add a conditional <div className="md:hidden absolute top-full ..."> with nav links
```

#### Problem 2 — "Consultoria" CTA button always visible, causes overflow at small widths (line 51)
The button uses `px-8 py-2.5` with `tracking-[0.2em]`. Inside the pill navbar that itself has `px-8`, the combined horizontal footprint on a 375px screen is: left `px-8` (32px) + brand block (~160px) + right `px-8` (32px) + button `px-8` (32px × 2) = approximately 320px, leaving essentially no space. The brand name "FERNANDA LOREN" at `text-2xl` is ~170px alone.

**Fix — button:**
```
// Before:
className="px-8 py-2.5 rounded-full text-[10px] ..."

// After:
className="px-4 py-2 md:px-8 md:py-2.5 rounded-full text-[10px] ..."
```

**Fix — outer nav pill:**
```
// Before:
className="... px-8 py-4 ..."

// After:
className="... px-4 py-3 md:px-8 md:py-4 ..."
```

#### Problem 3 — Brand name text size at `text-2xl` too large for cramped pill (line 29)
With brand name, subtitle, AND CTA all in one row, `text-2xl` is too wide on 375px.

**Fix:**
```
// Before:
className="font-serif text-2xl tracking-tight font-bold ..."

// After:
className="font-serif text-lg md:text-2xl tracking-tight font-bold ..."
```

---

### Hero

**File:** `src/components/Hero.tsx`

#### Problem 1 — Image height forces massive scroll on mobile (line 43)
The image side uses `min-h-[500px]` without a mobile override. On mobile the layout is `flex-col` (correct), but the image block being 500px minimum means the user must scroll 100vh (text) + 500px (image) just to leave the hero. The image is decorative context — it does not need to be 500px tall on mobile.

**Fix:**
```
// Before:
className="flex-1 relative min-h-[500px] md:min-h-screen"

// After:
className="flex-1 relative min-h-[280px] md:min-h-screen"
```

#### Problem 2 — Section padding `p-8` shrinks too little (line 9)
`p-8` = 32px on all sides. On a 375px screen that leaves only 375 - 64 = 311px of content width. Combined with `space-y-12` between headline and body text, the section feels extremely padded with little breathing room for content.

**Fix:**
```
// Before:
className="flex-1 flex items-center justify-center p-8 md:p-24 z-10"

// After:
className="flex-1 flex items-center justify-center p-6 md:p-24 z-10"
```

#### Problem 3 — Body paragraph `text-xl` too large on mobile (line 27)
`text-xl` (20px) with `leading-relaxed` on a narrow column creates very long line wrapping and pushes the CTA button far down the page.

**Fix:**
```
// Before:
className="text-xl md:text-2xl font-serif leading-relaxed text-bg-light/80"

// After:
className="text-base md:text-2xl font-serif leading-relaxed text-bg-light/80"
```

#### Problem 4 — CTA button `px-12` too wide, `gap-8` too large (line 32)
`px-12` = 48px per side = 96px horizontal padding on a button that lives in a 311px-wide column. The `gap-8` (32px) between label and arrow icon further widens it.

**Fix:**
```
// Before:
className="... px-12 py-5 ... gap-8 ..."

// After:
className="... px-6 py-4 md:px-12 md:py-5 ... gap-4 md:gap-8 ..."
```

#### Problem 5 — `space-y-12` between headline and body block too large (line 10)
`space-y-12` = 48px gap. On mobile this pushes the CTA off-screen before the user even reads the subtitle.

**Fix:**
```
// Before:
className="max-w-xl text-center md:text-left space-y-12"

// After:
className="max-w-xl text-center md:text-left space-y-6 md:space-y-12"
```

#### Problem 6 — Decorative brand watermark inside image panel (lines 59–64)
`bottom-12 right-12` places the watermark 48px from both edges. On mobile this overlaps the actual image content and, at `text-[10px]`, is invisible but still occupies paint space.

**Fix:**
```
// Before:
className="absolute bottom-12 right-12 text-right z-20"

// After:
className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right z-20"
```

---

### About

**File:** `src/components/About.tsx`

#### Problem 1 — Section vertical padding `py-32` is extreme on mobile (line 6)
`py-32` = 128px top and bottom. On mobile this turns every section into a very tall scroll tunnel with little content density.

**Fix:**
```
// Before:
className="py-32 px-6 bg-surface relative overflow-hidden"

// After:
className="py-16 md:py-32 px-6 bg-surface relative overflow-hidden"
```

#### Problem 2 — Grid `gap-20` too large when stacked (line 7)
When the `grid-cols-1` layout triggers on mobile, `gap-20` (80px) creates an enormous gap between the image and the text block.

**Fix:**
```
// Before:
className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center"

// After:
className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
```

#### Problem 3 — Heading `text-5xl` unguarded on mobile (line 35)
`text-5xl` (48px) is specified only at base level with no mobile override. The name "FERNANDA LOREN" at 48px requires two lines and dominates the mobile viewport.

**Fix:**
```
// Before:
className="text-5xl md:text-6xl font-serif text-primary leading-tight"

// After:
className="text-3xl md:text-6xl font-serif text-primary leading-tight"
```

#### Problem 4 — Stat row `pt-8 grid grid-cols-2 gap-8` padding excessive (line 53)
`pt-8` is fine, but combined with the overall section padding this contributes to a long scroll. Minor but worth tightening.

**Fix:**
```
// Before:
className="pt-8 grid grid-cols-2 gap-8"

// After:
className="pt-6 md:pt-8 grid grid-cols-2 gap-6 md:gap-8"
```

#### Problem 5 — Decorative blobs use negative positioning (`-right-10`, `-left-10`) (lines 22–23)
`-right-10` and `-left-10` are `-40px` offset. The parent has `overflow-hidden` but only on the section, not the direct parent div of the image. This can leak outside the grid column on narrow screens and cause a horizontal scrollbar if `overflow-x-hidden` on `body` doesn't catch it.

**Note:** The `body` has `overflow-x-hidden` in `index.css` which provides a safety net, but the blobs should be constrained at the component level.

**Fix:**
```
// Before (line 22):
className="absolute -bottom-10 -right-10 w-64 h-64 ..."
// Before (line 23):
className="absolute top-10 -left-10 w-48 h-48 ..."

// After:
className="absolute -bottom-10 -right-10 w-32 h-32 md:w-64 md:h-64 ..."
className="absolute top-10 -left-10 w-24 h-24 md:w-48 md:h-48 ..."
```

---

### Services

**File:** `src/components/Services.tsx`

#### Problem 1 — Section padding `py-32` excessive on mobile (line 64)
Same pattern as About. 128px vertical padding on a section with 8 cards is extreme on mobile.

**Fix:**
```
// Before:
className="py-32 px-6 bg-bg-light relative overflow-hidden"

// After:
className="py-16 md:py-32 px-6 bg-bg-light relative overflow-hidden"
```

#### Problem 2 — Header block `mb-24` too large on mobile (line 66)
`mb-24` = 96px margin below the section header. On mobile this creates a huge gap between the title and the card grid.

**Fix:**
```
// Before:
className="mb-24 flex flex-col md:flex-row justify-between items-start gap-8"

// After:
className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start gap-8"
```

#### Problem 3 — `text-5xl` heading unguarded on mobile (line 67)
`text-5xl` (48px) on mobile with no responsive prefix. "Áreas de atuação" wraps awkwardly.

**Fix:**
```
// Before:
className="text-5xl md:text-8xl font-serif font-light tracking-tight max-w-2xl text-primary leading-[1.1]"

// After:
className="text-3xl md:text-8xl font-serif font-light tracking-tight max-w-2xl text-primary leading-[1.1]"
```

#### Problem 4 — Card padding `p-10` too large on mobile (line 85)
`p-10` = 40px on all sides. On a 375px screen, content area becomes 375 - 24 (section px-6 × 2) - 80 (card p-10 × 2) = 247px for text. Service titles like "BENEFÍCIO ASSISTENCIAL (BPC/LOAS)" will overflow or wrap very tightly.

**Fix:**
```
// Before:
className="bg-white p-10 border border-primary/5 flex flex-col gap-4 rounded-sm shadow-sm group"

// After:
className="bg-white p-6 md:p-10 border border-primary/5 flex flex-col gap-4 rounded-sm shadow-sm group"
```

#### Problem 5 — Card grid `gap-6` is acceptable but `grid-cols-1` leaves very wide cards on mobile
This is acceptable as-is since `grid-cols-1` is the default. No change needed.

---

### Manifesto

**File:** `src/components/Manifesto.tsx`

#### Problem 1 — `py-40` vertical padding catastrophically large on mobile (line 5)
`py-40` = 160px top and bottom. On a 375px screen the section is 320px of padding plus content. This wastes enormous scroll real estate on a section that contains only one heading.

**Fix:**
```
// Before:
className="bg-primary py-40 px-6 relative overflow-hidden"

// After:
className="bg-primary py-16 md:py-40 px-6 relative overflow-hidden"
```

#### Problem 2 — `text-5xl md:text-8xl` heading: the mobile base `text-5xl` is still too large (line 12)
"A advocacia tradicional foca em burocracia. Nós focamos na sua história." at `text-5xl` (48px) breaks into many lines. With a `<br />` forced at mid-sentence (line 15), the layout breaks badly — the `<br />` creates a very short second line that looks unbalanced on mobile.

**Fix:**
```
// Before:
className="text-bg-light text-5xl md:text-8xl font-serif font-light tracking-tight leading-[1.1]"

// After:
className="text-bg-light text-3xl md:text-8xl font-serif font-light tracking-tight leading-[1.1] md:leading-[1.1]"
```

**Additionally**, the `<br />` is unconditional. It should be hidden on mobile:
```
// Before:
<br />

// After:
<br className="hidden md:block" />
```

#### Problem 3 — `text-[20vw]` watermark causes horizontal overflow (lines 19–22)
The decorative "LOREN" text at `text-[20vw]` = 75px on a 375px screen. It sits inside a `right-0 bottom-0 p-12` container. The `p-12` (48px) padding plus the text width can push the container to overflow. While the `overflow-hidden` on the section clips it vertically, the horizontal bleed on the right edge can still cause layout issues.

**Fix:**
```
// Before:
<div className="absolute bottom-0 right-0 p-12 opacity-5">

// After:
<div className="absolute bottom-0 right-0 p-6 md:p-12 opacity-5 overflow-hidden">
```

---

### Workflow

**File:** `src/components/Workflow.tsx`

#### Problem 1 — Section padding `py-32` excessive on mobile (line 30)

**Fix:**
```
// Before:
className="py-32 px-6 bg-bg-light"

// After:
className="py-16 md:py-32 px-6 bg-bg-light"
```

#### Problem 2 — Header `mb-24` too large on mobile (line 32)

**Fix:**
```
// Before:
className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"

// After:
className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
```

#### Problem 3 — `text-5xl md:text-7xl` heading: base `text-5xl` too large on mobile (line 35)
"Protocolo de Atuação" at 48px overflows on very narrow screens.

**Fix:**
```
// Before:
<h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-primary">

// After:
<h2 className="text-3xl md:text-7xl font-serif font-light tracking-tight text-primary">
```

#### Problem 4 — Step card padding `p-10 md:p-16` — the base `p-10` is still too large (line 50)
`p-10` = 40px. On 375px screen: 375 - 24 (px-6 × 2) - 80 (p-10 × 2) = 247px content width. Then the `text-8xl` step number and `text-4xl` step title compete for that space.

**Fix:**
```
// Before:
className="... p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-12 ..."

// After:
className="... p-6 md:p-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 ..."
```

#### Problem 5 — `text-8xl` step number oversized on mobile (line 52)
`text-8xl` = 96px for the decorative "01", "02", "03". At this size it dominates the mobile card and pushes all content down.

**Fix:**
```
// Before:
className="text-8xl font-serif font-light text-accent/10 ..."

// After:
className="text-5xl md:text-8xl font-serif font-light text-accent/10 ..."
```

#### Problem 6 — Step title `text-4xl` too large on mobile (line 59)
`text-4xl` = 36px. Combined with `mb-6`, the title alone consumes a significant portion of the card before the description text even starts.

**Fix:**
```
// Before:
<h3 className="text-4xl font-serif font-medium mb-6 text-primary tracking-tight">

// After:
<h3 className="text-2xl md:text-4xl font-serif font-medium mb-3 md:mb-6 text-primary tracking-tight">
```

#### Problem 7 — Icon hidden on mobile but `gap-12` still applies to the 2-column flex layout (line 66)
The icon `div` is `hidden md:block` which is correct, but on mobile the card is `flex-col` and `gap-12` (48px) between step number, content block, and the hidden icon div still applies as gap between existing elements.

**Fix:** Already partially addressed by fixing `gap-12` to `gap-6 md:gap-12` in Problem 4 above.

---

### Testimonials

**File:** `src/components/Testimonials.tsx`

#### Problem 1 — Section padding `py-32` excessive on mobile (line 27)

**Fix:**
```
// Before:
className="py-32 px-6 bg-bg-light relative overflow-hidden"

// After:
className="py-16 md:py-32 px-6 bg-bg-light relative overflow-hidden"
```

#### Problem 2 — Header `mb-24` too large on mobile (line 29)

**Fix:**
```
// Before:
className="mb-24 text-center space-y-4"

// After:
className="mb-12 md:mb-24 text-center space-y-4"
```

#### Problem 3 — Section heading `text-5xl` unguarded on mobile (line 31)
"Histórias que nos inspiram" at 48px wraps to multiple lines and is disproportionately large compared to surrounding body text.

**Fix:**
```
// Before:
<h2 className="text-5xl md:text-7xl font-serif text-primary">

// After:
<h2 className="text-3xl md:text-7xl font-serif text-primary">
```

#### Problem 4 — Testimonial card padding `p-12` too large on mobile (line 42)
`p-12` = 48px. On 375px: 375 - 24 - 96 = 255px content width. The quote text at `text-xl` (20px) with `italic font-serif` is already a wide character set; this leaves very little room.

**Fix:**
```
// Before:
className="bg-white p-12 rounded-sm shadow-sm border border-primary/5 flex flex-col justify-between relative group"

// After:
className="bg-white p-6 md:p-12 rounded-sm shadow-sm border border-primary/5 flex flex-col justify-between relative group"
```

#### Problem 5 — Card grid `gap-12` too large when stacked (line 34)
`gap-12` = 48px between stacked testimonial cards on mobile.

**Fix:**
```
// Before:
className="grid grid-cols-1 md:grid-cols-3 gap-12"

// After:
className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
```

#### Problem 6 — Quote icon `size-12` at `top-8 right-8` (line 44)
`top-8 right-8` = 32px from each edge. With `p-6` on mobile (after the fix above) the icon would overlap the card content at top-right. Fine at `p-12` on desktop but tight on mobile.

**Fix:**
```
// Before:
<Quote className="absolute top-8 right-8 size-12 ..."

// After:
<Quote className="absolute top-4 right-4 md:top-8 md:right-8 size-8 md:size-12 ..."
```

---

### Footer

**File:** `src/components/Footer.tsx`

#### Problem 1 — `pt-32` vertical padding extreme on mobile (line 5)
`pt-32` = 128px top padding above the footer grid.

**Fix:**
```
// Before:
className="bg-primary text-bg-light pt-32 pb-12 px-6"

// After:
className="bg-primary text-bg-light pt-16 md:pt-32 pb-12 px-6"
```

#### Problem 2 — Grid `gap-16` too large when stacked on mobile (line 7)
`gap-16` = 64px between grid rows when the 4-column grid collapses to 1 column. Combined with each cell having its own `mb-10` internal spacing, the footer becomes extremely tall.

**Fix:**
```
// Before:
className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24"

// After:
className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-24"
```

#### Problem 3 — Brand heading `text-4xl` on mobile occupies too much space (line 10)
The brand name "FERNANDA LOREN" uppercase at `text-4xl` (36px) is very wide. On 375px it likely forces the text to two lines or overflows.

**Fix:**
```
// Before:
<h2 className="text-4xl font-serif font-bold tracking-tight text-bg-light uppercase">

// After:
<h2 className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-bg-light uppercase">
```

#### Problem 4 — Footer tagline `text-xl` too large on mobile (line 13)
`text-xl` (20px) italic serif for the brand tagline on a narrow dark background. This is readable but disproportionate relative to the small `text-[10px]` navigation links below.

**Fix:**
```
// Before:
className="text-bg-light/50 text-xl max-w-md leading-relaxed font-serif italic"

// After:
className="text-bg-light/50 text-base md:text-xl max-w-md leading-relaxed font-serif italic"
```

#### Problem 5 — Bottom bar `flex items-center gap-12` does not wrap on mobile (line 41–53)
The bottom bar is `flex flex-col md:flex-row` (correct), but the inner `flex items-center gap-12` row containing social links + version badge has no wrap behavior. On mobile this nested flex row takes up its full width and the `gap-12` (48px) pushes the version badge off-screen or causes overflow.

**Fix:**
```
// Before (line 45):
<div className="flex items-center gap-12">

// After:
<div className="flex flex-wrap items-center gap-6 md:gap-12">
```

#### Problem 6 — Social links `gap-8` adequate but version badge `px-6 py-2.5` touch target is narrow
The version badge is purely decorative and not tappable, so this is acceptable. No fix required.

---

### WhatsAppButton

**File:** `src/components/WhatsAppButton.tsx`

#### Problem 1 — `bottom-10 right-10` positioning (line 11)
`bottom-10 right-10` = 40px from bottom and right. This is generally fine, but on devices with home indicator bars (iPhone with notch/dynamic island) the 40px bottom offset may still place the button under the system UI. The standard safe recommendation is 24px minimum, which `right-10` (40px) satisfies. However, the button can partially overlap the last content of the page on very short mobile viewports.

**Fix (minor improvement for safe-area awareness):**
```
// Before:
className="fixed bottom-10 right-10 z-50 size-16 ..."

// After:
className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 size-14 md:size-16 ..."
```

#### Problem 2 — `size-16` (64px) button is adequate for touch targets (minimum 44px)
No issue. The 64px button exceeds the minimum recommended touch target size of 44x44px.

#### Problem 3 — No conflict guard with Navbar CTA
On mobile the WhatsApp FAB at `bottom-6 right-6` does not conflict with the Navbar at the top, but if a sticky footer CTA were ever added, stacking would be an issue. Not applicable currently.

---

## Critical Overflow Risk Summary

The following patterns each individually risk causing a horizontal scrollbar on 375px screens despite `overflow-x-hidden` on body:

| Location | Pattern | Risk |
|----------|---------|------|
| About line 22 | `absolute -right-10 w-64` | 40px bleed + 256px blob = potential overflow |
| About line 23 | `absolute -left-10 w-48` | 40px bleed + 192px blob |
| Manifesto lines 19–21 | `right-0 p-12` + `text-[20vw]` | `20vw` = 75px on 375px, stacked with `p-12` |
| Hero line 32 | `px-12` button inside `p-8` container | ~280px button in ~311px available width |

---

## Top 3 Priority Fixes

1. **Navbar has no mobile menu at all.** Users on mobile cannot navigate to any section. Add a hamburger toggle (`md:hidden`) that reveals the 5 nav links in a dropdown or slide-down panel. Without this, the entire site navigation is inaccessible on mobile.

2. **Six sections use `py-32` or `py-40` with no mobile override.** Manifesto uses `py-40` (320px of vertical padding for a single heading). Every section except Hero has this pattern. Replace all with `py-16 md:py-32` (and `py-16 md:py-40` for Manifesto). This single change reduces total page scroll height on mobile by approximately 800px.

3. **Workflow step cards use `text-8xl` numbers, `text-4xl` titles, and `p-10 md:p-16` padding simultaneously with no mobile overrides.** On a 375px screen each step card is enormous and the step title at `text-4xl` with a 247px content width wraps to 3–4 lines. Fix by applying: `text-5xl md:text-8xl` for step numbers, `text-2xl md:text-4xl` for step titles, and `p-6 md:p-16` for card padding.

---

## Files Audited

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Manifesto.tsx`
- `src/components/Workflow.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/constants.ts`
