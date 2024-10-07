// Footer.js
import React from "react";
import "../assets/css/Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="/about">Our Story</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/analytics">Data Analysis</a>
            </li>
            <li>
              <a href="/consulting">Company Registration</a>
            </li>
            <li>
              <a href="/solutions">Web Development</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: spectraminds49@gmail.com</p>
          <p>Phone: +2771 008 1353</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a
            href="https://www.facebook.com/IQwhales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/IQwhales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/iqwhales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} IQwhales Analytics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
