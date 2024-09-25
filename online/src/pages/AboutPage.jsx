import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VisionMission from "../components/VisionMission";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <VisionMission />
        <Footer />
      </div>
    </div>
  );
};
export default AboutPage;
