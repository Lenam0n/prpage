import React from "react";
import "./Timeline.css";

const Timeline = ({ data, handleItemClick, color, renderDetails }) => {
  const leftBoundary = 0;
  const rightBoundary = 95;

  return (
    <div className="timeline-container">
      <div className="timeline-line" style={{ backgroundColor: color }}></div>
      <div className="timeline-point-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="timeline-point"
            onClick={() => handleItemClick(index)}
            style={{
              left: `${
                leftBoundary +
                (index / Math.max(data.length - 1, 1)) *
                  (rightBoundary - leftBoundary)
              }%`,
              borderColor: color,
            }}
          >
            <div className="timeline-info">
              <span className="timeline-year">{item.year || item.date}</span>
              <br />
              <span className="timeline-title">{item.title || item.team}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Render detailed view when an item is clicked */}
      {renderDetails && data.map((item, index) => renderDetails(item, index))}
    </div>
  );
};

export default Timeline;
