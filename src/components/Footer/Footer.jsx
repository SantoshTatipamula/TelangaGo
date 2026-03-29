import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import LogoBrand from "../LogoBrand/LogoBrand";
import Facebook from "../../assets/facebook.png";
import Camera from "../../assets/camera.png";
import Mention from "../../assets/mention.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-5 pb-3">
      <div className="container">
        {/* TOP */}
        <div className="row">
          {/* Brand */}
          <div className={`${styles.col1} col-12 col-md-6 col-lg-3`}>
            <LogoBrand />
            <p className={`${styles.brandDesc} mt-3`}>
              Elevating the travel experience across Telangana with premium
              services and seamless bookings.
            </p>

            <div className="d-flex gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center border rounded-circle p-2"
              >
                <img src={Facebook} alt="facebook" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center border rounded-circle p-2"
              >
                <img src={Camera} alt="instagram" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center border rounded-circle p-2"
              >
                <img src={Mention} alt="twitter" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className={`${styles.col2} col-6 col-md-6 col-lg-3 `}>
            <h5>Company</h5>
            <ul className={`${styles.company} list-unstyled`}>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/sustainability">Sustainability</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={`${styles.col3} col-6 col-md-6 col-lg-3`}>
            <h5>Service</h5>
            <ul className={`${styles.service} list-unstyled`}>
              <li>
                <Link to="/cars">Car Rentals</Link>
              </li>
              <li>
                <Link to="/hotels">Hotel Bookings</Link>
              </li>
              <li>
                <Link to="/events">Event Tickets</Link>
              </li>
              <li>
                <Link to="/tours">Tour Packages</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className={`${styles.col4} col-6 col-md-6 col-lg-3`}>
            <h5>Support</h5>
            <ul className={`${styles.support} list-unstyled`}>
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/safety">Safety Resource</Link>
              </li>
              <li>
                <Link to="/cancellation">Cancellation</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <hr className="border-light" />

        <div className={`${styles.copyright} row align-items-center`}>
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mb-2 mb-md-0">© 2024 TelanganaGo</p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3 mb-0">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
