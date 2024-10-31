import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiCounterstrike, SiValorant } from "react-icons/si";
import "./EsportTimeline.css";
import teamData from "../utils/Data/esportData.json";
import TeamDetails from "../component/TeamDetails";
import EsportLinks from "../container/esportLinks";
import Timeline from "../component/Timeline";

const EsportTimeline = () => {
  const { t } = useTranslation();
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleTeamClick = (index, game) => {
    setSelectedTeamIndex(index);
    setSelectedGame(game);
  };

  const handleCloseDetails = () => {
    setSelectedTeamIndex(null);
    setSelectedGame(null);
  };

  // Get the selected team's data based on selectedTeamIndex and selectedGame
  const selectedTeam =
    selectedTeamIndex !== null && selectedGame
      ? teamData[selectedGame].Teams[selectedTeamIndex]
      : null;

  return (
    <section className="timeline-section">
      {/* Valorant Timeline */}
      <div className="game-container valorant-timeline" id="valorant">
        <div className="game-header">
          <h2>
            <SiValorant size={30} style={{ marginRight: "10px" }} />
            Valorant
          </h2>
          <EsportLinks
            platforms={["vlr", "rib", "spike", "liquipedia"]}
            game={"valorant"}
          />
        </div>
        <Timeline
          data={teamData["Valorant"].Teams}
          handleItemClick={(index) => handleTeamClick(index, "Valorant")}
          color="var(--highlight-color)"
        />
      </div>

      {/* CounterStrike Timeline */}
      <div className="game-container counterstrike-timeline" id="counterstrike">
        <div className="game-header">
          <h2>
            <SiCounterstrike size={30} style={{ marginRight: "10px" }} />
            CounterStrike
          </h2>
          <EsportLinks platforms={["hltv"]} game={"counterstrike"} />
        </div>
        <Timeline
          data={teamData["CounterStrike"].Teams}
          handleItemClick={(index) => handleTeamClick(index, "CounterStrike")}
          color="var(--highlight-color)"
        />
      </div>

      {/* TeamDetails Component */}
      {selectedTeam && (
        <TeamDetails
          game={selectedGame}
          team={selectedTeam}
          onClose={handleCloseDetails}
          isOpen={selectedTeamIndex !== null}
        />
      )}
    </section>
  );
};

export default EsportTimeline;
