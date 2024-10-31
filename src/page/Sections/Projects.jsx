import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";
import projectsData from "../../utils/Data/projectsData.json";
import languageIcons from "../../utils/Data/languageIcons";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const translatedProjects = t("Projects", { returnObjects: true });

    const combinedProjects = projectsData.map((project) => {
      const translatedProject = translatedProjects.find(
        (item) => item.id === project.id
      );
      return { ...project, ...translatedProject };
    });

    setProjects(combinedProjects);
  }, [t]);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    setImageIndex(0);
  };

  const handleNextImage = () => {
    const images = projects[selectedProjectIndex].images;
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    const images = projects[selectedProjectIndex].images;
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleCloseDetailView = () => {
    setSelectedProjectIndex(null);
    setImageIndex(0);
  };

  return (
    <section className="projects-section" id="projects">
      <h2>{t("Navbar.Projects")}</h2>

      {selectedProjectIndex !== null ? (
        <div className="projects-detail">
          <button className="close-button" onClick={handleCloseDetailView}>
            X
          </button>

          <div className="carousel">
            <div className="detail-content">
              <div className="detail-image">
                <img
                  src={projects[selectedProjectIndex].images[imageIndex]}
                  alt={`Image ${imageIndex + 1} of ${
                    projects[selectedProjectIndex].Title
                  }`}
                />
                <button className="prev-button" onClick={handlePrevImage}>
                  <FaArrowLeft />
                </button>
                <button className="next-button" onClick={handleNextImage}>
                  <FaArrowRight />
                </button>
              </div>
              <div className="detail-info">
                <h3>{projects[selectedProjectIndex].Title}</h3>
                <p>{projects[selectedProjectIndex].Description}</p>

                <div className="project-link-detailed">
                  <a
                    href={projects[selectedProjectIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Visit Project")}
                  </a>
                </div>

                <div className="language-section">
                  <h4>{projects[selectedProjectIndex].Subtitle}</h4>
                  <div className="language-icons">
                    {projects[selectedProjectIndex].languages?.map(
                      (language, idx) => (
                        <div
                          key={idx}
                          className="language-icon-item"
                          style={{
                            color: languageIcons[language]?.hoverColor,
                          }}
                          title={t(`Languages.${language}.Title`)}
                        >
                          {languageIcons[language]?.icon || language}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="projects-item"
              onClick={() => handleProjectClick(index)}
            >
              <img src={project.logo} alt={project.Title} />
              <h4>{project.Title}</h4>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                {t("View Project")}
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
