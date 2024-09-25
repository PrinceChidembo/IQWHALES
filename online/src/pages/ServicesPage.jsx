import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
  return (
    <div className="ServicesPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <div>
          <p>Services</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ServicesPage;
