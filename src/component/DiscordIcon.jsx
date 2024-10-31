import React from "react";
import { FaDiscord } from "react-icons/fa";
import { discord } from "../utils/Data/SocialMediaData";

const DiscordIcon = () => {
  return (
    <a
      href={discord.invite}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <FaDiscord size={30} />
    </a>
  );
};

export default DiscordIcon;
