import { $, $$ } from '../utils/dom.js';
import { sanitizeHTML, parseQueryParams } from '../utils/helpers.js';
import { cyberKnowledgeBase } from '../data/knowledge-base.js';

function findKnowledgeEntry(query) {
  const lowerQuery = query.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(cyberKnowledgeBase)) {
    if (key.includes(lowerQuery) || 
        value.q.toLowerCase().includes(lowerQuery) ||
        value.a.toLowerCase().includes(lowerQuery)) {
      return value;
    }
  }
  return null;
}

function buildTipsList(tips) {
  if (!Array.isArray(tips) || !tips.length) return '';
  return '<ul class="tips-list">' + tips.map(tip => `<li>${sanitizeHTML(tip)}</li>`).join('') + '</ul>';
}

export function initSearch() {
  const searchInput = $('#cyberSearchInput');
  const searchForm = $('#cyberSearchForm');
  
  if (!searchInput) return;
  
  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
  });
  
  if (document.body.classList.contains('search-page')) {
    const params = parseQueryParams();
    const query = params.q || '';
    searchInput.value = query;
    renderSearchResults(query);
  }
}

function renderSearchResults(query) {
  const resultsContainer = $('#searchResults');
  const noResultContainer = $('#noResults');
  const introText = $('#searchIntro');
  const queryLabel = $('#searchQuery');
  const questionEl = $('#resultQuestion');
  const answerEl = $('#resultAnswer');
  const tipsEl = $('#resultTips');
  
  if (!resultsContainer) return;
  
  const trimmedQuery = query.trim();
  
  if (queryLabel) queryLabel.textContent = trimmedQuery || '...';
  
  if (!trimmedQuery) {
    resultsContainer.style.display = 'none';
    if (noResultContainer) noResultContainer.style.display = 'none';
    if (introText) introText.style.display = 'block';
    return;
  }
  
  if (introText) introText.style.display = 'none';
  
  const match = findKnowledgeEntry(trimmedQuery);
  
  if (match) {
    resultsContainer.style.display = 'block';
    if (noResultContainer) noResultContainer.style.display = 'none';
    if (questionEl) questionEl.textContent = match.q;
    if (answerEl) answerEl.textContent = match.a;
    if (tipsEl) tipsEl.innerHTML = buildTipsList(match.tips);
  } else {
    resultsContainer.style.display = 'none';
    if (noResultContainer) {
      noResultContainer.style.display = 'block';
      noResultContainer.textContent = `No results found for "${trimmedQuery}". Try another cybersecurity keyword.`;
    }
  }
}
