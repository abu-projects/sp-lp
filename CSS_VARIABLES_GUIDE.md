# CSS Variables Quick Reference Guide

## 🎨 Using Semantic Color Variables

The new variable system uses semantic naming for better maintainability and consistency.

## 📦 File Structure

```
SportexWeb/wwwroot/css/
├── variables.css          ← Core variables (import first)
├── design-system.css      ← Design system components
└── auth.css              ← Authentication pages (updated)
```

## 🔧 How to Use

### In HTML
```html
<!-- Always import variables.css first -->
<link rel="stylesheet" href="~/css/variables.css" asp-append-version="true" />
<link rel="stylesheet" href="~/css/design-system.css" asp-append-version="true" />
```

### In CSS
```css
/* Import at the top of your CSS file */
@import url('variables.css');

/* Then use the variables */
.my-element {
    color: var(--primary);
    background: var(--bg-surface);
}
```

## 🎨 Primary Color Variables

### Main Colors
```css
--primary           /* #0EA5E9 - Blue (main action color) */
--primary-light     /* #38BDF8 - Lighter blue */
--primary-dark      /* #0284C7 - Darker blue */
--primary-hover     /* rgba(14, 165, 233, 0.1) - Hover state */
--primary-active    /* rgba(14, 165, 233, 0.2) - Active state */

--secondary         /* #7CB342 - Green (success, primary buttons) */
--secondary-light   /* #9CCC65 - Lighter green */
--secondary-dark    /* #689F38 - Darker green */
--secondary-hover   /* rgba(124, 179, 66, 0.1) - Hover state */
--secondary-active  /* rgba(124, 179, 66, 0.2) - Active state */
```

### Usage Examples
```css
/* Primary button with blue */
.btn-blue {
    background: var(--primary);
    color: var(--text-primary);
}

/* Primary button with green */
.btn-green {
    background: var(--secondary);
    color: var(--text-primary);
}

/* Hover states */
.card:hover {
    background: var(--primary-hover);
    border-color: var(--primary);
}
```

## 🖼️ Background Colors

```css
--bg-primary        /* #0A0E14 - Main page background */
--bg-secondary      /* #131920 - Secondary background */
--bg-tertiary       /* #1A2332 - Card backgrounds */
--bg-surface        /* #1E293B - Surface elements */
--bg-surface-light  /* #2D3748 - Lighter surface */
--bg-surface-dark   /* #0F1419 - Darker surface */
--bg-hover          /* #1F2937 - Hover background */
--bg-input          /* rgba(15, 20, 25, 0.6) - Input background */
--bg-input-focus    /* rgba(15, 20, 25, 0.8) - Focused input */
```

### Usage Examples
```css
body {
    background: var(--bg-primary);
}

.card {
    background: var(--bg-tertiary);
}

input {
    background: var(--bg-input);
}

input:focus {
    background: var(--bg-input-focus);
}
```

## 📝 Text Colors

```css
--text-primary      /* #F8FAFC - Main text */
--text-secondary    /* #CBD5E1 - Secondary text */
--text-tertiary     /* #94A3B8 - Tertiary text */
--text-muted        /* #64748B - Muted/placeholder text */
--text-disabled     /* #475569 - Disabled text */
--text-inverse      /* #0A0E14 - Inverse text (for light backgrounds) */
```

### Usage Examples
```css
h1 {
    color: var(--text-primary);
}

p {
    color: var(--text-secondary);
}

.caption {
    color: var(--text-tertiary);
}

::placeholder {
    color: var(--text-muted);
}
```

## 🔲 Border Colors

```css
--border-primary    /* #334155 - Main borders */
--border-secondary  /* #1E293B - Secondary borders */
--border-light      /* #475569 - Lighter borders */
--border-dark       /* #1E293B - Darker borders */
--border-focus      /* var(--primary) - Focus state borders */
```

### Usage Examples
```css
.card {
    border: 1px solid var(--border-primary);
}

input:focus {
    border-color: var(--border-focus);
}
```

## ✅ Status Colors

### Success (Green)
```css
--success           /* #10B981 */
--success-light     /* #34D399 */
--success-dark      /* #059669 */
--success-bg        /* #065F46 - Background */
--success-border    /* #10B981 - Border */
--success-text      /* #D1FAE5 - Text */
```

### Error (Red)
```css
--error             /* #EF4444 */
--error-light       /* #F87171 */
--error-dark        /* #DC2626 */
--error-bg          /* #7F1D1D */
--error-border      /* #EF4444 */
--error-text        /* #FEE2E2 */
```

### Warning (Orange)
```css
--warning           /* #F59E0B */
--warning-light     /* #FBBF24 */
--warning-dark      /* #D97706 */
--warning-bg        /* #78350F */
--warning-border    /* #F59E0B */
--warning-text      /* #FEF3C7 */
```

### Info (Blue)
```css
--info              /* #0EA5E9 */
--info-light        /* #38BDF8 */
--info-dark         /* #0284C7 */
--info-bg           /* #0C4A6E */
--info-border       /* #0EA5E9 */
--info-text         /* #E0F2FE */
```

### Usage Examples
```css
.alert-success {
    background: var(--success-bg);
    border: 1px solid var(--success-border);
    color: var(--success-text);
}

.alert-error {
    background: var(--error-bg);
    border: 1px solid var(--error-border);
    color: var(--error-text);
}
```

## 🌈 Gradients

```css
/* Primary gradients (Blue to Green) */
--gradient-primary              /* Horizontal: Blue → Green */
--gradient-primary-reverse      /* Horizontal: Green → Blue */
--gradient-primary-vertical     /* Vertical: Blue → Green */
--gradient-primary-diagonal     /* Diagonal: Blue → Green */

/* Background gradients */
--gradient-bg                   /* Page background gradient */
--gradient-surface              /* Card/surface gradient */

/* Button gradients */
--gradient-btn-primary          /* Green button gradient */
--gradient-btn-primary-hover    /* Green button hover */
--gradient-btn-secondary        /* Blue button gradient */
--gradient-btn-secondary-hover  /* Blue button hover */
```

### Usage Examples
```css
/* Gradient background */
.hero {
    background: var(--gradient-primary);
}

/* Gradient text */
.title {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Button with gradient */
.btn-primary {
    background: var(--gradient-btn-primary);
}

.btn-primary:hover {
    background: var(--gradient-btn-primary-hover);
}
```

## 📏 Spacing

```css
/* Numeric scale */
--space-0: 0px
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px

/* Semantic scale */
--space-xs: 4px
--space-sm: 8px
--space-md: 12px
--space-lg: 16px
--space-xl: 24px
--space-2xl: 32px
--space-3xl: 48px
--space-4xl: 64px
```

### Usage Examples
```css
.card {
    padding: var(--space-xl);
    margin-bottom: var(--space-lg);
}

.button {
    padding: var(--space-3) var(--space-4);
}
```

## 🔘 Border Radius

```css
--radius-none: 0
--radius-xs: 2px
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-2xl: 20px
--radius-3xl: 24px
--radius-full: 9999px
```

### Usage Examples
```css
.card {
    border-radius: var(--radius-xl);
}

.button {
    border-radius: var(--radius-md);
}

.avatar {
    border-radius: var(--radius-full);
}
```

## 🔤 Typography

### Font Families
```css
--font-primary      /* System font stack */
--font-mono         /* Monospace font stack */
```

### Font Sizes
```css
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 15px
--font-size-md: 16px
--font-size-lg: 18px
--font-size-xl: 20px
--font-size-2xl: 24px
--font-size-3xl: 32px
--font-size-4xl: 40px
--font-size-5xl: 48px
--font-size-6xl: 64px
```

### Font Weights
```css
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

### Usage Examples
```css
h1 {
    font-family: var(--font-primary);
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
}

code {
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
}
```

## 🎭 Shadows

```css
/* Standard shadows */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3)
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.5)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.5)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.6)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.7)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.8)

/* Colored shadows */
--shadow-primary: 0 4px 14px 0 rgba(14, 165, 233, 0.3)
--shadow-primary-lg: 0 6px 20px 0 rgba(14, 165, 233, 0.4)
--shadow-secondary: 0 4px 14px 0 rgba(124, 179, 66, 0.3)
--shadow-secondary-lg: 0 6px 20px 0 rgba(124, 179, 66, 0.4)
```

### Usage Examples
```css
.card {
    box-shadow: var(--shadow-lg);
}

.btn-primary {
    box-shadow: var(--shadow-secondary);
}

.btn-primary:hover {
    box-shadow: var(--shadow-secondary-lg);
}
```

## ⚡ Transitions

```css
--transition-fast: 0.15s ease
--transition-base: 0.2s ease
--transition-slow: 0.3s ease
--transition-slower: 0.5s ease

/* Specific transitions */
--transition-all: all 0.2s ease
--transition-colors: color, background-color, border-color (0.2s ease)
--transition-transform: transform 0.2s ease
--transition-opacity: opacity 0.2s ease
```

### Usage Examples
```css
.button {
    transition: var(--transition-all);
}

.link {
    transition: var(--transition-colors);
}

.modal {
    transition: var(--transition-opacity);
}
```

## 🎯 Component-Specific Variables

### Buttons
```css
--btn-padding-y: 14px
--btn-padding-x: 24px
--btn-padding-sm-y: 8px
--btn-padding-sm-x: 16px
--btn-padding-lg-y: 16px
--btn-padding-lg-x: 32px
--btn-font-size: 16px
--btn-font-weight: 600
--btn-border-radius: 8px
```

### Inputs
```css
--input-padding-y: 14px
--input-padding-x: 16px
--input-padding-icon: 48px
--input-font-size: 15px
--input-border-radius: 8px
--input-border-width: 1px
```

### Cards
```css
--card-padding: 48px
--card-padding-sm: 24px
--card-padding-lg: 64px
--card-border-radius: 16px
```

## 💡 Best Practices

### ✅ DO
```css
/* Use semantic variables */
.button {
    background: var(--primary);
    color: var(--text-primary);
}

/* Use component-specific variables */
.custom-button {
    padding: var(--btn-padding-y) var(--btn-padding-x);
    border-radius: var(--btn-border-radius);
}
```

### ❌ DON'T
```css
/* Don't use hardcoded values */
.button {
    background: #0EA5E9;  /* ❌ */
    color: #F8FAFC;       /* ❌ */
}

/* Don't use magic numbers */
.custom-button {
    padding: 14px 24px;   /* ❌ */
    border-radius: 8px;   /* ❌ */
}
```

## 🔄 Migration from Old Variables

If you have existing code using old variable names:

```css
/* Old → New */
--color-primary-blue → --primary
--color-primary-green → --secondary
--color-text-primary → --text-primary
--color-bg-primary → --bg-primary
--color-border-primary → --border-primary
```

The design-system.css includes backward compatibility aliases, but it's recommended to update to the new names.

## 🎨 Quick Color Reference

| Purpose | Variable | Color |
|---------|----------|-------|
| Primary Action | `--primary` | Blue #0EA5E9 |
| Success/Confirm | `--secondary` | Green #7CB342 |
| Main Text | `--text-primary` | White #F8FAFC |
| Secondary Text | `--text-secondary` | Gray #CBD5E1 |
| Background | `--bg-primary` | Dark #0A0E14 |
| Cards | `--bg-tertiary` | Dark #1A2332 |
| Borders | `--border-primary` | Gray #334155 |
| Success | `--success` | Green #10B981 |
| Error | `--error` | Red #EF4444 |
| Warning | `--warning` | Orange #F59E0B |

## 📚 Additional Resources

- **Full Documentation**: See `DESIGN_SYSTEM.md`
- **Demo Page**: `SportexWeb/Views/Shared/DesignSystemDemo.cshtml`
- **Variables File**: `SportexWeb/wwwroot/css/variables.css`
- **Design System**: `SportexWeb/wwwroot/css/design-system.css`
