import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import VisionMission from "../components/VisionMission";
import TopHeading from "../components/TopHeading";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <TopHeading />
        <Services />
        <VisionMission />
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
