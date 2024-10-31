import React from "react";
import { useTranslation } from "react-i18next";
import "./Impressum.css";

const Impressum = () => {
  const { t } = useTranslation(); // Verwende den useTranslation-Hook

  return (
    <section className="impressum-section" id="impressum">
      <h2>{t("Impressum.Title")}</h2>
      <div className="impressum-content">
        <p>{t("Impressum.Description")}</p>

        <h3>{t("Impressum.Contact.Title")}</h3>
        <p>{t("Impressum.Contact.Details")}</p>

        <h3>{t("Impressum.Legal.Title")}</h3>
        <p>{t("Impressum.Legal.Details")}</p>

        <h3>{t("Impressum.Responsibility.Title")}</h3>
        <p>{t("Impressum.Responsibility.Details")}</p>
      </div>
    </section>
  );
};

export default Impressum;
