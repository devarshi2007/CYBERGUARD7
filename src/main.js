import { onReady } from './utils/dom.js';

async function initApp() {
  const { initUIComponents } = await import('./modules/ui-components.js');
  initUIComponents();
  
  const { initSearch } = await import('./modules/search.js');
  initSearch();
  
  if (document.body.classList.contains('tools-page')) {
    const { initSecurityTools } = await import('./modules/security-tools.js');
    initSecurityTools();
  }
  
  if (document.querySelector('#assistantForm')) {
    const { initCyberAssistant } = await import(/* webpackChunkName: "assistant" */ './modules/assistant.js');
    initCyberAssistant?.();
  }
  
  if (document.querySelector('#cyberNewsList')) {
    const { initCyberNews } = await import(/* webpackChunkName: "news" */ './modules/news.js');
    initCyberNews?.();
  }
  
  if (document.querySelector('.attack-chip')) {
    const { initAttackMapper } = await import(/* webpackChunkName: "attack-mapper" */ './modules/attack-mapper.js');
    initAttackMapper?.();
  }
  
  if (document.querySelector('#leadMagnetModal')) {
    const { initLeadMagnetForm } = await import(/* webpackChunkName: "lead-forms" */ './modules/lead-forms.js');
    initLeadMagnetForm?.();
  }
  
  if (document.querySelector('#riskCalculatorModal')) {
    const { initRiskCalculatorQuiz } = await import(/* webpackChunkName: "risk-calculator" */ './modules/risk-calculator.js');
    initRiskCalculatorQuiz?.();
  }
}

onReady(initApp);
