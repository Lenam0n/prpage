import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Main.css";

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <section className="Main-section" id="Main">
      <h1 className="Main-title">{t("main.title")}</h1>
      <p className="Main-text">{t("main.tagline")}</p>
      <Link to="/contact" className="cta-button">
        {t("main.getInTouch")}
      </Link>
    </section>
  );
};

export default MainSection;
