import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaHome } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../utils/globalContext";
import i18n from "../utils/i18n";
import "./Header.css";
import flagMap from "../utils/lang_configs/flags.json";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode, language, changeLanguage } =
    useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [esportDropdownOpen, setEsportDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const availableLanguages = Object.keys(i18n.options.resources).map(
    (lang) => ({
      code: lang,
      label: lang.toUpperCase(),
      flag: flagMap[lang] || "🌐",
    })
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (code) => {
    changeLanguage(code);
    setDropdownOpen(false);
  };

  const handleNavigate = (path, hash) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        element.classList.add("highlighted");
        setTimeout(() => element.classList.remove("highlighted"), 2000);
      }
    }, 100);
    toggleMenu();
  };

  const handleEsportHover = () => setEsportDropdownOpen(true);
  const handleEsportLeave = () => setEsportDropdownOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => handleNavigate("/", "Main")}>
          <FaHome size={30} />
        </Link>
      </div>
      <nav className={isOpen ? "nav open" : "nav"}>
        <ul>
          <li>
            <Link to="/" onClick={() => handleNavigate("/", "Main")}>
              {t("Navbar.Home")}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavigate("/", "about")}>
              {t("Navbar.AboutMe")}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleNavigate("/", "projects")}>
              {t("Navbar.Projects")}
            </Link>
          </li>
          <li>
            <Link to="/contact">{t("Navbar.Contact")}</Link>
          </li>
          <li>
            <Link to="/timeline">{t("Navbar.Timeline")}</Link>
          </li>

          <li
            className="esport-dropdown"
            onMouseEnter={handleEsportHover}
            onMouseLeave={handleEsportLeave}
          >
            <Link to="/esport">
              <span>{t("Navbar.Esport.Title")}</span>
            </Link>
            {esportDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/esport"
                    onClick={() => handleNavigate("/esport", "valorant")}
                  >
                    {t("Navbar.Esport.Valorant")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/esport"
                    onClick={() => handleNavigate("/esport", "counterstrike")}
                  >
                    {t("Navbar.Esport.CounterStrike")}
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="controls">
        <div className="language-dropdown">
          <button onClick={toggleDropdown}>
            {flagMap[language]} {language.toUpperCase()}
          </button>
          {dropdownOpen && (
            <ul className="language-list">
              {availableLanguages.map((lang) => (
                <li key={lang.code} onClick={() => selectLanguage(lang.code)}>
                  {lang.flag} {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
