import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ko from "./i18n/ko.json";
import en from "./i18n/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ko",
    resources: {
      ko: { translation: ko },
      en: { translation: en }
    },
    interpolation: { escapeValue: false }
  });

export default i18n;