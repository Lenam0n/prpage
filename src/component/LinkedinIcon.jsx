import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { linkedin } from "../utils/Data/SocialMediaData";

const LinkedinIcon = () => {
  return (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <FaLinkedin size={30} />
    </a>
  );
};

export default LinkedinIcon;
