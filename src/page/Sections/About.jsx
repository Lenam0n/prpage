import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import SocialMedia from "../../container/SocialmediaContainer";

const About = () => {
  const { t } = useTranslation(); // Verwende den useTranslation-Hook

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">{t("About.Title")}</h2>
      <p className="about-text">{t("About.Description")}</p>

      <div className="social-media">
        <SocialMedia />
      </div>
    </section>
  );
};

export default About;
