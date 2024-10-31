import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import Email from "../../component/EmailEmbed";
import Discord from "../../component/DiscordEmbed";
import SocialMedia from "../../container/SocialmediaContainer";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>{t("Footer.Links")}</h4>
          <ul>
            <li>
              <a href="/impressum">{t("Footer.Impressum")}</a>
            </li>
            <li>
              <a href="/privacy">{t("Footer.PrivacyPolicy")}</a>
            </li>
            <li>
              <a href="/terms">{t("Footer.TermsOfService")}</a>
            </li>
            <li>
              <a href="/contact">{t("Footer.Contact")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>{t("Footer.FollowMe")}</h4>
          <div className="social-icons">
            <SocialMedia />
          </div>
        </div>

        <div className="footer-contact">
          <h4>{t("Footer.ContactMe")}</h4>
          <Email />
          <Discord />
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Lenam0n.{" "}
          {t("Footer.AllRightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
