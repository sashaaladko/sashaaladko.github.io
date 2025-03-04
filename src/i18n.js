const supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];

function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');

  if (langParam && supportedLanguages.includes(langParam)) {
    return langParam;
  }

  const systemLanguage = navigator.language.split('-')[0];
  return supportedLanguages.includes(systemLanguage) ? systemLanguage : 'en';
}

async function loadTranslations(lang) {
  try {
    const response = await fetch(`/locales/${lang}.json`);
    return await response.json();
  } catch (error) {
    console.error('ошибка загрузки перевода:', error);
    return {};
  }
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      let translatedText = translations[key];
      if (element.textContent.includes('$')) {
        const price = element.textContent.match(/\$\d+\.\d+/)[0];
        translatedText = translatedText.replace('{{price}}', price);
      }
      element.innerHTML = translatedText;
    }
  });
}

async function initI18n() {
  const lang = getLanguage();
  const translations = await loadTranslations(lang);
  applyTranslations(translations);
  if (lang === 'de') {
    document.querySelector('.links-container').classList.add('german-lang');
  }
}

document.addEventListener('DOMContentLoaded', initI18n);