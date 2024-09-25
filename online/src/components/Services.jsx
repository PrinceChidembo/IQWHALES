// Services.js
import React from "react";
import "../assets/css/Services.css"; // Ensure this CSS file exists
import webDevImage from "../assets/images/web-development.jpg";
import companyRegImage from "../assets/images/company-registration.jpg";
import dataAnalysisImage from "../assets/images/data-analysis.jpg";

const servicesData = [
  {
    title: "Web Development",
    image: webDevImage,
    description: "Building responsive and dynamic websites.",
  },
  {
    title: "Company Registration",
    image: companyRegImage,
    description: "Assisting with business setup and registration.",
  },
  {
    title: "Data Analysis",
    image: dataAnalysisImage,
    description: "Analyzing data for informed decision-making.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">What We Offer</h2>
      <div className="services-button-container">
        <button className="services-button">Explore Our Services</button>
      </div>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
