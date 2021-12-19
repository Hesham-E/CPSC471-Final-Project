import React from "react";
import Header from "../account/HeaderAccount";
import Event from "./EventDesc";
import { Link } from "react-router-dom";
import styles from "./EventPage.module.css";

const EventPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Event</span>
          <button className="button-border">
            <Link to="/account" className="button-text">
              Return
            </Link>
          </button>
        </div>
        <Event />
      </div>
    </div>
  );
};

export default EventPage;
