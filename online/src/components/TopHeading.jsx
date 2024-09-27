// Header.js
import React, { useEffect, useState } from "react";
import "../assets/css/TopHeading.css"; // Import the CSS for styling

const TopHeading = () => {
  const [heading, setHeading] = useState(
    "Elevate Your Business to Greater Heights with IQwhales Analytics"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHeading((prevHeading) =>
        prevHeading ===
        "Elevate Your Business to Greater Heights with IQwhales Analytics"
          ? "Build Your Website with Us"
          : "Elevate Your Business to Greater Heights with IQwhales Analytics"
      );
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <header className="header">
      <h1 className="fade-in">{heading}</h1>
    </header>
  );
};

export default TopHeading;
