# 🎨 Sport Planet - Quick Color Reference

## Primary Colors

```
┌─────────────────────────────────────────────────────────┐
│  Deep Space Blue - #0C2328                              │
│  ████████████████████████████████████████████████████   │
│  Main background, primary dark color                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Planet Green - #A0C24F                                 │
│  ████████████████████████████████████████████████████   │
│  Accent color, buttons, highlights                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Pure White - #FFFFFF                                   │
│  ████████████████████████████████████████████████████   │
│  Primary text, headings                                 │
└─────────────────────────────────────────────────────────┘
```

---

## Secondary Colors

```
┌─────────────────────────────────────────────────────────┐
│  Slate Blue Gray - #20383F                              │
│  ████████████████████████████████████████████████████   │
│  Secondary backgrounds, header                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Card Background - #122C31                              │
│  ████████████████████████████████████████████████████   │
│  Cards, panels, sidebar                                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Light Gray - #E6EAE9                                   │
│  ████████████████████████████████████████████████████   │
│  Body text, secondary text                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Soft Green Tint - #CFE29E                              │
│  ████████████████████████████████████████████████████   │
│  Hover effects, subtle accents                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  Muted Text - #A9B4B2                                   │
│  ████████████████████████████████████████████████████   │
│  Captions, small notes, disabled text                   │
└─────────────────────────────────────────────────────────┘
```

---

## Quick Copy-Paste

### Tailwind Classes

```html
<!-- Backgrounds -->
bg-[#0C2328]  <!-- Deep Space Blue -->
bg-[#122C31]  <!-- Card Background -->
bg-[#20383F]  <!-- Slate Blue Gray -->
bg-[#A0C24F]  <!-- Planet Green -->

<!-- Text Colors -->
text-white         <!-- Pure White -->
text-[#E6EAE9]    <!-- Light Gray -->
text-[#A9B4B2]    <!-- Muted Text -->
text-[#A0C24F]    <!-- Planet Green -->

<!-- Borders -->
border-[#20383F]  <!-- Default Border -->
border-[#A0C24F]  <!-- Accent Border -->

<!-- Hover States -->
hover:bg-[#CFE29E]  <!-- Soft Green Tint -->
hover:bg-[#20383F]  <!-- Slate Blue Gray -->
```

### CSS Variables

```css
var(--sp-deep-space-blue)   /* #0C2328 */
var(--sp-planet-green)      /* #A0C24F */
var(--sp-pure-white)        /* #FFFFFF */
var(--sp-slate-blue-gray)   /* #20383F */
var(--sp-card-bg)           /* #122C31 */
var(--sp-light-gray)        /* #E6EAE9 */
var(--sp-soft-green-tint)   /* #CFE29E */
var(--sp-muted-text)        /* #A9B4B2 */
```

---

## Common Patterns

### Primary Button
```html
<button class="bg-[#A0C24F] text-[#0C2328] px-6 py-3 rounded-lg font-semibold hover:bg-[#CFE29E] transition">
    Click Me
</button>
```

### Secondary Button
```html
<button class="bg-[#20383F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A0C24F] transition">
    Click Me
</button>
```

### Card
```html
<div class="bg-[#122C31] border border-[#20383F] rounded-xl p-6">
    <h3 class="text-white text-xl font-bold mb-2">Title</h3>
    <p class="text-[#E6EAE9]">Content goes here</p>
</div>
```

### Input Field
```html
<input 
    type="text" 
    class="w-full bg-[#20383F] border border-[#20383F] text-[#E6EAE9] rounded-lg p-3 focus:border-[#A0C24F] focus:outline-none focus:ring-2 focus:ring-[#A0C24F]/20"
    placeholder="Enter text"
/>
```

### Badge/Tag
```html
<span class="px-3 py-1 bg-[#A0C24F]/10 text-[#A0C24F] rounded-full text-sm font-semibold">
    Active
</span>
```

### Link
```html
<a href="#" class="text-[#A0C24F] hover:text-[#CFE29E] transition">
    Click here
</a>
```

---

## Color Combinations

### High Contrast (Best for Text)
- **White on Deep Space Blue:** `#FFFFFF` on `#0C2328` ✅
- **Light Gray on Deep Space Blue:** `#E6EAE9` on `#0C2328` ✅
- **Deep Space Blue on Planet Green:** `#0C2328` on `#A0C24F` ✅

### Medium Contrast (Good for UI)
- **Light Gray on Slate Blue Gray:** `#E6EAE9` on `#20383F` ✅
- **White on Card Background:** `#FFFFFF` on `#122C31` ✅
- **Muted Text on Deep Space Blue:** `#A9B4B2` on `#0C2328` ✅

### Accent Combinations
- **Planet Green on Deep Space Blue:** `#A0C24F` on `#0C2328` ✅
- **Soft Green Tint on Slate Blue Gray:** `#CFE29E` on `#20383F` ✅

---

## Status Colors

### Success
```html
<div class="bg-[#A0C24F]/10 text-[#A0C24F] border border-[#A0C24F]/30">
    Success message
</div>
```

### Warning
```html
<div class="bg-[#CFE29E]/10 text-[#CFE29E] border border-[#CFE29E]/30">
    Warning message
</div>
```

### Info
```html
<div class="bg-[#20383F] text-[#E6EAE9] border border-[#20383F]">
    Info message
</div>
```

### Error (Keep semantic red)
```html
<div class="bg-red-500/10 text-red-500 border border-red-500/30">
    Error message
</div>
```

---

## Opacity Variations

### Planet Green with Opacity
```css
rgba(160, 194, 79, 1.0)   /* 100% - #A0C24F */
rgba(160, 194, 79, 0.8)   /* 80% */
rgba(160, 194, 79, 0.5)   /* 50% */
rgba(160, 194, 79, 0.2)   /* 20% */
rgba(160, 194, 79, 0.1)   /* 10% */
```

### Tailwind Opacity Classes
```html
bg-[#A0C24F]      <!-- 100% -->
bg-[#A0C24F]/80   <!-- 80% -->
bg-[#A0C24F]/50   <!-- 50% -->
bg-[#A0C24F]/20   <!-- 20% -->
bg-[#A0C24F]/10   <!-- 10% -->
```

---

## Gradient

### Planet Orbit Gradient
```css
background: linear-gradient(135deg, #A0C24F 0%, #0C2328 100%);
```

### Tailwind Class
```html
<div class="bg-gradient-to-br from-[#A0C24F] to-[#0C2328]">
    Gradient background
</div>
```

---

## Accessibility

### WCAG AA Compliant Combinations ✅

| Foreground | Background | Contrast Ratio | Pass |
|------------|------------|----------------|------|
| #FFFFFF | #0C2328 | 15.8:1 | ✅ AAA |
| #E6EAE9 | #0C2328 | 13.2:1 | ✅ AAA |
| #A0C24F | #0C2328 | 5.8:1 | ✅ AA |
| #0C2328 | #A0C24F | 5.8:1 | ✅ AA |
| #FFFFFF | #122C31 | 13.5:1 | ✅ AAA |
| #E6EAE9 | #20383F | 9.2:1 | ✅ AAA |

---

## Print This Page

For quick reference while coding, print this page or keep it open in a separate tab!

---

**Last Updated:** January 2025
**Brand:** Sport Planet
