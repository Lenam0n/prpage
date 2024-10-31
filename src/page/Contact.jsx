import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import axios from "axios";
import "./Contact.css";
import SocialMedia from "../container/SocialmediaContainer";
import { useApi } from "../utils/apiProvider";

const Contact = ({ isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const apiBaseUrl = useApi();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${apiBaseUrl}/send-email`, {
        ...formData,
        lang: i18n.language,
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: t("Contact.SuccessTitle"),
          text: t("Contact.SuccessMessage"),
          confirmButtonText: t("Contact.OkButton"),
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: t("Contact.ErrorTitle"),
          text: t("Contact.ErrorMessage"),
          confirmButtonText: t("Contact.OkButton"),
        });
      });
  };

  return (
    <section
      className={`contact-section ${isDarkMode ? "dark-mode" : ""}`}
      id="contact"
    >
      <h2 className="contact-title">{t("Contact.Title")}</h2>
      <p className="contact-reachout">{t("Contact.ReachOut")}</p>
      <div className="social-medias">
        <SocialMedia />
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder={t("Contact.NamePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder={t("Contact.EmailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact-textarea"
          name="message"
          placeholder={t("Contact.MessagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="contact-button" type="submit">
          {t("Contact.SendButton")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
