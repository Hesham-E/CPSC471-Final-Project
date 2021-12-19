import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarAccount.module.css";

const SideBar = (props) => {
  return (
    <div className={styles.sideBar}>
      <Link to="/account" className={styles.navLinks}>
        Account Page
      </Link>
      <Link to="/account/eventList" className={styles.navLinks}>
        Events
      </Link>
      <Link to="/account/tripList" className={styles.navLinks}>
        Trips
      </Link>
      <Link to="/account/invite" className={styles.navLinks}>
        Invite
      </Link>
      <Link to="/" className={styles.navLinks} onClick={props.logout}>
        Log out
      </Link>
    </div>
  );
};

export default SideBar;
