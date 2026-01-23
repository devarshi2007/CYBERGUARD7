export function $(selector, context = document) {
  return context.querySelector(selector);
}

export function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

export function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  
  if (options.className) el.className = options.className;
  if (options.id) el.id = options.id;
  if (options.text) el.textContent = options.text;
  if (options.html) el.innerHTML = options.html;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }
  if (options.styles) Object.assign(el.style, options.styles);
  
  return el;
}

export function delegateEvent(selector, eventType, handler, context = document) {
  context.addEventListener(eventType, (e) => {
    const target = e.target.closest(selector);
    if (target) handler.call(target, e);
  });
}

export function onReady(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

export function toggleClass(el, className, force) {
  return el?.classList.toggle(className, force);
}

export function addClass(el, ...classes) {
  el?.classList.add(...classes);
}

export function removeClass(el, ...classes) {
  el?.classList.remove(...classes);
}

export function hasClass(el, className) {
  return el?.classList.contains(className);
}
