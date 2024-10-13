import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../assets/css/TopHeading.css";

const TopHeading = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heading, setHeading] = useState(
    "Elevate Your Business to Greater Heights with IQwhales Analytics"
  );

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setHeading((prevHeading) =>
          prevHeading ===
          "Elevate Your Business to Greater Heights with IQwhales Analytics"
            ? "Build Your Website with Us"
            : "Elevate Your Business to Greater Heights with IQwhales Analytics"
        );
      }, 10000); // Change text every 10 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isMobile]);

  return (
    <header className="header">
      <h1 className={`fade-in ${isMobile ? "mobile-heading" : ""}`}>
        {heading}
      </h1>
    </header>
  );
};

export default TopHeading;
