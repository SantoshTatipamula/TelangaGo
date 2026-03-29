import React from 'react'
import { Navbar } from "react-bootstrap";
import styles from "./LogoBrand.module.css";
import Logo from "../../assets/Logo.png";

const LogoBrand = () => {
  return (
     <div className="flex-grow-1 d-flex align-items-center gap-2">
          <div className={`${styles.gradientLogo}`}>
            <img src={Logo} alt="Logo" />
          </div>
          <Navbar.Brand className={`${styles.gradientText}`}>
            TelanganaGo
          </Navbar.Brand>
        </div>
  )
}

export default LogoBrand
