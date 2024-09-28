import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesContent from "../components/ServicesContent";

const ServicesPage = () => {
  return (
    <div className="ServicesPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <ServicesContent />
        <Footer />
      </div>
    </div>
  );
};
export default ServicesPage;
