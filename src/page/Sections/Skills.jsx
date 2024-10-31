import React from "react";
import languageIcons from "../../utils/Data/languageIcons"; // Adjust path as needed
import "./Skills.css";

const SkillSlider = ({ selectedIcons }) => {
  const icons = selectedIcons
    .map((key) => ({
      icon: languageIcons[key]?.icon,
      hoverColor: languageIcons[key]?.hoverColor,
    }))
    .filter((iconObj) => iconObj.icon);

  return (
    <section className="skills-section">
      <div className="skills-carousel">
        <div className="skills-track">
          {icons.map((iconObj, index) => (
            <div
              key={index}
              className="skill-item"
              style={{
                "--hover-color": iconObj.hoverColor || "var(--hover-color)",
              }}
            >
              {iconObj.icon}
            </div>
          ))}
          {/* Duplicate for smooth scrolling */}
          {icons.map((iconObj, index) => (
            <div
              key={`duplicate-${index}`}
              className="skill-item"
              style={{
                "--hover-color": iconObj.hoverColor || "var(--hover-color)",
              }}
            >
              {iconObj.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <SkillSlider
      selectedIcons={[
        "javascript",
        "react",
        "python",
        "node",
        "typescript",
        "html",
        "css",
        "java",
        "csharp",
        "mysql",
        "mongodb",
        "git",
      ]}
    />
  );
};

export default Skills;
