import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ContactUs } from "../components/ContactUs";
import { BackgroundLines } from "../components/ui/Bacground-lines";

const ContactPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <div>
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <ContactUs />
          </BackgroundLines>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactPage;
