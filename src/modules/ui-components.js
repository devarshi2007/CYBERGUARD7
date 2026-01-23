import { $, $$, toggleClass } from '../utils/dom.js';
import { throttle } from '../utils/helpers.js';

export function initHamburgerMenu() {
  const menuToggle = $('#menu-toggle');
  const mobileNav = $('.mobile-nav');
  const navOverlay = $('.nav-overlay');
  
  if (!menuToggle || !mobileNav) return;
  
  menuToggle.addEventListener('click', () => {
    toggleClass(mobileNav, 'active');
    toggleClass(navOverlay, 'active');
    toggleClass(document.body, 'nav-open');
  });
  
  navOverlay?.addEventListener('click', () => {
    toggleClass(mobileNav, 'active', false);
    toggleClass(navOverlay, 'active', false);
    toggleClass(document.body, 'nav-open', false);
  });
  
  $$('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      toggleClass(mobileNav, 'active', false);
      toggleClass(navOverlay, 'active', false);
      toggleClass(document.body, 'nav-open', false);
    });
  });
}

export function initAccordion() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;
    
    const accordion = trigger.closest('.accordion-item');
    const content = accordion?.querySelector('.accordion-content');
    
    if (!accordion || !content) return;
    
    const isActive = accordion.classList.contains('active');
    
    toggleClass(accordion, 'active', !isActive);
    content.style.maxHeight = isActive ? '0' : content.scrollHeight + 'px';
  });
}

export function initLazyLoading() {
  const images = $$('img[data-src]');
  
  if (!('IntersectionObserver' in window)) {
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  images.forEach(img => observer.observe(img));
}

export function initCookieBanner() {
  const banner = $('#cookieBanner');
  const acceptBtn = $('#acceptCookies');
  const declineBtn = $('#declineCookies');
  
  if (!banner) return;
  
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (!cookieConsent) {
    setTimeout(() => banner.style.display = 'flex', 1000);
  }
  
  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
  });
  
  declineBtn?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    banner.style.display = 'none';
  });
}

export function initLiveCounters() {
  const counters = $$('[data-counter-id]');
  if (!counters.length) return;
  
  let attacksCount = 847000;
  let incidentsCount = 562;
  let damagesPrevented = 2300000000;
  
  const updateCounters = () => {
    attacksCount += Math.floor(Math.random() * 500) + 100;
    incidentsCount += Math.floor(Math.random() * 5) + 1;
    damagesPrevented += Math.floor(Math.random() * 50000000) + 10000000;
    
    counters.forEach(counter => {
      const id = counter.dataset.counterId;
      let value;
      
      if (id.includes('attacks')) {
        value = attacksCount >= 1000000 ? (attacksCount / 1000000).toFixed(1) + 'M+' : attacksCount.toLocaleString();
      } else if (id.includes('incidents')) {
        value = incidentsCount.toLocaleString();
      } else if (id.includes('damages')) {
        value = '$' + (damagesPrevented / 1000000000).toFixed(1) + 'B+';
      }
      
      if (value) {
        counter.textContent = value;
        counter.style.animation = 'none';
        setTimeout(() => counter.style.animation = 'pulse 0.6s ease', 10);
      }
    });
  };
  
  updateCounters();
  setInterval(updateCounters, 3000);
}

export function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    
    const target = $(href);
    if (!target) return;
    
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

export function initUIComponents() {
  initHamburgerMenu();
  initAccordion();
  initLazyLoading();
  initCookieBanner();
  initLiveCounters();
  initSmoothScroll();
}
