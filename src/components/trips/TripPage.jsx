import React from "react";
import Header from "../account/HeaderAccount";
import EventCard from "../events/EventCard";
import { Link } from "react-router-dom";
import styles from "./TripPage.module.css";

const TripPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Trip Events List</span>
          <button className="div1">
            <Link to="/account" className="button1">
              Return
            </Link>
          </button>
        </div>
        {/* <EventCard />
        <EventCard />
        <EventCard />
        <EventCard /> */}
      </div>
    </div>
  );
};

export default TripPage;
