// Sticky Header on Scroll
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle (guarded for presence)
const mobileMenuToggle = document.getElementById('mobile-menu-btn') || document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');
if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth Scroll & Active Nav Link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu after click
        if (nav) nav.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Highlight Active Section on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
const animateElements = document.querySelectorAll('.sport-card, .story-card, .step');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Language Switch Handler
const languageSwitch = document.querySelector('.language-switch');
if (languageSwitch) {
    languageSwitch.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        if (selectedLang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
        localStorage.setItem('preferredLanguage', selectedLang);
        console.log(`Language changed to: ${selectedLang}`);
    });

    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        languageSwitch.value = savedLanguage;
        if (savedLanguage === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        }
    }
}

// Button Click Handlers (for demo purposes)
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
        
        // Log button action
        const buttonText = button.textContent.trim();
        console.log(`Button clicked: ${buttonText}`);
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animated-bg');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Console welcome message
console.log('%c🏆 Welcome to Sport Planet! 🏆', 'color: #A0C24F; font-size: 20px; font-weight: bold;');
console.log('%cDiscover. Connect. Succeed.', 'color: #CFE29E; font-size: 14px;');

// Hero background slider (background-only, no controls)
(() => {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    if (slides.length <= 1) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Preload slide images
    slides.forEach(s => {
        const bg = s.style.backgroundImage;
        const match = /url\(["']?(.*?)["']?\)/.exec(bg);
        if (match && match[1]) {
            const img = new Image();
            img.src = match[1];
        }
    });

    let current = 0;
    const intervalMs = 6000; // 6 seconds between slides for slower, more cinematic pacing

    function show(next) {
        if (next === current) return;
        slides[current].classList.remove('active');
        slides[next].classList.add('active');
        current = next;
    }

    setInterval(() => {
        const next = (current + 1) % slides.length;
        show(next);
    }, intervalMs);
})();
