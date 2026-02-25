/**
 * WCAG 2.2 AA Accessible Modal Dialog
 * 
 * Features:
 * - Focus trap within modal
 * - ESC key closes modal
 * - Focus returns to trigger element
 * - Proper ARIA attributes
 * - Keyboard navigation
 */

class AccessibleModal {
  constructor(modalId, options = {}) {
    this.modal = document.getElementById(modalId);
    this.triggerElement = null;
    this.focusableElements = [];
    this.firstFocusable = null;
    this.lastFocusable = null;
    
    this.options = {
      closeOnBackdropClick: options.closeOnBackdropClick !== false,
      closeOnEsc: options.closeOnEsc !== false,
      returnFocus: options.returnFocus !== false,
      ...options
    };
    
    if (this.modal) {
      this.init();
    }
  }

  init() {
    // Set up ARIA attributes
    this.setupARIA();
    
    // Create backdrop if it doesn't exist
    this.createBackdrop();
    
    // Attach event listeners
    this.attachEventListeners();
  }

  setupARIA() {
    // Set dialog role
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    
    // Link to title if exists
    const title = this.modal.querySelector('h1, h2, h3, h4, h5, h6');
    if (title) {
      if (!title.id) {
        title.id = `${this.modal.id}-title`;
      }
      this.modal.setAttribute('aria-labelledby', title.id);
    }
    
    // Link to description if exists
    const description = this.modal.querySelector('.modal-description, .modal-body > p:first-child');
    if (description) {
      if (!description.id) {
        description.id = `${this.modal.id}-description`;
      }
      this.modal.setAttribute('aria-describedby', description.id);
    }
    
    // Ensure modal is hidden by default
    this.modal.hidden = true;
    this.modal.setAttribute('aria-hidden', 'true');
  }

  createBackdrop() {
    let backdrop = document.querySelector('.modal-backdrop');
    
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.hidden = true;
      document.body.appendChild(backdrop);
    }
    
    this.backdrop = backdrop;
  }

  attachEventListeners() {
    // Close button
    const closeBtn = this.modal.querySelector('[data-modal-close], .modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
      
      // Ensure close button has proper ARIA label
      if (!closeBtn.getAttribute('aria-label')) {
        closeBtn.setAttribute('aria-label', 'Close dialog');
      }
    }
    
    // ESC key
    if (this.options.closeOnEsc) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !this.modal.hidden) {
          this.close();
        }
      });
    }
    
    // Backdrop click
    if (this.options.closeOnBackdropClick && this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }
    
    // Focus trap
    document.addEventListener('keydown', (e) => {
      if (!this.modal.hidden && e.key === 'Tab') {
        this.handleTabKey(e);
      }
    });
  }

  /**
   * Open modal
   */
  open(triggerElement = null) {
    // Store trigger element for focus return
    this.triggerElement = triggerElement;
    
    // Get all focusable elements in modal
    this.updateFocusableElements();
    
    // Show modal and backdrop
    this.modal.hidden = false;
    this.modal.setAttribute('aria-hidden', 'false');
    
    if (this.backdrop) {
      this.backdrop.hidden = false;
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus first focusable element or modal itself
    setTimeout(() => {
      if (this.firstFocusable) {
        this.firstFocusable.focus();
      } else {
        this.modal.focus();
      }
    }, 100);
    
    // Announce to screen readers
    this.announceOpen();
  }

  /**
   * Close modal
   */
  close() {
    // Hide modal and backdrop
    this.modal.hidden = true;
    this.modal.setAttribute('aria-hidden', 'true');
    
    if (this.backdrop) {
      this.backdrop.hidden = true;
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to trigger element
    if (this.options.returnFocus && this.triggerElement) {
      this.triggerElement.focus();
    }
    
    // Announce to screen readers
    this.announceClosed();
  }

  /**
   * Update list of focusable elements
   */
  updateFocusableElements() {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    this.focusableElements = Array.from(
      this.modal.querySelectorAll(focusableSelectors.join(','))
    );
    
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
  }

  /**
   * Handle Tab key for focus trap
   */
  handleTabKey(e) {
    if (!this.firstFocusable || !this.lastFocusable) {
      return;
    }
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === this.firstFocusable) {
        e.preventDefault();
        this.lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === this.lastFocusable) {
        e.preventDefault();
        this.firstFocusable.focus();
      }
    }
  }

  /**
   * Announce modal opened
   */
  announceOpen() {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = 'Dialog opened. Press Escape to close.';
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 3000);
  }

  /**
   * Announce modal closed
   */
  announceClosed() {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = 'Dialog closed';
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 3000);
  }
}

/**
 * Initialize all modals on page
 */
function initAccessibleModals() {
  const modals = document.querySelectorAll('[role="dialog"], .modal');
  const modalInstances = new Map();
  
  modals.forEach(modal => {
    const instance = new AccessibleModal(modal.id);
    modalInstances.set(modal.id, instance);
  });
  
  // Set up trigger buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-modal-trigger]');
    if (!trigger) return;
    
    const modalId = trigger.getAttribute('data-modal-trigger');
    const modalInstance = modalInstances.get(modalId);
    
    if (modalInstance) {
      e.preventDefault();
      modalInstance.open(trigger);
    }
  });
  
  return modalInstances;
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.modalInstances = initAccessibleModals();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AccessibleModal, initAccessibleModals };
}
