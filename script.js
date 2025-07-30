// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(240, 255, 240, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(29, 67, 50, 0.1)';
    } else {
        navbar.style.background = 'rgba(240, 255, 240, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
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

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.product-card, .benefit-item, .lifestyle-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.interest) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#52B788' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 0.2rem;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Counter animation for stats (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Enhanced scroll-triggered animations
const scrollElements = document.querySelectorAll('.product-card, .benefit-item, .lifestyle-item');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);

// Product showcase rotation effect
let showcaseIndex = 0;
const showcaseImages = [
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1618946797063-fe1f5d9c3b3a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop'
];

const showcaseBadges = [
    { icon: 'fas fa-recycle', text: 'Plastic-Free', textAr: 'خالي من البلاستيك' },
    { icon: 'fas fa-seedling', text: 'Organic', textAr: 'عضوي' },
    { icon: 'fas fa-globe', text: 'Sustainable', textAr: 'مستدام' },
    { icon: 'fas fa-leaf', text: 'Eco-Friendly', textAr: 'صديق للبيئة' },
    { icon: 'fas fa-heart', text: 'Natural', textAr: 'طبيعي' }
];

function rotateShowcase() {
    const showcaseImg = document.querySelector('.product-showcase img');
    const badge = document.querySelector('.sustainability-badge');
    
    if (showcaseImg && badge) {
        showcaseImg.style.opacity = '0';
        
        setTimeout(() => {
            showcaseIndex = (showcaseIndex + 1) % showcaseImages.length;
            showcaseImg.src = showcaseImages[showcaseIndex];
            const badgeText = currentLanguage === 'ar' ? 
                showcaseBadges[showcaseIndex].textAr : 
                showcaseBadges[showcaseIndex].text;
            badge.innerHTML = `
                <i class="${showcaseBadges[showcaseIndex].icon}"></i>
                <span>${badgeText}</span>
            `;
            showcaseImg.style.opacity = '1';
        }, 300);
    }
}

// Rotate showcase every 5 seconds
setInterval(rotateShowcase, 5000);

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Enhanced button interactions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(handleScrollAnimation, 10));

// Language switching functionality
let currentLanguage = 'en';

const translations = {
    en: {
        langToggleText: 'العربية',
        title: 'EcoNature - Sustainable Living Made Simple'
    },
    ar: {
        langToggleText: 'English',
        title: 'إيكو ناتشر - حياة مستدامة بطريقة بسيطة'
    }
};

function switchLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    const elementsWithTranslations = document.querySelectorAll('[data-en][data-ar]');
    
    // Update text content for all translatable elements
    elementsWithTranslations.forEach(element => {
        const text = element.getAttribute(`data-${newLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update document direction and language
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
    
    // Update page title
    document.title = translations[newLanguage].title;
    
    // Update language toggle button text
    const langToggleText = document.querySelector('.lang-text');
    if (langToggleText) {
        langToggleText.textContent = translations[newLanguage].langToggleText;
    }
    
    // Update current language
    currentLanguage = newLanguage;
    
    // Store language preference
    localStorage.setItem('preferredLanguage', newLanguage);
    
    // Show notification
    const message = newLanguage === 'ar' ? 
        'تم تغيير اللغة إلى العربية' : 
        'Language changed to English';
    showNotification(message, 'success');
}

// Language toggle event listener
document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', switchLanguage);
    }
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        switchLanguage();
    }
});

// Featured product image gallery interaction
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image img');
    const galleryImages = document.querySelectorAll('.image-gallery img');
    
    if (mainImage && galleryImages.length > 0) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                const tempSrc = mainImage.src;
                mainImage.style.opacity = '0.5';
                
                setTimeout(() => {
                    mainImage.src = img.src;
                    mainImage.style.opacity = '1';
                }, 150);
                
                // Optional: Update the clicked thumbnail
                img.style.opacity = '0.7';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 300);
            });
        });
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('EcoNature website loaded successfully!');
    
    // Add initial animations to elements
    setTimeout(() => {
        document.querySelectorAll('.hero-title, .hero-description').forEach((el, index) => {
            el.style.animation = `slideInUp 0.8s ease ${index * 0.2}s forwards`;
        });
    }, 500);
});
