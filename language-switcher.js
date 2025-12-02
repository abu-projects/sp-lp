// Language Switcher with RTL Support
(function() {
    'use strict';

    // Get current language from localStorage or default to English
    let currentLang = localStorage.getItem('sportex_language') || 'en';

    // Initialize language on page load
    function initLanguage() {
        const langData = translations[currentLang];
        if (!langData) {
            currentLang = 'en';
            return;
        }

        // Set HTML attributes
        document.documentElement.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('dir', langData.dir);
        
        // Add RTL class to body if needed
        if (langData.dir === 'rtl') {
            document.body.classList.add('rtl-mode');
        } else {
            document.body.classList.remove('rtl-mode');
        }

        // Update all translatable elements
        updatePageContent();
        
        // Update dropdown selection
        updateDropdownSelection();
    }

    // Update all page content with translations
    function updatePageContent() {
        const lang = translations[currentLang];
        
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (lang[key]) {
                // Check if it's an input/textarea placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', lang[key]);
                    }
                } else {
                    element.innerHTML = lang[key];
                }
            }
        });

        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (lang[key]) {
                element.setAttribute('aria-label', lang[key]);
            }
        });

        // Update title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (lang[key]) {
                element.setAttribute('title', lang[key]);
            }
        });
    }

    // Update dropdown to show current selection
    function updateDropdownSelection() {
        const dropdown = document.getElementById('language-dropdown');
        if (!dropdown) return;

        const selectedCode = dropdown.querySelector('.selected-code');
        const items = dropdown.querySelectorAll('.dropdown-item');

        const langData = translations[currentLang];
        if (selectedCode) selectedCode.textContent = langData.code;

        // Update selected state
        items.forEach(item => {
            const itemLang = item.getAttribute('data-lang');
            if (itemLang === currentLang) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }

    // Switch language
    function switchLanguage(newLang) {
        if (!translations[newLang]) {
            console.error('Language not found:', newLang);
            return;
        }

        currentLang = newLang;
        localStorage.setItem('sportex_language', newLang);
        
        // Smooth transition
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.2s ease';

        setTimeout(() => {
            initLanguage();
            document.body.style.opacity = '1';
            
            // Dispatch custom event for other scripts
            window.dispatchEvent(new CustomEvent('languageChanged', { 
                detail: { language: newLang, dir: translations[newLang].dir } 
            }));
        }, 200);
    }

    // Setup dropdown functionality
    function setupDropdown() {
        const dropdown = document.getElementById('language-dropdown');
        if (!dropdown) return;

        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');
        const items = dropdown.querySelectorAll('.dropdown-item');

        if (!trigger || !menu || !items.length) return;

        // Toggle dropdown
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = menu.classList.contains('show');
            if (isOpen) {
                menu.classList.remove('show');
                trigger.classList.remove('open');
            } else {
                menu.classList.add('show');
                trigger.classList.add('open');
            }
        });

        // Select language
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (lang && lang !== currentLang) {
                    switchLanguage(lang);
                }
                menu.classList.remove('show');
                trigger.classList.remove('open');
            });
        });

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('show');
                trigger.classList.remove('open');
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initLanguage();
            setupDropdown();
        });
    } else {
        initLanguage();
        setupDropdown();
    }

    // Expose API for external use
    window.SportexLang = {
        switch: switchLanguage,
        current: () => currentLang,
        get: (key) => translations[currentLang][key] || key,
        isRTL: () => translations[currentLang].dir === 'rtl'
    };

})();
