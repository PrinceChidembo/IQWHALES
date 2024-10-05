import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ContactUs } from "../components/ContactUs";

const ContactPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <div>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactPage;
