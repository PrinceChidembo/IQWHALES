import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <div>
          <p>contact</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactPage;
