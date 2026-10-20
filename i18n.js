import { translations } from "./translations.js";

const SUPPORTED_LANGUAGES = ["mn", "en", "ja"]; // Дэмжих хэлнүүдээ энд оруулна
const DEFAULT_LANGUAGE = "mn";

export function getCurrentLanguage() {
  const saved = localStorage.getItem("language");
  return SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
}

export function setLanguage(language) {
  if (SUPPORTED_LANGUAGES.includes(language)) {
    localStorage.setItem("language", language);
  }
}

export function t(path) {
  const language = getCurrentLanguage();
  const keys = path.split(".");

  let value = translations[language];

  for (const key of keys) {
    value = value?.[key];
  }

  return value ?? path;
}

// 3 болон түүнээс дээш хэлийг дарааллаар нь сэлгэх
export function toggleLanguage() {
  const current = getCurrentLanguage();
  const currentIndex = SUPPORTED_LANGUAGES.indexOf(current);

  // Дараагийн хэлний индексийг олох (төгсгөлд нь очвол буцаад 0 рүү шилжинэ)
  const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
  const nextLanguage = SUPPORTED_LANGUAGES[nextIndex];

  setLanguage(nextLanguage);
  return nextLanguage;
}
