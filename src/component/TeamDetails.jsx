import React from "react";
import { useTranslation } from "react-i18next";
import agentData from "../utils/Data/agentsData.json"; // Importing the local agent data
import "./TeamDetails.css";

const TeamDetails = ({ game, team, onClose, isOpen, isDarkMode }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`team-details ${isOpen ? "open" : ""} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <button className="close-details" onClick={onClose}>
        X
      </button>
      <h3>
        {team.team} - {team.year}
      </h3>
      <p>
        <strong>{t("Role")}: </strong>
        {team.role}
      </p>

      {/* Date Range Section */}
      {team.dateRange && (
        <div className="date-range">
          <p>
            <strong>{t("Date Range")}: </strong>
            {team.dateRange.start} - {team.dateRange.end}
          </p>
        </div>
      )}

      {/* Team Details */}
      <p>{t(`teamDetails.${team.id}.details`)}</p>

      {/* Agents Section for Valorant */}
      {game === "Valorant" && team.agents && team.agents.length > 0 && (
        <div className="agents-section">
          <h4>{t("Agents")}</h4>
          <div className="agents-list">
            {team.agents.map((agent, index) => (
              <div key={index} className="agent-item">
                <img
                  src={agentData[agent]} // Fallback to a default image
                  alt={agent}
                  className="agent-icon"
                />
                <span>{agent}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievements Section */}
      <h4>{t("Achievements")}</h4>
      <ul>
        {team.achievements?.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetails;
