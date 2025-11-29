# 🏆 Sportex - Landing Page

A modern, fully responsive dark-themed landing page for Sportex, the global sports discovery platform that connects players, agents, scouts, coaches, and clubs.

## 🎨 Brand Colors

### Primary Colors
- **Deep Space Blue** - `#0C2328` - Main background
- **Electric Blue** - `#0EA5E9` - Primary accent, buttons, highlights
- **Pure White** - `#FFFFFF` - Primary text

### Secondary Colors
- **Slate Blue Gray** - `#20383F` - Secondary backgrounds, header
- **Card Background** - `#122C31` - Cards, panels
- **Light Gray** - `#E6EAE9` - Body text
- **Sky Blue Tint** - `#38BDF8` - Hover effects, secondary accent
- **Muted Text** - `#A9B4B2` - Captions, small notes

## 🚀 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Dark theme with Sportex brand colors
- ✅ Smooth scroll navigation
- ✅ Animated hero section
- ✅ Interactive sport cards with hover effects
- ✅ Success stories carousel
- ✅ Mobile app download section
- ✅ RTL language support
- ✅ Sticky header with scroll effects
- ✅ Mobile menu toggle
- ✅ Scroll-triggered animations
- ✅ Button ripple effects
- ✅ Parallax background effects

## 📁 File Structure

```
sportex-landing/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with brand colors
├── script.js           # Interactive features & animations
└── README.md           # Documentation
```

## 🎯 Sections

1. **Header** - Sticky navigation with logo and CTAs
2. **Hero** - Eye-catching headline with animated background
3. **What We Do & How It Works** - Mission statement and step-by-step guide
4. **All Sports** - Grid of available sports with player counts
5. **Success Stories** - Testimonials from users
6. **Download App** - App store buttons with phone mockup
7. **Footer** - Contact info, legal links, language switcher

## 🎨 Design Principles

- **High Contrast** - WCAG AA compliant color combinations
- **Consistency** - Electric Blue used for all interactive elements
- **Visual Hierarchy** - Clear hierarchy with color intensity
- **Accessibility** - Semantic HTML and proper ARIA labels
- **Performance** - Optimized CSS and vanilla JavaScript

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🛠️ Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    /* Design System Variables */
    --primary: #0EA5E9;
    --primary-light: #38BDF8;
    /* ... */
}
```

### Add New Section

1. Add HTML structure in `index.html`
2. Style in `styles.css`
3. Add interactions in `script.js` if needed

### Modify Animations

Edit animation keyframes in `styles.css`:

```css
@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
}
```

## 🌍 RTL Support

The page supports RTL languages (Arabic, Hebrew, etc.). The language switcher automatically adjusts the layout direction.

## 🚀 Getting Started

1. Clone or download the files
2. Open `index.html` in your browser
3. No build process required - pure HTML, CSS, and JavaScript

## 📝 License

© 2025 Sportex. All rights reserved.

## 🤝 Contributing

For theme customization or feature requests, please refer to the brand guidelines in `COLOR_REFERENCE.md` and `SPORT_PLANET_THEME.md`.

---

**Version:** 1.0  
**Last Updated:** January 2025  
**Theme:** Sportex Dark Mode
