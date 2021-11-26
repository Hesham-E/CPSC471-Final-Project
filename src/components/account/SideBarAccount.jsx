import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarAccount.module.css";

const SideBar = (props) => {
  return (
    <div className={styles.sideBar}>
      <Link to="/" className={styles.navLinks}>
        Account Settings
      </Link>
      <Link to="/" className={styles.navLinks}>
        Events
      </Link>
      <Link to="/" className={styles.navLinks}>
        Trips
      </Link>
      <Link to="/" className={styles.navLinks}>
        Invite
      </Link>
      <Link to="/" className={styles.navLinks}>
        Log out
      </Link>
    </div>
  );
};

export default SideBar;
