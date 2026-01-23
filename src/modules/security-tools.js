import { $, createElement } from '../utils/dom.js';
import { sanitizeHTML, copyToClipboard } from '../utils/helpers.js';

export function initPasswordChecker() {
  const input = $('#passwordInput');
  const strengthResult = $('#strengthResult');
  const strengthBar = $('#strengthBar');
  const feedback = $('#passwordFeedback');
  
  if (!input) return;
  
  input.addEventListener('input', () => {
    const password = input.value;
    
    if (!password) {
      strengthResult.innerHTML = '';
      strengthBar.style.width = '0%';
      feedback.innerHTML = '';
      return;
    }
    
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;
    if (password.length >= 16) strength += 10;
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
    
    strength = Math.min(strength, 100);
    
    const levels = [
      { max: 30, label: '🔴 Very Weak', color: '#FF6B00', tip: '❌ Add uppercase, numbers, and symbols' },
      { max: 50, label: '🟡 Weak', color: '#FFC100', tip: '⚠️ Add more variety (mix case, numbers, symbols)' },
      { max: 70, label: '🟢 Fair', color: '#FFC100', tip: '✓ Good, but could be stronger' },
      { max: 90, label: '🟢 Strong', color: '#00FF88', tip: '✓ Good password strength!' },
      { max: 100, label: '💪 Very Strong', color: '#00E5FF', tip: '✓ Excellent! Very secure password.' }
    ];
    
    const level = levels.find(l => strength < l.max) || levels[levels.length - 1];
    
    strengthResult.innerHTML = `<div style="color: ${level.color}; font-weight: 600;">${level.label}</div>`;
    strengthBar.style.width = strength + '%';
    strengthBar.style.backgroundColor = level.color;
    feedback.innerHTML = level.tip;
  });
}

export async function initHashGenerator() {
  const input = $('#hashInput');
  const output = $('#hashOutput');
  
  if (!input || !output) return;
  
  input.addEventListener('input', async () => {
    const text = input.value;
    if (!text) {
      output.innerHTML = 'Hash will appear here';
      return;
    }
    
    try {
      const buffer = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      output.innerHTML = hashHex;
    } catch (e) {
      output.innerHTML = 'SHA-256 not supported in your browser';
    }
  });
}

export function initBase64Tool() {
  const input = $('#base64Input');
  const output = $('#base64Output');
  const encodeBtn = $('[data-action="encode"]');
  const decodeBtn = $('[data-action="decode"]');
  
  if (!input || !output) return;
  
  encodeBtn?.addEventListener('click', () => {
    const text = input.value;
    if (!text) {
      output.innerHTML = 'Encoded result will appear here';
      return;
    }
    try {
      const encoded = btoa(unescape(encodeURIComponent(text)));
      output.innerHTML = encoded;
    } catch (e) {
      output.innerHTML = 'Error encoding';
    }
  });
  
  decodeBtn?.addEventListener('click', () => {
    const text = input.value;
    if (!text) {
      output.innerHTML = 'Decoded result will appear here';
      return;
    }
    try {
      const decoded = decodeURIComponent(escape(atob(text)));
      output.innerHTML = decoded;
    } catch (e) {
      output.innerHTML = 'Invalid Base64 input';
    }
  });
}

export function initGUIDGenerator() {
  const btn = $('[data-action="generate-guid"]');
  const output = $('#guidOutput');
  
  if (!btn || !output) return;
  
  btn.addEventListener('click', () => {
    const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    output.innerHTML = guid;
  });
}

export function initCopyButtons() {
  document.addEventListener('click', async (e) => {
    const copyBtn = e.target.closest('[data-copy]');
    if (!copyBtn) return;
    
    const targetId = copyBtn.dataset.copy;
    const target = $(targetId);
    
    if (!target) {
      alert('Error: Could not find element to copy');
      return;
    }
    
    const text = target.innerText || target.textContent;
    if (!text?.trim()) {
      alert('No text to copy');
      return;
    }
    
    try {
      await copyToClipboard(text);
      const original = copyBtn.textContent;
      copyBtn.textContent = '✓ Copied!';
      setTimeout(() => copyBtn.textContent = original, 2000);
    } catch (e) {
      alert('Error copying to clipboard');
    }
  });
}

export function initBrowserSecurityScan() {
  const btn = $('[data-action="run-browser-scan"]');
  const resultsDiv = $('#browserScanResults');
  
  if (!btn || !resultsDiv) return;
  
  btn.addEventListener('click', () => {
    const checks = [];
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
    const isFirefox = /Firefox/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    const isEdge = /Edg/.test(userAgent);
    const browserName = isChrome ? 'Chrome' : isFirefox ? 'Firefox' : isSafari ? 'Safari' : isEdge ? 'Edge' : 'Unknown';
    
    checks.push({ name: `Browser: ${browserName}`, status: (isChrome || isFirefox || isSafari || isEdge) ? 'PASS' : 'WARN', score: 10 });
    checks.push({ name: 'HTTPS Support', status: window.location.protocol === 'https:' ? 'PASS' : 'FAIL', score: window.location.protocol === 'https:' ? 10 : 0 });
    checks.push({ name: 'Web Crypto API', status: !!window.crypto?.subtle ? 'PASS' : 'FAIL', score: !!window.crypto?.subtle ? 10 : 0 });
    checks.push({ name: 'Service Worker', status: 'serviceWorker' in navigator ? 'PASS' : 'WARN', score: 10 });
    checks.push({ name: 'LocalStorage', status: (() => { try { localStorage.test = '1'; delete localStorage.test; return 'PASS'; } catch(e) { return 'WARN'; } })(), score: 10 });
    
    const score = checks.reduce((sum, c) => sum + c.score, 0);
    const percentage = Math.min(100, (score / 50) * 100);
    const riskLevel = percentage >= 80 ? 'LOW RISK' : percentage >= 60 ? 'MEDIUM RISK' : 'HIGH RISK';
    const riskColor = percentage >= 80 ? '#00ff1e' : percentage >= 60 ? '#FFB81C' : '#FF6B00';
    
    resultsDiv.innerHTML = `
      <div style="background: rgba(26, 39, 68, 0.8); border: 2px solid ${riskColor}; border-radius: 15px; padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
          <h3 style="color: ${riskColor}; margin: 0;">Browser Security Scan</h3>
          <div style="font-size: 2rem; font-weight: 700; color: ${riskColor};">${Math.round(percentage)}%</div>
        </div>
        <p style="color: ${riskColor}; font-weight: 600; margin-bottom: 1rem;">${riskLevel}</p>
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          ${checks.map(check => `
            <div style="background: rgba(0, 0, 0, 0.3); padding: 0.8rem; border-left: 3px solid ${check.status === 'PASS' ? 'var(--green)' : 'var(--warning)'}; border-radius: 5px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: var(--text-light); font-weight: 600;">${check.name}</span>
                <span style="color: ${check.status === 'PASS' ? 'var(--green)' : 'var(--warning)'}; font-weight: 700;">${check.status}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    resultsDiv.style.display = 'block';
  });
}

export function initSecurityTools() {
  initPasswordChecker();
  initHashGenerator();
  initBase64Tool();
  initGUIDGenerator();
  initCopyButtons();
  initBrowserSecurityScan();
}
