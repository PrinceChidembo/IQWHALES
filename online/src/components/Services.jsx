// Services.js
import React from "react";
import Service from "./Service";
import webDevImage from "../assets/web-development.jpg"; // Add your image path
import companyRegImage from "../assets/company-registration.jpg"; // Add your image path
import dataAnalysisImage from "../assets/data-analysis.jpg"; // Add your image path
import "./Services.css"; // Import the CSS for styling

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive and user-friendly websites tailored to your business needs.",
      image: webDevImage,
    },
    {
      title: "Company Registration",
      description:
        "We help you with the entire process of registering your business legally.",
      image: companyRegImage,
    },
    {
      title: "Data Analysis",
      description:
        "Our data analysis services provide insights to help drive your business decisions.We offer data cleaning services We derive actionable insights from your business data through the use of machine learning algorithms",
      image: dataAnalysisImage,
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
