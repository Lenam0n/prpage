import React from "react";
import { useTranslation } from "react-i18next";
import languageIcons from "../utils/Data/languageIcons";
import "./EventDetails.css";

const EventDetails = ({ event, onClose }) => {
  const { t } = useTranslation();

  if (!event) return null;

  // Retrieve event details based on id from i18n data
  const localizedEvent = t("history.events", { returnObjects: true }).find(
    (e) => e.id === event.id
  );

  const localizedTitle = localizedEvent?.title || event.info;
  const localizedDetails = localizedEvent?.details || event.details;
  const localizedDateRange = localizedEvent?.date || event.date;

  return (
    <div className="event-details-overlay" onClick={onClose}>
      <div className="event-details-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-details" onClick={onClose}>
          &times;
        </button>
        <h3>{localizedTitle}</h3>
        <p>{localizedDetails}</p>

        {/* Languages Section */}
        {event.languages && event.languages.length > 0 && (
          <div className="languages-section">
            <h4>{t("Languages")}</h4>
            <div className="languages-list">
              {event.languages.map((language, index) => {
                const languageInfo = languageIcons[language.toLowerCase()];
                const IconComponent = languageInfo?.icon;
                const hoverColor = languageInfo?.hoverColor || "#fafafa";

                return (
                  <div
                    key={index}
                    className="language-item"
                    style={{ "--hover-color": hoverColor }}
                  >
                    {IconComponent ? (
                      React.cloneElement(IconComponent, {
                        className: "language-icon",
                      })
                    ) : (
                      <span className="language-icon-placeholder">
                        {language}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {localizedDateRange && (
          <p>
            <strong>{t("Date Range")}:</strong> {localizedDateRange}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
