import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import "./Discord.css"; // Importiere das CSS-File
import { discord } from "../utils/Data/SocialMediaData"; // Importiere den Discord-Namen

const DiscordComponent = () => {
  const [copied, setCopied] = useState(false);

  const handleDiscordClick = () => {
    navigator.clipboard.writeText(discord.name); // Kopiere den Discord-Namen in die Zwischenablage
    setCopied(true);
    setTimeout(() => {
      setCopied(false); // Setze nach 2 Sekunden die "Copied!"-Meldung zurück
    }, 2000);
  };

  return (
    <div className="discord-container" onClick={handleDiscordClick}>
      <FaDiscord className="discord-icon" size={30} title="Copy Discord name" />
      <span className="discord-text">{discord.name}</span>
      {copied && <span className="copied-text">Copied!</span>}
    </div>
  );
};

export default DiscordComponent;
