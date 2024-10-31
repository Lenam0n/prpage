import React from "react";
import "./esportLinks.css";
import vlr_icon from "../assets/vlr.svg";
import liquipedia_icon from "../assets/liquipedia.svg";
import hltv_icon from "../assets/hltv.svg";
import rib_icon from "../assets/ribgg.svg";
import spike_icon from "../assets/spikegg.svg";
import {
  vlr,
  ribgg,
  hltv,
  spikegg,
  liquipedia,
} from "../utils/Data/SocialMediaData";

const EsportLinks = ({ platforms, game }) => {
  const socialMediaComponents = {
    vlr: (
      <a href={vlr} target="_blank" rel="noopener noreferrer">
        <img src={vlr_icon} alt="VLR Logo" className="social-icon" />
      </a>
    ),
    liquipedia: (
      <a href={liquipedia} target="_blank" rel="noopener noreferrer">
        <img
          src={liquipedia_icon}
          alt="Liquipedia Logo"
          className="social-icon"
        />
      </a>
    ),
    hltv: (
      <a href={hltv} target="_blank" rel="noopener noreferrer">
        <img src={hltv_icon} alt="HLTV Logo" className="social-icon" />
      </a>
    ),
    rib: (
      <a href={ribgg} target="_blank" rel="noopener noreferrer">
        <img src={rib_icon} alt="Rib Logo" className="social-icon" />
      </a>
    ),
    spike: (
      <a href={spikegg} target="_blank" rel="noopener noreferrer">
        <img src={spike_icon} alt="Spike Logo" className="social-icon" />
      </a>
    ),
  };

  return (
    <div className={`social-media-links ${game}`}>
      {platforms.map((platform) => (
        <div key={platform} className="social-media-item">
          {socialMediaComponents[platform.toLowerCase()] || null}
        </div>
      ))}
    </div>
  );
};

export default EsportLinks;
