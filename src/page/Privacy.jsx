import React from "react";
import { useTranslation } from "react-i18next";
import "./Privacy.css";

const Privacy = () => {
  const { t } = useTranslation(); // Verwende den useTranslation-Hook

  return (
    <section className="privacy-section" id="privacy">
      <h2>{t("Privacy.Title")}</h2>
      <div className="privacy-content">
        <p>{t("Privacy.Description")}</p>

        <h3>{t("Privacy.DataCollection.Title")}</h3>
        <p>{t("Privacy.DataCollection.Details")}</p>

        <h3>{t("Privacy.Cookies.Title")}</h3>
        <p>{t("Privacy.Cookies.Details")}</p>

        <h3>{t("Privacy.ThirdParty.Title")}</h3>
        <p>{t("Privacy.ThirdParty.Details")}</p>

        <h3>{t("Privacy.UserRights.Title")}</h3>
        <p>{t("Privacy.UserRights.Details")}</p>

        <h3>{t("Privacy.Contact.Title")}</h3>
        <p>{t("Privacy.Contact.Details")}</p>
      </div>
    </section>
  );
};

export default Privacy;
