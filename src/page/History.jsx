import React, { useState, useEffect } from "react";
import eventsData from "../utils/Data/eventsData.json";
import Timeline from "../component/Timeline";
import EventDetails from "../component/EventDetails";
import { useTranslation } from "react-i18next";
import { useApi } from "../utils/apiProvider";
import Swal from "sweetalert2"; // Import SweetAlert
import axios from "axios"; // Import Axios
import "./History.css";

const HistoryTimeline = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [combinedEventsData, setCombinedEventsData] = useState([]);
  const { t } = useTranslation();
  const apiBaseUrl = useApi();

  useEffect(() => {
    // Retrieve localized events from i18n and merge with eventsData
    const localizedEvents = t("history.events", { returnObjects: true });
    const mergedEvents = eventsData.map((event) => {
      const localizedEvent = localizedEvents.find((e) => e.id === event.id);
      return {
        ...event,
        ...localizedEvent,
      };
    });
    setCombinedEventsData(mergedEvents);
  }, [t]);

  const handleEventClick = (index) => {
    setSelectedEventIndex(selectedEventIndex === index ? null : index);
  };

  const closeEventDetails = () => {
    setSelectedEventIndex(null);
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/downloads/cv.pdf`, {
        responseType: "blob", // Blob format for downloading the file
      });

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "cv.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "System Error",
        text: "The file could not be downloaded. Please try again later.",
      });
    }
  };

  return (
    <section className="history-timeline-section">
      <div className="history-timeline-header">
        <h2>{t("history.title")}</h2>
        <p>{t("history.subtitle")}</p>
        <button onClick={handleDownload} className="download-cv-button">
          {t("history.download_cv")}
        </button>
      </div>
      <Timeline
        data={combinedEventsData}
        handleItemClick={handleEventClick}
        color="#007bff"
      />
      {selectedEventIndex !== null && (
        <EventDetails
          event={combinedEventsData[selectedEventIndex]}
          onClose={closeEventDetails}
          languages={combinedEventsData[selectedEventIndex].languages}
        />
      )}
    </section>
  );
};

export default HistoryTimeline;
