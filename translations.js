// Multi-language translations loader for Sportex
// This file loads individual language files for better organization and maintainability

// Initialize translations object
const translations = {};

// Load language files dynamically
(function() {
    'use strict';
    
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
        // Browser environment - languages will be loaded via script tags
        console.log('Translations loader initialized. Load language files via script tags.');
    } else if (typeof module !== 'undefined' && module.exports) {
        // Node.js environment
        try {
            translations.en = require('./lang/en.js');
            translations.ar = require('./lang/ar.js');
            translations.de = require('./lang/de.js');
            translations.fr = require('./lang/fr.js');
        } catch (e) {
            console.error('Error loading language files:', e);
        }
    }
})();

// Helper function to register a language
function registerLanguage(langCode, langData) {
    translations[langCode] = langData;
    console.log(`Language registered: ${langCode}`);
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
    module.exports.registerLanguage = registerLanguage;
}

// Make registerLanguage available globally in browser
if (typeof window !== 'undefined') {
    window.registerLanguage = registerLanguage;
}
