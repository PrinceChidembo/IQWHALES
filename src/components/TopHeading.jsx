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

  const renderHeading = () => {
    if (isMobile) {
      return <h3 className="mobile-heading">{heading}</h3>;
    }
    return <h1 className="fade-in">{heading}</h1>;
  };

  return <header className="header">{renderHeading()}</header>;
};

export default TopHeading;
