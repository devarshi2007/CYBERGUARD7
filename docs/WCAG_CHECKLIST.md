# ✅ WCAG 2.2 Level AA Compliance Checklist

**Quick reference for solo developers**

---

## 🔴 CRITICAL (Fix First - Week 1)

### Keyboard Accessibility
- [ ] All functionality available via keyboard
- [ ] No keyboard traps (can Tab away from all elements)
- [ ] Skip links on every page (`<a href="#main-content">Skip to main content</a>`)
- [ ] Visible focus indicators on ALL interactive elements
- [ ] Logical tab order (matches visual order)

### Color Contrast
- [ ] Normal text: 4.5:1 minimum
- [ ] Large text (18pt+ or 14pt+ bold): 3:1 minimum
- [ ] UI components and graphics: 3:1 minimum
- [ ] Test with WebAIM Contrast Checker
- [ ] Don't rely on color alone to convey information

### Forms
- [ ] Every `<input>` has a `<label>` element
- [ ] `aria-required="true"` on required fields
- [ ] `aria-invalid="true/false"` for validation
- [ ] Error messages linked with `aria-describedby`
- [ ] Clear, helpful error messages

### Images & Media
- [ ] All images have `alt` attributes
- [ ] Decorative images: `alt=""`
- [ ] Complex images: detailed description
- [ ] No flashing content (3+ times per second)

---

## 🟡 HIGH PRIORITY (Week 2)

### Headings & Structure
- [ ] Single `<h1>` per page
- [ ] No skipped heading levels (h2 → h4 ❌)
- [ ] Headings describe content
- [ ] Use HeadingsMap to verify hierarchy

### ARIA Landmarks
- [ ] `<header>` or `role="banner"`
- [ ] `<nav>` or `role="navigation"` with `aria-label`
- [ ] `<main>` or `role="main"` with `id="main-content"`
- [ ] `<aside>` or `role="complementary"`
- [ ] `<footer>` or `role="contentinfo"`

### Links
- [ ] Descriptive link text (no "click here")
- [ ] External links indicated
- [ ] Links opening new tabs announced
```html
<a href="..." target="_blank">
  External Site <span class="sr-only">(opens in new tab)</span>
</a>
```

### Dynamic Content
- [ ] ARIA live regions for updates (`aria-live="polite"`)
- [ ] Loading states announced (`aria-busy="true"`)
- [ ] Error notifications announced (`role="alert"`)

---

## 🟢 MEDIUM PRIORITY (Week 3)

### Tables
- [ ] `<caption>` describes table purpose
- [ ] `<th scope="col">` for column headers
- [ ] `<th scope="row">` for row headers
- [ ] Complex tables use `headers` attribute

### Modals/Dialogs
- [ ] `role="dialog"` or `role="alertdialog"`
- [ ] `aria-modal="true"`
- [ ] `aria-labelledby` pointing to title
- [ ] Focus trapped inside modal
- [ ] ESC key closes modal
- [ ] Focus returns to trigger element

### Accordions
- [ ] `<button>` as accordion trigger
- [ ] `aria-expanded="true/false"`
- [ ] `aria-controls` linking to panel
- [ ] Keyboard: Enter/Space to toggle

### Tabs
- [ ] `role="tablist"` on container
- [ ] `role="tab"` on buttons
- [ ] `role="tabpanel"` on content
- [ ] `aria-selected="true"` on active tab
- [ ] Arrow keys navigate tabs

---

## 🔵 LOWER PRIORITY (Week 4)

### Language
- [ ] `<html lang="en">` on every page
- [ ] `lang` attribute on foreign language phrases
- [ ] Clear, simple language (Grade 9 reading level)
- [ ] Abbreviations expanded on first use

### Page Titles
- [ ] Unique, descriptive `<title>` per page
- [ ] Format: "Page Name - Site Name"

### Search & Autocomplete
- [ ] `role="combobox"` on input
- [ ] `aria-autocomplete="list"`
- [ ] `aria-expanded` for dropdown visibility
- [ ] Arrow keys navigate suggestions

### Touch Targets
- [ ] Minimum 44x44px for all touch targets
- [ ] Adequate spacing between targets
- [ ] Test on actual mobile devices

### Motion & Animation
- [ ] Respect `prefers-reduced-motion`
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

---

## 🧪 Testing Checklist

### Automated Testing (Daily)
- [ ] **Lighthouse** accessibility audit (Chrome DevTools)
  - Target: 92+ / 100
- [ ] **axe DevTools** browser extension
  - Target: 0 critical/serious issues
- [ ] **WAVE** browser extension
  - Target: 0 errors
- [ ] **W3C HTML Validator**
  - Target: 0 errors

### Manual Testing (Weekly)

#### Keyboard Navigation
- [ ] Unplug mouse
- [ ] Tab through entire page
- [ ] All interactive elements reachable
- [ ] Visible focus on every element
- [ ] No keyboard traps
- [ ] Logical tab order

#### Screen Reader Testing
- [ ] **NVDA** (Windows, free)
- [ ] **JAWS** (Windows, trial)
- [ ] **VoiceOver** (macOS, built-in)
- [ ] Navigate homepage
- [ ] Use forms
- [ ] Use chatbot
- [ ] Browse navigation

#### Mobile Testing
- [ ] **TalkBack** (Android)
- [ ] **VoiceOver** (iOS)
- [ ] Touch target sizes
- [ ] Pinch zoom works
- [ ] Orientation changes

#### High Contrast Mode
- [ ] Windows High Contrast Mode
- [ ] All content visible
- [ ] Icons recognizable
- [ ] Focus indicators visible

---

## 📊 Success Criteria Priority List

### Must Fix (Level A)
1. **1.1.1** Non-text Content - Alt text
2. **1.3.1** Info and Relationships - Semantic HTML
3. **2.1.1** Keyboard - All functionality
4. **2.1.2** No Keyboard Trap
5. **2.4.1** Bypass Blocks - Skip links
6. **3.3.2** Labels or Instructions - Form labels
7. **4.1.2** Name, Role, Value - ARIA

### High Priority (Level AA)
8. **1.4.3** Contrast (Minimum) - 4.5:1
9. **2.4.6** Headings and Labels
10. **2.4.7** Focus Visible
11. **3.3.3** Error Suggestion
12. **3.3.4** Error Prevention
13. **2.5.3** Label in Name
14. **1.4.11** Non-text Contrast - 3:1
15. **2.5.5** Target Size - 44x44px

---

## 🛠️ Essential Tools

### Browser Extensions
1. **axe DevTools** (Most accurate)
   - Chrome/Firefox/Edge
   - Free tier available
   
2. **WAVE** (Visual feedback)
   - Chrome/Firefox/Edge
   - Free
   
3. **HeadingsMap** (Structure)
   - Chrome/Firefox
   - Free

4. **Accessibility Insights**
   - Chrome/Edge
   - Free, guided tests

### Desktop Tools
5. **Lighthouse** (Built-in Chrome)
   - Performance + Accessibility
   
6. **NVDA** (Screen reader)
   - Windows, Free
   
7. **VoiceOver** (Screen reader)
   - macOS, Built-in

### Online Tools
8. **WebAIM Contrast Checker**
   - https://webaim.org/resources/contrastchecker/
   
9. **W3C HTML Validator**
   - https://validator.w3.org/
   
10. **Pa11y** (CI/CD integration)
    - Command line tool

---

## 📈 Score Targets

### Before Improvements
```
Lighthouse:     70-75 / 100
axe Issues:     40-50 (critical/serious)
WAVE Errors:    15-25
Manual Issues:  Keyboard traps, poor focus
```

### After Improvements (Target)
```
Lighthouse:     92-98 / 100 ✅
axe Issues:     <5 (minor only) ✅
WAVE Errors:    0 ✅
Manual Issues:  None ✅
```

---

## 💡 Quick Wins (Do in 3 Hours)

**Immediate 15-20 point boost:**

1. **Add skip links** (15 min)
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

2. **Fix color contrast** (30 min)
   - Use WebAIM Contrast Checker
   - Update CSS variables
   
3. **Add ARIA labels to icon buttons** (30 min)
```html
<button aria-label="Open menu">☰</button>
```

4. **Ensure all images have alt text** (1 hour)
   - Find images: `img:not([alt])`
   - Add meaningful descriptions
   
5. **Add visible focus styles** (30 min)
```css
*:focus-visible {
  outline: 3px solid #00E5FF;
  outline-offset: 3px;
}
```

---

## 📝 Common Mistakes to Avoid

❌ **Don't:**
- Use placeholder as label
- Skip heading levels (h2 → h4)
- Use `div` or `span` as buttons
- Rely only on automated tools
- Hide focus indicators
- Use `tabindex` > 0
- Duplicate IDs
- Use `title` attribute alone

✅ **Do:**
- Use semantic HTML first
- Test with keyboard only
- Test with screen readers
- Maintain logical heading hierarchy
- Keep it simple
- Ask for user feedback

---

## 🎯 Daily Routine

**5 minutes before commit:**
- [ ] Run Lighthouse audit
- [ ] Run axe DevTools
- [ ] Tab through changed pages
- [ ] Verify focus indicators

**Weekly:**
- [ ] Full manual keyboard test
- [ ] Screen reader spot check
- [ ] Review automated tool results
- [ ] Update checklist progress

**Monthly:**
- [ ] Comprehensive accessibility audit
- [ ] User testing with assistive tech users
- [ ] Update accessibility statement
- [ ] Team training session

---

## 📞 Resources

### Documentation
- **WCAG 2.2 Quick Reference**: https://www.w3.org/WAI/WCAG22/quickref/
- **MDN Accessibility**: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **WebAIM**: https://webaim.org/

### Communities
- **A11y Project**: https://www.a11yproject.com/
- **A11y Slack**: https://web-a11y.slack.com/
- **Twitter #a11y**: Latest tips and tricks

### Testing
- **Inclusive Components**: https://inclusive-components.design/
- **ARIA Authoring Practices**: https://www.w3.org/WAI/ARIA/apg/

---

**Remember**: Accessibility is a journey, not a destination. Keep testing, keep improving!

**Target**: WCAG 2.2 Level AA (92-98/100) in 30 days ✅
