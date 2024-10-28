import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>About Us</h4>
          <ul>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/ServicesPage">Data Analysis</Link>
            </li>
            <li>
              <Link to="/consulting">Company Registration</Link>
            </li>
            <li>
              <Link to="/solutions">Web Development</Link>
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
            aria-label="Facebook"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/IQwhales"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/iqwhales"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
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
