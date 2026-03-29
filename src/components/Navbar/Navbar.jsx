import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import moon from "../../assets/Moon.png";
import LogoBrand from "../LogoBrand/LogoBrand";

const Navbaar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container-fluid">

        {/* LEFT */}
        <div className="d-flex align-items-center">
          <LogoBrand />
        </div>

        {/* TOGGLE (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE AREA */}
        <div className="collapse navbar-collapse" id="navbarContent">

          {/* CENTER (desktop only) */}
          <ul className="navbar-nav mx-auto text-center text-lg-start">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.NavLink}`}>Explore</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.NavLink}`}>Stays</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.NavLink}`}>Transport</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${styles.NavLink}`}>Events</Link>
            </li>
          </ul>

          {/* RIGHT */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <button className="btn bg-transparent border-0">
              <img src={moon} width="24" alt="moon" />
            </button>

            <button className={styles.button}>Log in</button>
            <button className={styles.SignUp}>Sign up</button>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbaar;