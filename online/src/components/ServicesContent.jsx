import React from "react";
import "../assets/css/ServicesContent.css"; // Make sure to create this CSS file for styling

const ServicesContent = () => {
  const dataAnalysisServices = [
    {
      title: "Data Cleaning",
      description:
        "We ensure that your datasets are free from errors, duplicates, and inconsistencies, enhancing data quality and reliability.",
    },
    {
      title: "Actionable Insights",
      description:
        "Leveraging machine learning algorithms, we analyze data to uncover patterns and trends that provide clear recommendations.",
    },
    {
      title: "Custom Analytics Solutions",
      description:
        "We offer tailored analytics solutions, from predictive modeling to customer segmentation, aligning with your strategic goals.",
    },
    {
      title: "Data Visualization",
      description:
        "Our visualization services transform complex data into intuitive formats, enabling effective communication of findings.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We provide ongoing monitoring and refinement of data strategies to help you adapt to changing market conditions.",
    },
  ];

  const companyRegistrationServices = [
    {
      title: "Expert Guidance",
      description:
        "Our experienced team provides expert guidance to help you navigate the registration process.",
    },
    {
      title: "Tailored Registration Packages",
      description:
        "We offer tailored registration packages to suit your business needs, ensuring you choose the right structure.",
    },
    {
      title: "Document Preparation and Submission",
      description:
        "We handle all necessary paperwork, ensuring compliance with CIPC regulations to minimize delays.",
    },
    {
      title: "Name Reservation",
      description:
        "We assist you in reserving your preferred company name with CIPC, helping establish your brand identity.",
    },
    {
      title: "Compliance and Regulations",
      description:
        "We provide information on ongoing compliance obligations to keep your business on track.",
    },
    {
      title: "Post-Registration Support",
      description:
        "We offer ongoing support, including advice on business licensing and regulatory requirements.",
    },
    {
      title: "Personalized Consultation",
      description:
        "Our personalized consultation service enables us to understand your specific needs and provide tailored advice.",
    },
  ];

  const webDevelopmentServices = [
    {
      title: "Custom Website Development",
      description:
        "We design and develop bespoke websites that reflect your brand identity and meet your audience's expectations.",
    },
    {
      title: "Responsive Design",
      description:
        "Our designs ensure your website looks and functions flawlessly across all devices, prioritizing user experience.",
    },
    {
      title: "Web Applications",
      description:
        "We develop custom web applications tailored to your specific needs, enhancing efficiency and user engagement.",
    },
    {
      title: "Ongoing Maintenance and Support",
      description:
        "We offer comprehensive maintenance services to keep your site secure, up-to-date, and performing optimally.",
    },
    {
      title: "Analytics and Performance Tracking",
      description:
        "We integrate analytics tools to provide insights into user behavior, helping you make informed recommendations.",
    },
    {
      title: "Collaborative Approach",
      description:
        "Our team engages with you throughout the process to ensure your vision is realized at every stage.",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>

      <div className="service-section">
        <h2>Data Analysis Services</h2>
        <ul>
          {dataAnalysisServices.map((service, index) => (
            <li key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2>Company Registration Services</h2>
        <ul>
          {companyRegistrationServices.map((service, index) => (
            <li key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2>Web Development Services</h2>
        <ul>
          {webDevelopmentServices.map((service, index) => (
            <li key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesContent;
