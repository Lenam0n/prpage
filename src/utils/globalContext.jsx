import React, { useState, createContext, useEffect } from "react";
import i18n from "./i18n"; // i18n-Konfiguration

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Dark/Light Mode State (initial auf Light Mode gesetzt)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sprache (Standard auf Deutsch)
  const [language, setLanguage] = useState("de");

  // Funktion zum Umschalten zwischen Light und Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark-mode", newMode);

      // Sicherstellen, dass der richtige Modus gesetzt wird
      if (newMode) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
      }

      return newMode;
    });
  };

  // Funktion zum Umschalten der Sprache
  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  // Beim Initialisieren sicherstellen, dass der Light Mode standardmäßig aktiv ist
  useEffect(() => {
    document.body.classList.add("light-mode"); // Standardmodus ist Light Mode
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isDarkMode, toggleDarkMode, language, changeLanguage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
