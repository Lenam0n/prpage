import React from "react";
import { FaTwitter } from "react-icons/fa";
import { twitter } from "../utils/Data/SocialMediaData";

const TwitterIcon = () => {
  return (
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <FaTwitter size={30} />
    </a>
  );
};

export default TwitterIcon;
