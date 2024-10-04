import React from "react";
import "../assets/css/ServicesContent.css"; // Ensure to create this CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";

const ServicesContent = () => {
  const servicesData = {
    dataAnalysis: `Our data analysis services include data cleaning to ensure datasets are free from errors, actionable insights from machine learning algorithms, custom analytics solutions tailored to your strategic goals, data visualization to effectively communicate findings, and continuous improvement to adapt to changing market conditions.`,

    companyRegistration: `We provide expert guidance through the registration process, tailored registration packages to meet your business needs, complete document preparation and submission for compliance with CIPC regulations, assistance with name reservation to establish your brand, ongoing compliance support, and personalized consultations to understand your specific needs.`,

    webDevelopment: `Our web development services feature custom website development that reflects your brand, responsive design for flawless functionality across devices, custom web applications to enhance efficiency, ongoing maintenance and support to keep your site secure, integration of analytics tools for performance tracking, and a collaborative approach to ensure your vision is realized at every stage.`,
  };

  return (
    <div className="container services-container">
      <h1 className="text-center mb-4">Our Services</h1>

      <div className="row">
        <div className="col-md-4">
          <h2>Data Analysis Services</h2>
          <p>{servicesData.dataAnalysis}</p>
        </div>
        <div className="col-md-4">
          <h2>Company Registration Services</h2>
          <p>{servicesData.companyRegistration}</p>
        </div>
        <div className="col-md-4">
          <h2>Web Development Services</h2>
          <p>{servicesData.webDevelopment}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
