import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <div className={styles.sideBar}>
      <Link to="/LoginPage" className={styles.navLinks}>
        Login
      </Link>
      <Link to="/SignUpPage" className={styles.navLinks}>
        Sign Up
      </Link>
      <Link to="/" className={styles.navLinks}>
        Public Events
      </Link>
      <Link to="/" className={styles.navLinks}>
        About Us
      </Link>
    </div>
  );
};

export default SideBar;
