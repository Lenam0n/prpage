import React from "react";
import { FaGithub } from "react-icons/fa";
import { github } from "../utils/Data/SocialMediaData"; // Verwende github statt discord

const GithubIcon = () => {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <FaGithub size={30} />
    </a>
  );
};

export default GithubIcon;
