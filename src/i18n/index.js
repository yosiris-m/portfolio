
import { initReactI18next } from 'react-i18next';

import translationEN from '../i18n/en.json';
import translationES from '../i18n/es.json';
import i18next from 'i18next';


const userLanguage = navigator.language || navigator.userLanguage;
const defaultLanguage = userLanguage.startsWith('es') ? 'es' : 'en';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

const i18n = i18next
  .use(initReactI18next) 
  .init({
    resources,
    lng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
