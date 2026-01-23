document.addEventListener('DOMContentLoaded', () => {
    initializeSmoothScrolling();
    initializeAnimations();
    setupEventListeners();
});

function initializeSmoothScrolling() {
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
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .section').forEach(el => {
        observer.observe(el);
    });
}

function setupEventListeners() {
    window.addEventListener('scroll', handleScrollAnimations);
}

function handleScrollAnimations() {
    
}

const fadeInUp = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

if (!document.querySelector('style[data-anim]')) {
    const style = document.createElement('style');
    style.setAttribute('data-anim', 'true');
    style.textContent = fadeInUp;
    document.head.appendChild(style);
}

window.animateElement = function(element, animationName, duration = 0.6) {
    return new Promise((resolve) => {
        const originalAnimation = element.style.animation;
        element.style.animation = `${animationName} ${duration}s ease-out forwards`;
        
        setTimeout(() => {
            element.style.animation = originalAnimation;
            resolve();
        }, duration * 1000);
    });
};

window.smoothTransition = function(element, properties, duration = 0.3) {
    element.style.transition = `all ${duration}s ease-out`;
    Object.assign(element.style, properties);
};
