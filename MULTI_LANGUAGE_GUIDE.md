# Multi-Language System Guide

## Overview
Sportex now supports multiple languages with full RTL (Right-to-Left) support for Arabic. The system is designed to be easily extensible for adding more languages in the future.

## Current Languages
- **English (en)** - LTR
- **Arabic (ar)** - RTL with full bidirectional support

## Files Structure

### 1. `translations.js`
Contains all translations for supported languages. Each language has:
- `code`: Short language code (e.g., "En", "Ar")
- `name`: Display name of the language
- `dir`: Text direction ("ltr" or "rtl")
- Translation keys for all UI elements

### 2. `language-switcher.js`
Handles language switching functionality:
- Detects and loads saved language preference
- Updates HTML `lang` and `dir` attributes
- Applies translations to elements with `data-i18n` attributes
- Manages RTL/LTR transitions
- Stores language preference in localStorage

### 3. `rtl-styles.css`
Contains all RTL-specific CSS adjustments:
- Flips layouts for RTL languages
- Adjusts spacing, margins, and padding
- Handles icon and arrow directions
- Ensures proper text alignment
- Maintains visual consistency

## How to Use

### Adding Translations to HTML Elements

Add the `data-i18n` attribute to any element you want to translate:

```html
<!-- For text content -->
<h1 data-i18n="hero_title">Discover. Connect. Succeed.</h1>

<!-- For button text -->
<button data-i18n="btn_signup">Sign Up</button>

<!-- For placeholders -->
<input type="text" placeholder="Enter your name" data-i18n="form_name_placeholder">
```

### Language Switcher Dropdown

The language dropdown is already integrated in the footer. Users can:
1. Click on the language dropdown
2. Select their preferred language
3. The page will smoothly transition to the new language
4. The preference is saved in localStorage

### JavaScript API

Access language functions programmatically:

```javascript
// Switch language
window.SportexLang.switch('ar'); // Switch to Arabic

// Get current language
const currentLang = window.SportexLang.current(); // Returns 'en' or 'ar'

// Get translation for a key
const translation = window.SportexLang.get('hero_title');

// Check if current language is RTL
const isRTL = window.SportexLang.isRTL(); // Returns true/false
```

### Listen to Language Changes

```javascript
window.addEventListener('languageChanged', function(event) {
    console.log('Language changed to:', event.detail.language);
    console.log('Direction:', event.detail.dir);
    // Your custom logic here
});
```

## Adding a New Language

To add a new language (e.g., Spanish):

### Step 1: Add Translations
Edit `translations.js` and add a new language object:

```javascript
es: {
    code: 'Es',
    name: 'Español',
    dir: 'ltr',
    nav_home: 'Inicio',
    nav_about: 'Acerca de',
    // ... add all translation keys
}
```

### Step 2: Add to Dropdown
Edit `index.html` and add the language option to the dropdown:

```html
<button
    class="dropdown-item ..."
    data-lang="es" data-code="Es" data-name="Español">
    <i class="ri-global-line text-text-muted text-xl"></i>
    <div class="flex items-center gap-3">
        <span class="lang-code">Es</span>
        <span class="font-medium">Español</span>
    </div>
</button>
```

### Step 3: Add RTL Styles (if needed)
If the new language is RTL, the existing RTL styles will automatically apply. No additional changes needed.

## RTL Support Features

### Automatic Adjustments
- Text direction and alignment
- Layout mirroring (flex-direction, grid)
- Icon and arrow flipping
- Spacing and margins
- Border radius adjustments
- Form input alignment

### Preserved Elements
- Numbers and prices remain LTR
- Email addresses remain LTR
- Language codes remain LTR
- Centered content stays centered

### Visual Consistency
- All hover effects work correctly
- Animations maintain proper direction
- Dropdown menus position correctly
- Mobile menu slides from correct side

## Testing

### Test Language Switching
1. Open the website
2. Scroll to footer
3. Click language dropdown
4. Select Arabic (العربية)
5. Verify:
   - Text changes to Arabic
   - Layout flips to RTL
   - All elements align correctly
   - Navigation works properly

### Test RTL Layout
- Check header navigation
- Verify hero section alignment
- Test card layouts
- Check form inputs
- Verify footer layout
- Test mobile menu

### Test Persistence
1. Switch to Arabic
2. Refresh the page
3. Verify Arabic is still active
4. Clear localStorage
5. Verify it defaults to English

## Browser Support

The multi-language system works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Translations load instantly (no API calls)
- Language switching is smooth (200ms transition)
- No page reload required
- Minimal JavaScript overhead
- CSS is optimized for both LTR and RTL

## Accessibility

- Proper `lang` attribute for screen readers
- Correct `dir` attribute for text direction
- Keyboard navigation works in both directions
- ARIA labels can be translated using `data-i18n-aria`

## Future Enhancements

Potential additions:
- French (Français)
- Spanish (Español)
- German (Deutsch)
- Portuguese (Português)
- More Middle Eastern languages (Hebrew, Farsi)

## Troubleshooting

### Language not switching
- Check browser console for errors
- Verify `translations.js` is loaded
- Ensure `data-i18n` attributes are correct

### RTL layout issues
- Check `rtl-styles.css` is loaded
- Verify `dir="rtl"` is set on `<html>`
- Inspect element for conflicting styles

### Translations not showing
- Verify translation key exists in `translations.js`
- Check `data-i18n` attribute spelling
- Ensure element is in DOM when script runs

## Support

For issues or questions about the multi-language system, check:
1. Browser console for errors
2. This documentation
3. Code comments in the source files
