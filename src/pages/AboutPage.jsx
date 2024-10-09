import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IQWhales from "../components/IQWhales";
import AboutIQWhales from "../components/AboutIQWhales";
import TeamMembers from "../components/ui/TeamMembers";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <IQWhales />
        <AboutIQWhales />
        <TeamMembers />
        <Footer />
      </div>
    </div>
  );
};
export default AboutPage;
