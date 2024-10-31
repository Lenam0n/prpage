import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./lang_configs/en.json"; // Import der englischen JSON-Datei
import deTranslation from "./lang_configs/de.json"; // Import der deutschen JSON-Datei

// Sprachressourcen
const resources = {
  en: {
    translation: enTranslation, // Nutze die importierte englische JSON-Datei
  },
  de: {
    translation: deTranslation, // Nutze die importierte deutsche JSON-Datei
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", // Standardsprache (kann dynamisch geändert werden)
  interpolation: {
    escapeValue: false, // React kümmert sich bereits um das Escaping
  },
});

export default i18n;
