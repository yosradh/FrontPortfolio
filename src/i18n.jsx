import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './Locales/en.json';
import frTranslation from './Locales/fr.json';

// Configuration de i18n
const localeLng = localStorage.getItem('Lng') || 'en';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: localeLng, 
    lng: localeLng,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
  });

export default i18n;
