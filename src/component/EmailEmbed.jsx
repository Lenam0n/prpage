import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Email.css"; // Importiere das CSS-File
import { email } from "../utils/Data/SocialMediaData";

const Email = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`; // Öffne den E-Mail-Client
  };

  return (
    <div className="email-container">
      <FaEnvelope
        className="email-icon"
        size={30}
        onClick={handleEmailClick}
        title="Send an email"
      />
      <span className="email-text">{email}</span>
    </div>
  );
};

export default Email;
