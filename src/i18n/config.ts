import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslation from "./en.json";
import spanishTranslation from "./es.json";

export const resources = {
  en: {
    translation: englishTranslation,
  },
  es: {
    translation: spanishTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
