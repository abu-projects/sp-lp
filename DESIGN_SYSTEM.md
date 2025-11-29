# SportEX Design System

A comprehensive design system based on the authentication pages, featuring a dark theme with blue-to-green gradients.

## 🎨 Overview

This design system provides a consistent visual language across the SportEX application, with reusable components, color tokens, typography, and utilities.

## 📁 Files

- **`SportexWeb/wwwroot/css/design-system.css`** - Main design system stylesheet
- **`SportexWeb/Views/Shared/DesignSystemDemo.cshtml`** - Interactive demo page
- **`theme-colors.json`** - Color palette reference

## 🚀 Getting Started

### Installation

Include the design system CSS in your HTML:

```html
<link rel="stylesheet" href="~/css/design-system.css" asp-append-version="true" />
```

## 🎨 Color System

### Primary Colors
- **Blue**: `#0EA5E9` - Primary action color
- **Green**: `#7CB342` - Success and primary button color
- **Green Light**: `#9CCC65` - Accent color

### Background Colors
- **Primary**: `#0A0E14` - Main background
- **Secondary**: `#131920` - Secondary background
- **Tertiary**: `#1A2332` - Card backgrounds

### Text Colors
- **Primary**: `#F8FAFC` - Main text
- **Secondary**: `#CBD5E1` - Secondary text
- **Tertiary**: `#94A3B8` - Tertiary text
- **Disabled**: `#64748B` - Disabled text

### CSS Variables

All colors are available as CSS variables:

```css
var(--color-primary-blue)
var(--color-primary-green)
var(--color-text-primary)
var(--color-bg-primary)
/* ... and many more */
```

## ✨ Gradient Text (Blue to Green)

### Usage

Apply gradient text using the `.text-gradient` class:

```html
<h1 class="text-gradient">Gradient Heading</h1>
<p class="text-gradient">Gradient text from blue to green</p>
```

### Reverse Gradient

For green-to-blue gradient:

```html
<h1 class="text-gradient-reverse">Reverse Gradient</h1>
```

### Custom Gradient

Use CSS variables directly:

```css
.custom-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

## 📝 Typography

### Headings

```html
<h1 class="heading-1">Large Title (40px)</h1>
<h2 class="heading-2">Section Title (32px)</h2>
<h3 class="heading-3">Subsection (24px)</h3>
<h4 class="heading-4">Card Title (20px)</h4>
```

### Body Text

```html
<p class="body-large">Large body text (16px)</p>
<p class="body-base">Standard body text (15px)</p>
<p class="body-small">Small text (14px)</p>
<p class="caption">Caption text (12px)</p>
```

## 🔘 Buttons

### Button Variants

```html
<!-- Primary (Green gradient) -->
<button class="btn btn-primary">Primary Button</button>

<!-- Blue gradient -->
<button class="btn btn-blue">Blue Button</button>

<!-- Secondary (Outlined) -->
<button class="btn btn-secondary">Secondary Button</button>

<!-- Outline -->
<button class="btn btn-outline">Outline Button</button>

<!-- Ghost -->
<button class="btn btn-ghost">Ghost Button</button>
```

### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Regular</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-full">Full Width</button>
```

### Disabled State

```html
<button class="btn btn-primary" disabled>Disabled</button>
```

## 📋 Form Elements

### Text Input

```html
<div class="form-group">
    <label class="form-label">Email</label>
    <div class="input-wrapper">
        <input type="email" class="form-input" placeholder="Enter email" />
        <span class="input-icon">
            <!-- SVG icon -->
        </span>
    </div>
</div>
```

### Textarea

```html
<div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" placeholder="Enter message"></textarea>
</div>
```

### Select

```html
<div class="form-group">
    <label class="form-label">Choose Option</label>
    <select class="form-select">
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
</div>
```

### Checkbox & Radio

```html
<label class="flex flex-gap-sm" style="align-items: center;">
    <input type="checkbox" class="form-checkbox" />
    <span>Checkbox Label</span>
</label>

<label class="flex flex-gap-sm" style="align-items: center;">
    <input type="radio" class="form-radio" name="group" />
    <span>Radio Label</span>
</label>
```

## 🃏 Cards

### Basic Card

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
        <p class="card-subtitle">Subtitle text</p>
    </div>
    <div class="card-body">
        <p>Card content goes here</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-primary">Action</button>
    </div>
</div>
```

### Card Sizes

```html
<div class="card card-sm">Small padding</div>
<div class="card">Regular padding</div>
<div class="card card-lg">Large padding</div>
```

### Card with Gradient Title

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title text-gradient">Gradient Title</h3>
    </div>
</div>
```

## 🚨 Alerts

```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-info">Info message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
```

## 📊 Progress Bar

```html
<div class="progress-container">
    <div class="progress-bar">
        <div class="progress-fill" style="width: 50%;"></div>
    </div>
    <div class="progress-text">Step 1 of 2</div>
</div>
```

## 🎯 Selection Grids

### Grid Layouts

```html
<!-- 2 columns -->
<div class="selection-grid selection-grid-2">
    <div class="selection-item">Option 1</div>
    <div class="selection-item selected">Option 2</div>
</div>

<!-- 4 columns -->
<div class="selection-grid selection-grid-4">
    <div class="selection-item">Option 1</div>
    <div class="selection-item">Option 2</div>
    <div class="selection-item">Option 3</div>
    <div class="selection-item">Option 4</div>
</div>

<!-- Auto-fill (responsive) -->
<div class="selection-grid selection-grid-auto">
    <div class="selection-item">Option 1</div>
    <div class="selection-item">Option 2</div>
</div>
```

### Selected State

Add `.selected` class to highlight:

```html
<div class="selection-item selected">Selected Option</div>
```

## 🏷️ Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

## 🔗 Links

```html
<!-- Standard link -->
<a href="#" class="link">Standard Link</a>

<!-- Gradient link -->
<a href="#" class="link-gradient">Gradient Link</a>
```

## 🛠️ Utility Classes

### Spacing

```html
<!-- Margin -->
<div class="mt-sm">Margin top small</div>
<div class="mt-md">Margin top medium</div>
<div class="mt-lg">Margin top large</div>
<div class="mt-xl">Margin top extra large</div>
<div class="mt-2xl">Margin top 2x large</div>

<div class="mb-sm">Margin bottom small</div>
<!-- ... similar for mb-* -->

<!-- Padding -->
<div class="p-sm">Padding small</div>
<div class="p-md">Padding medium</div>
<div class="p-lg">Padding large</div>
<div class="p-xl">Padding extra large</div>
```

### Flexbox

```html
<div class="flex">Flex container</div>
<div class="flex flex-col">Flex column</div>
<div class="flex flex-center">Centered flex</div>
<div class="flex flex-between">Space between</div>
<div class="flex flex-gap-sm">Flex with small gap</div>
<div class="flex flex-gap-md">Flex with medium gap</div>
<div class="flex flex-gap-lg">Flex with large gap</div>
```

### Text Alignment

```html
<div class="text-left">Left aligned</div>
<div class="text-center">Center aligned</div>
<div class="text-right">Right aligned</div>
```

### Colors

```html
<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-tertiary">Tertiary text color</p>
<p class="text-blue">Blue text</p>
<p class="text-green">Green text</p>

<div class="bg-dark">Dark background</div>
<div class="bg-surface">Surface background</div>
```

### Border Radius

```html
<div class="rounded-sm">Small radius (4px)</div>
<div class="rounded-md">Medium radius (8px)</div>
<div class="rounded-lg">Large radius (12px)</div>
<div class="rounded-xl">Extra large radius (16px)</div>
<div class="rounded-full">Full radius (circle)</div>
```

### Shadows

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
```

### Width

```html
<div class="w-full">Full width (100%)</div>
<div class="w-auto">Auto width</div>
```

### Display

```html
<div class="hidden">Hidden element</div>
<div class="grid">Grid container</div>
```

## 📱 Responsive Design

The design system includes responsive breakpoints:

- **Mobile**: < 768px
  - Selection grids adapt to fewer columns
  - Cards use smaller padding
  - Headings scale down

## 🎭 Gradients

### Available Gradients

```css
/* Primary gradient (Blue to Green) */
var(--gradient-primary)

/* Reverse gradient (Green to Blue) */
var(--gradient-primary-reverse)

/* Background gradients */
var(--gradient-bg-dark)
var(--gradient-surface)

/* Button gradients */
var(--gradient-button-green)
var(--gradient-button-green-hover)
var(--gradient-button-blue)
var(--gradient-button-blue-hover)
```

### Custom Gradient Usage

```css
.custom-element {
    background: var(--gradient-primary);
}

.custom-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

## 🎨 Design Tokens

All design tokens are available as CSS variables:

### Spacing Scale
- `--space-xs`: 4px
- `--space-sm`: 8px
- `--space-md`: 12px
- `--space-lg`: 16px
- `--space-xl`: 24px
- `--space-2xl`: 32px
- `--space-3xl`: 48px

### Typography Scale
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-base`: 15px
- `--font-size-md`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-2xl`: 24px
- `--font-size-3xl`: 32px
- `--font-size-4xl`: 40px

### Font Weights
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Transitions
- `--transition-fast`: 0.15s ease
- `--transition-base`: 0.2s ease
- `--transition-slow`: 0.3s ease

## 📖 Examples

### Complete Form Example

```html
<div class="card">
    <div class="card-header">
        <h2 class="card-title text-gradient">Sign Up</h2>
        <p class="card-subtitle">Create your account</p>
    </div>
    
    <div class="card-body">
        <div class="form-group">
            <label class="form-label">Email</label>
            <div class="input-wrapper">
                <input type="email" class="form-input" placeholder="Enter email" />
                <span class="input-icon">📧</span>
            </div>
        </div>
        
        <div class="form-group">
            <label class="form-label">Password</label>
            <div class="input-wrapper">
                <input type="password" class="form-input" placeholder="Enter password" />
                <span class="input-icon">🔒</span>
            </div>
        </div>
        
        <button class="btn btn-primary btn-full">Sign Up</button>
    </div>
</div>
```

### Dashboard Card Example

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Statistics</h3>
        <span class="badge badge-success">Active</span>
    </div>
    
    <div class="card-body">
        <div class="flex flex-between mb-lg">
            <span class="body-base">Total Users</span>
            <span class="heading-3 text-gradient">1,234</span>
        </div>
        
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill" style="width: 75%;"></div>
            </div>
            <div class="progress-text">75% Complete</div>
        </div>
    </div>
</div>
```

## 🎯 Best Practices

1. **Use CSS Variables**: Always use design tokens instead of hardcoded values
2. **Consistent Spacing**: Use the spacing scale for margins and padding
3. **Semantic Colors**: Use status colors (success, warning, error) appropriately
4. **Gradient Text**: Use sparingly for emphasis on headings and important text
5. **Responsive**: Test components on mobile devices
6. **Accessibility**: Ensure sufficient color contrast and keyboard navigation

## 🔄 Updates

To update the design system:

1. Modify CSS variables in `:root` section
2. Test changes in the demo page
3. Update documentation as needed

## 📞 Support

For questions or issues with the design system, refer to the demo page at:
`SportexWeb/Views/Shared/DesignSystemDemo.cshtml`
