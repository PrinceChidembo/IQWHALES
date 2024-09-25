// Service.js
import React from "react";
import "../assets/css/Service.css"; // Import the CSS for styling

const Service = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;
