# 🧭 Sticky Navigation Integration Guide

## Quick Start (2 Minutes)

### 1. Add CSS & JS Files

```html
<head>
    <!-- Your existing CSS -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Add sticky navigation CSS -->
    <link rel="stylesheet" href="sticky-nav.css">
</head>
<body>
    <!-- Your content -->
    
    <!-- Add sticky navigation JS before closing body tag -->
    <script src="sticky-nav.js"></script>
    <script>
        // Initialize navigation
        const nav = new StickyPageNav({ autoGenerate: true });
    </script>
</body>
```

---

## Integration Methods

### Method 1: Automatic Detection (Easiest)

**Best for:** Pages where you already have section IDs

```html
<!-- Your sections MUST have IDs -->
<section id="introduction">
    <h2>Introduction</h2>
    <p>Content...</p>
</section>

<section id="security-basics">
    <h2>Security Basics</h2>
    <p>Content...</p>
</section>

<!-- JavaScript (add to end of body) -->
<script src="sticky-nav.js"></script>
<script>
    new StickyPageNav({
        autoGenerate: true,  // Automatically finds all elements with IDs
        offset: 80           // Adjust for your fixed header height
    });
</script>
```

---

### Method 2: Manual Configuration (More Control)

**Best for:** Custom section names or selective sections

```html
<script src="sticky-nav.js"></script>
<script>
    new StickyPageNav({
        sections: [
            { id: 'intro', text: '🚀 Getting Started' },
            { id: 'fundamentals', text: '📚 Fundamentals' },
            { id: 'advanced', text: '⚡ Advanced Topics' },
            { id: 'tools', text: '🛠️ Tools & Utilities' },
            { id: 'best-practices', text: '✅ Best Practices' },
            { id: 'case-studies', text: '📊 Case Studies' },
            { id: 'resources', text: '📖 Resources' },
            { id: 'faq', text: '❓ FAQ' }
        ],
        offset: 80
    });
</script>
```

---

### Method 3: Using Existing Nav Structure

**Best for:** When you want to manually design the nav HTML

```html
<!-- Manual HTML structure -->
<nav class="sticky-page-nav" aria-label="Page navigation">
    <div class="page-nav-header">
        <span class="page-nav-icon">📑</span>
        <h2 class="page-nav-title">On This Page</h2>
    </div>
    <ul class="page-nav-list">
        <!-- Links will be populated by JS -->
    </ul>
</nav>

<div class="page-content">
    <!-- Your page content -->
</div>

<script>
    new StickyPageNav({
        navContainer: '.sticky-page-nav',  // Use existing nav
        autoGenerate: true
    });
</script>
```

---

## Integration into Existing Pages

### For `tools.html`, `frameworks.html`, `learning.html`

**Step 1:** Add IDs to your main sections

```html
<!-- BEFORE -->
<section class="section">
    <h2>Password Security Tools</h2>
    <p>Content...</p>
</section>

<!-- AFTER -->
<section id="password-tools" class="section">
    <h2>Password Security Tools</h2>
    <p>Content...</p>
</section>
```

**Step 2:** Add the files and initialization

```html
<head>
    <link rel="stylesheet" href="sticky-nav.css">
</head>
<body>
    <!-- Your existing content -->
    
    <script src="sticky-nav.js"></script>
    <script>
        new StickyPageNav({ autoGenerate: true, offset: 80 });
    </script>
</body>
```

---

## Configuration Options

```javascript
new StickyPageNav({
    // Section configuration
    sections: [],              // Manual section definitions (leave empty for auto)
    autoGenerate: true,        // Auto-detect sections with IDs
    
    // Navigation container
    navContainer: '.sticky-page-nav',  // Existing nav selector
    
    // Scroll offset (adjust for fixed headers)
    offset: 80,                // Pixels to offset when scrolling to section
});
```

---

## Customization Examples

### Change Icon & Title

```javascript
// After initialization, update the HTML
document.querySelector('.page-nav-icon').textContent = '🛡️';
document.querySelector('.page-nav-title').textContent = 'Security Topics';
```

### Custom Colors (CSS)

```css
/* Override in your style.css */
:root {
    --nav-primary: #ff0844;      /* Change from cyan to red */
    --nav-background: rgba(26, 39, 68, 0.98);
}

.sticky-page-nav {
    border-color: var(--nav-primary) !important;
}

.page-nav-link.active {
    border-left-color: var(--nav-primary) !important;
    color: var(--nav-primary) !important;
}
```

### Adjust Mobile Breakpoint

```css
/* Make it mobile earlier */
@media (max-width: 1200px) {
    .sticky-page-nav:not(.mobile) {
        display: none;
    }
    
    .page-nav-toggle {
        display: flex;
    }
}
```

---

## Real-World Example: `frameworks.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Security Frameworks - CyberGuard</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="sticky-nav.css">
</head>
<body>
    <!-- Your existing header/nav -->
    
    <div class="container">
        <section id="nist" class="section">
            <h2>NIST Framework</h2>
            <p>Content about NIST...</p>
        </section>

        <section id="iso27001" class="section">
            <h2>ISO 27001</h2>
            <p>Content about ISO...</p>
        </section>

        <section id="cis-controls" class="section">
            <h2>CIS Controls</h2>
            <p>Content about CIS...</p>
        </section>

        <section id="zero-trust" class="section">
            <h2>Zero Trust</h2>
            <p>Content about Zero Trust...</p>
        </section>

        <section id="owasp" class="section">
            <h2>OWASP Top 10</h2>
            <p>Content about OWASP...</p>
        </section>

        <section id="gdpr" class="section">
            <h2>GDPR Compliance</h2>
            <p>Content about GDPR...</p>
        </section>

        <section id="pci-dss" class="section">
            <h2>PCI DSS</h2>
            <p>Content about PCI DSS...</p>
        </section>

        <section id="hipaa" class="section">
            <h2>HIPAA Security</h2>
            <p>Content about HIPAA...</p>
        </section>
    </div>

    <!-- Your existing footer -->

    <script src="sticky-nav.js"></script>
    <script>
        new StickyPageNav({
            autoGenerate: true,
            offset: 80  // Adjust based on your header height
        });
    </script>
</body>
</html>
```

---

## Features Included

✅ **Reading Progress Bar** - Top of page, animated gradient  
✅ **Active Section Highlighting** - Uses IntersectionObserver  
✅ **Smooth Scrolling** - Native smooth scroll behavior  
✅ **Mobile Responsive** - Floating button + drawer on mobile  
✅ **Keyboard Accessible** - Tab navigation, ESC to close  
✅ **Screen Reader Support** - ARIA labels and live regions  
✅ **Reduced Motion** - Respects `prefers-reduced-motion`  
✅ **Print Friendly** - Hides navigation when printing  
✅ **Cyber-Themed Design** - Neon accents, glows, gradients  

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Required APIs:**
- IntersectionObserver
- CSS Grid
- CSS Custom Properties
- Smooth Scroll

---

## Troubleshooting

### Navigation doesn't appear
- Check that sections have `id` attributes
- Verify CSS file is loaded
- Check browser console for errors

### Active link not highlighting
- Ensure sections have enough content (min 400px height recommended)
- Adjust IntersectionObserver `rootMargin` in JS

### Mobile drawer not working
- Check that JavaScript is loaded
- Verify no JavaScript errors in console

### Scroll offset is wrong
- Adjust the `offset` parameter to match your header height

---

## Performance Notes

- Uses `requestAnimationFrame` for smooth progress bar updates
- IntersectionObserver is more efficient than scroll listeners
- Mobile nav is cloned (not moved) to prevent layout shifts
- CSS uses hardware-accelerated properties (transform, opacity)

---

## Accessibility Features

- Keyboard navigation (Tab, Enter, ESC)
- ARIA landmarks and labels
- Focus management in mobile drawer
- Screen reader announcements
- High contrast mode compatible
- Reduced motion support

---

## Next Steps

1. Copy `sticky-nav.css` and `sticky-nav.js` to your project
2. Add links to your HTML files
3. Add IDs to your sections
4. Initialize with `new StickyPageNav()`
5. Test on mobile and desktop
6. Customize colors/styles as needed

For live demo, open `sticky-nav-example.html` in your browser!
