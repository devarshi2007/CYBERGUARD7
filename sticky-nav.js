/**
 * Sticky Page Navigation with IntersectionObserver
 * 2026 Cyber-Themed Design
 */

class StickyPageNav {
  constructor(options = {}) {
    this.sections = options.sections || [];
    this.navContainer = options.navContainer || '.sticky-page-nav';
    this.offset = options.offset || 100;
    this.autoGenerate = options.autoGenerate !== false;
    
    this.init();
  }

  init() {
    if (this.autoGenerate && this.sections.length === 0) {
      this.detectSections();
    }
    
    this.createProgressBar();
    this.createNavigation();
    this.setupIntersectionObserver();
    this.setupScrollListeners();
    this.setupMobileToggle();
    this.setupSmoothScroll();
  }

  detectSections() {
    const headings = document.querySelectorAll('h2[id], h3[id], .section[id]');
    
    headings.forEach((heading) => {
      const id = heading.id;
      const text = heading.textContent.trim();
      
      if (id && text) {
        this.sections.push({ id, text });
      }
    });
  }

  createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-label', 'Reading progress');
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
    progressBar.setAttribute('aria-valuenow', '0');
    
    document.body.prepend(progressBar);
    this.progressFill = progressBar.querySelector('.reading-progress-fill');
  }

  createNavigation() {
    const existingNav = document.querySelector(this.navContainer);
    
    if (existingNav) {
      this.nav = existingNav;
      this.navList = existingNav.querySelector('.page-nav-list');
      this.populateExistingNav();
    } else {
      this.createNewNav();
    }
  }

  populateExistingNav() {
    if (!this.navList) return;
    
    this.navList.innerHTML = '';
    
    this.sections.forEach((section) => {
      const li = document.createElement('li');
      li.className = 'page-nav-item';
      
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      link.className = 'page-nav-link';
      link.textContent = section.text;
      link.setAttribute('data-section', section.id);
      
      li.appendChild(link);
      this.navList.appendChild(li);
    });
  }

  createNewNav() {
    const pageContent = document.querySelector('.container, main, .page-content');
    if (!pageContent) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'page-nav-wrapper';
    
    const nav = document.createElement('nav');
    nav.className = 'sticky-page-nav';
    nav.setAttribute('aria-label', 'Page navigation');
    
    const header = document.createElement('div');
    header.className = 'page-nav-header';
    header.innerHTML = `
      <span class="page-nav-icon">📑</span>
      <h2 class="page-nav-title">On This Page</h2>
    `;
    
    const navList = document.createElement('ul');
    navList.className = 'page-nav-list';
    
    this.sections.forEach((section) => {
      const li = document.createElement('li');
      li.className = 'page-nav-item';
      
      const link = document.createElement('a');
      link.href = `#${section.id}`;
      link.className = 'page-nav-link';
      link.textContent = section.text;
      link.setAttribute('data-section', section.id);
      
      li.appendChild(link);
      navList.appendChild(li);
    });
    
    nav.appendChild(header);
    nav.appendChild(navList);
    
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'page-content';
    
    pageContent.parentNode.insertBefore(wrapper, pageContent);
    wrapper.appendChild(nav);
    wrapper.appendChild(contentWrapper);
    contentWrapper.appendChild(pageContent);
    
    this.nav = nav;
    this.navList = navList;
  }

  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`.page-nav-link[data-section="${id}"]`);
        
        if (!link) return;
        
        if (entry.isIntersecting) {
          document.querySelectorAll('.page-nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          
          link.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      });
    }, observerOptions);

    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        this.observer.observe(element);
      }
    });
  }

  setupScrollListeners() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateProgressBar();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    this.progressFill.style.width = `${Math.min(progress, 100)}%`;
    
    const progressBar = this.progressFill.parentElement;
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
  }

  setupMobileToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'page-nav-toggle';
    toggleBtn.innerHTML = '📑';
    toggleBtn.setAttribute('aria-label', 'Open page navigation');
    toggleBtn.setAttribute('aria-expanded', 'false');
    
    const overlay = document.createElement('div');
    overlay.className = 'page-nav-overlay';
    
    const mobileNav = this.nav.cloneNode(true);
    mobileNav.classList.add('mobile');
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'page-nav-close';
    closeBtn.innerHTML = '✕';
    closeBtn.setAttribute('aria-label', 'Close navigation');
    mobileNav.prepend(closeBtn);
    
    document.body.appendChild(toggleBtn);
    document.body.appendChild(overlay);
    document.body.appendChild(mobileNav);
    
    const openNav = () => {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    
    const closeNav = () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    
    toggleBtn.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);
    
    mobileNav.querySelectorAll('.page-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeNav();
      });
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeNav();
      }
    });
  }

  setupSmoothScroll() {
    document.querySelectorAll('.page-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('data-section');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetPosition = targetElement.offsetTop - this.offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            targetElement.focus({ preventScroll: true });
          }, 500);
        }
      });
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    
    document.querySelector('.reading-progress-bar')?.remove();
    document.querySelector('.page-nav-toggle')?.remove();
    document.querySelector('.page-nav-overlay')?.remove();
    document.querySelector('.sticky-page-nav.mobile')?.remove();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StickyPageNav;
}
