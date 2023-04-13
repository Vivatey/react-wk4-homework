import React from "react";
import "./Overview.css";

export default function Overview() {
  let overviewData = {
    city: "London",
    date: "Wednesday 22:30",
    description: "Cloudy"
  };
  return (
    <div className="Overview">
      <h1>{overviewData.city}</h1>
      <ul>
        <li>Last updated: {overviewData.date}</li>
        <li>{overviewData.description}</li>
      </ul>
    </div>
  );
}
