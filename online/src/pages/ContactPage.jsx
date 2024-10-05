import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import EmailForm from "../components/Emailform";

const ContactPage = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        {" "}
        {/* Adjust this based on your AppBar height */}
        <div>
          <Form />
          <EmailForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactPage;
