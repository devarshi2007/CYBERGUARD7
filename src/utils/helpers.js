export function debounce(fn, delay = 300) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle(fn, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K+';
  return num.toString();
}

export function formatCurrency(num) {
  if (num >= 1000000000) return '$' + (num / 1000000000).toFixed(1) + 'B+';
  if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M+';
  return '$' + (num / 1000).toFixed(0) + 'K+';
}

export function truncate(text, maxLength = 30) {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

export function sanitizeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function parseQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

export function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve();
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
