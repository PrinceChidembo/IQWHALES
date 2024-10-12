import React from "react";

const services = [
  {
    title: "Data Analysis Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    color: "#4299E1", // Blue
    items: [
      "Data cleaning to ensure error-free datasets",
      "Actionable insights from machine learning algorithms",
      "Custom analytics solutions for strategic goals",
      "Data visualization for effective communication",
      "Continuous improvement for market adaptability",
    ],
  },
  {
    title: "Company Registration Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "#48BB78", // Green
    items: [
      "Expert guidance through the registration process",
      "Tailored registration packages for your needs",
      "Complete document preparation and submission",
      "Assistance with name reservation",
      "Ongoing compliance support",
      "Personalized consultations",
    ],
  },
  {
    title: "Web Development Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    color: "#9F7AEA", // Purple
    items: [
      "Custom website development",
      "Responsive design for cross-device functionality",
      "Custom web applications for enhanced efficiency",
      "Ongoing maintenance and support",
      "Integration of analytics tools",
      "Collaborative approach throughout development",
    ],
  },
];

const ServicesComponent = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 1rem",
        background: "linear-gradient(135deg, #f6f9fc 0%, #e9f1f9 100%)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "3rem",
          color: "#2D3748",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Our Services
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "1rem",
              padding: "2rem",
              background: "white",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
                color: service.color,
              }}
            >
              <div
                style={{
                  marginRight: "1rem",
                  padding: "0.75rem",
                  background: `${service.color}20`,
                  borderRadius: "0.5rem",
                }}
              >
                {service.icon}
              </div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#2D3748",
                }}
              >
                {service.title}
              </h2>
            </div>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {service.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    paddingLeft: "1.5rem",
                    position: "relative",
                    color: "#4A5568",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.25rem",
                      width: "0.75rem",
                      height: "0.75rem",
                      backgroundColor: service.color,
                      borderRadius: "50%",
                    }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
