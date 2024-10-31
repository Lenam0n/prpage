import React from "react";
import { useTranslation } from "react-i18next";
import "./Terms.css";

const TermsOfService = () => {
  const { t } = useTranslation(); // Verwende den useTranslation-Hook

  return (
    <section className="terms-section" id="terms">
      <h2>{t("Terms.Title")}</h2>
      <div className="terms-content">
        <p>{t("Terms.Description")}</p>

        <h3>{t("Terms.Agreement.Title")}</h3>
        <p>{t("Terms.Agreement.Details")}</p>

        <h3>{t("Terms.UserResponsibilities.Title")}</h3>
        <p>{t("Terms.UserResponsibilities.Details")}</p>

        <h3>{t("Terms.Limitation.Title")}</h3>
        <p>{t("Terms.Limitation.Details")}</p>

        <h3>{t("Terms.Changes.Title")}</h3>
        <p>{t("Terms.Changes.Details")}</p>

        <h3>{t("Terms.Contact.Title")}</h3>
        <p>{t("Terms.Contact.Details")}</p>
      </div>
    </section>
  );
};

export default TermsOfService;
