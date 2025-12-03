# Language Files

This folder contains individual language files for the Sportex multi-language system.

## Structure

Each language has its own file:
- `en.js` - English translations
- `ar.js` - Arabic translations (RTL)
- `de.js` - German translations
- `fr.js` - French translations

## File Format

Each language file exports an object with the following structure:

```javascript
const languageCode = {
    code: 'XX',        // Language code (e.g., 'EN', 'AR')
    name: 'XX',        // Display name (same as code for minimal UI)
    dir: 'ltr',        // Text direction: 'ltr' or 'rtl'
    
    // Translation keys
    nav_home: 'Home',
    nav_about: 'About',
    // ... more keys
};
```

## Adding a New Language

### Step 1: Create Language File

Create a new file: `lang/xx.js` (e.g., `es.js` for Spanish)

```javascript
// Spanish Language File
const es = {
    code: 'ES',
    name: 'ES',
    dir: 'ltr',
    
    // Copy all keys from en.js and translate
    nav_home: 'Inicio',
    nav_about: 'Acerca de',
    // ... translate all keys
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = es;
}
```

### Step 2: Load in HTML

Add to `index.html` before `language-switcher.js`:

```html
<script src="lang/es.js"></script>
<script>
    if (typeof es !== 'undefined') registerLanguage('es', es);
</script>
```

### Step 3: Add to Dropdown

Add language option in the footer dropdown:

```html
<button class="dropdown-item ..." data-lang="es" data-code="ES">
    <i class="ri-global-line text-text-muted text-xl"></i>
    <span class="lang-code">ES</span>
</button>
```

### Step 4: Add RTL Support (if needed)

If the language is RTL (like Arabic, Hebrew, Farsi):
- Set `dir: 'rtl'` in the language file
- The existing RTL styles will automatically apply

## Translation Keys

### Required Keys (150+)

All language files must include these keys:

#### Navigation (8 keys)
- nav_home, nav_about, nav_sports, nav_success
- nav_clubs, nav_academies, nav_partners, nav_contact

#### Buttons (10 keys)
- btn_login, btn_signup, btn_download, btn_signup_now
- btn_view_all, btn_browse_sport, btn_start_story
- btn_see_all_clubs, btn_browse_academies, btn_become_partner

#### Hero Section (3 keys)
- hero_title, hero_subtitle, btn_signup_now

#### About Section (12 keys)
- about_tag, about_title, about_subtitle
- about_card_title, about_card_desc
- about_global, about_global_desc
- about_trusted, about_trusted_desc
- about_insight, about_insight_desc
- about_video_tag

#### Steps (6 keys)
- step1_title, step1_desc
- step2_title, step2_desc
- step3_title, step3_desc

#### Statistics (15 keys)
- figures_tag, figures_title, figures_subtitle, figures_live
- figures_players, figures_players_desc
- figures_coaches, figures_coaches_desc
- figures_agents, figures_agents_desc
- figures_clubs, figures_clubs_desc
- figures_scouts, figures_scouts_desc

#### Players (15 keys)
- players_tag, players_title, players_subtitle
- player_position_forward, player_position_defender, player_position_winger
- player_striker, player_centerback, player_rightwinger
- player_football, player_price, player_age
- player_height, player_weight, player_nationality

#### Sports (12 keys)
- sports_title, sport_football, sport_tennis
- sport_combat, sport_swimming, sport_hockey
- sport_basketball, sport_volleyball, sport_more
- sport_players, sport_available, btn_browse_sport

#### Success Stories (4 keys)
- success_title, success_quote1, success_quote2, success_quote3

#### Clubs (2 keys)
- clubs_title, btn_see_all_clubs

#### Academies (10 keys)
- academies_title, filter_all, filter_football
- filter_basketball, filter_tennis, filter_usa
- filter_europe, academy_reviews, btn_browse_academies

#### Partners (2 keys)
- partners_title, btn_become_partner

#### Download (7 keys)
- download_title, download_subtitle
- download_appstore, download_appstore_name
- download_playstore, download_playstore_name
- btn_get_app

#### Screenshots (9 keys)
- screenshots_title, screenshots_subtitle
- screenshots_desktop, screenshots_desktop_desc
- screenshots_mobile, screenshots_mobile_desc
- screenshots_tablet, screenshots_tablet_desc
- btn_learn_more

#### Contact (16 keys)
- contact_tag, contact_title, contact_subtitle
- contact_email, contact_phone, contact_address, contact_address_value
- contact_follow, contact_form_title, contact_form_subtitle
- form_name, form_email, form_phone, form_subject
- form_message, btn_send, form_success

#### Footer (11 keys)
- footer_desc, footer_contact, footer_quick_links
- footer_legal, footer_language, footer_how_works
- footer_download, footer_privacy, footer_terms
- footer_cookies, footer_copyright

## Best Practices

### 1. Keep Keys Consistent
- Use the same keys across all language files
- Follow the naming convention: `section_element`
- Example: `nav_home`, `btn_signup`, `form_name`

### 2. Maintain HTML Tags
- Keep HTML tags in translations: `<span class="text-primary">Text</span>`
- Example: `hero_title: 'Discover. <span class="text-primary">Succeed.</span>'`

### 3. Preserve Placeholders
- Keep placeholders like `{name}` intact
- Example: `form_success: 'Thanks, {name}! Message received.'`

### 4. Test Thoroughly
- Test all sections after adding translations
- Verify RTL layout if applicable
- Check mobile responsiveness
- Test form inputs and placeholders

### 5. Cultural Considerations
- Adapt content for cultural context
- Use appropriate formality level
- Consider local conventions (dates, numbers, etc.)

## File Organization

```
lang/
├── README.md          # This file
├── en.js             # English (LTR)
├── ar.js             # Arabic (RTL)
├── de.js             # German (LTR)
├── fr.js             # French (LTR)
├── es.js             # Spanish (LTR) - future
└── ...               # More languages
```

## Benefits of Separate Files

1. **Easy Maintenance** - Each language in its own file
2. **Better Organization** - Clear structure and separation
3. **Team Collaboration** - Multiple translators can work simultaneously
4. **Version Control** - Easy to track changes per language
5. **Scalability** - Simple to add new languages
6. **Performance** - Load only needed languages (future optimization)

## Current Languages

| Code | Language | Direction | Status | File |
|------|----------|-----------|--------|------|
| EN   | English  | LTR       | ✅ Complete | `en.js` |
| AR   | Arabic   | RTL       | ✅ Complete | `ar.js` |
| DE   | German   | LTR       | ✅ Complete | `de.js` |
| FR   | French   | LTR       | ✅ Complete | `fr.js` |

## Future Languages

Potential additions:
- ES - Spanish (Español)
- PT - Portuguese (Português)
- IT - Italian (Italiano)
- TR - Turkish (Türkçe)
- HE - Hebrew (עברית) - RTL
- FA - Farsi (فارسی) - RTL
- UR - Urdu (اردو) - RTL

## Support

For questions about translations:
1. Check this README
2. Review existing language files (`en.js`, `ar.js`)
3. See `MULTI_LANGUAGE_GUIDE.md` in root folder
4. Test with `test-language.html`

---

**Last Updated:** December 3, 2025  
**Languages:** 4 (English, Arabic, German, French)  
**Total Keys:** 150+
