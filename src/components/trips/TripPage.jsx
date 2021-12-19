import React from "react";
import Header from "../account/HeaderAccount";
import EventCard from "../events/EventCard";
import { Link } from "react-router-dom";
import styles from "./TripPage.module.css";

const TripPage = (props) => {
  return (
    <div>
      <Header user={props.user} />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Trip Events List</span>
          <button className="div1">
            <Link to="/account" className="button1">
              Return
            </Link>
          </button>
        </div>
        {props.events.map((item) => (
          <EventCard event={item} targetEvent={props.targetEvent} />
        ))}
      </div>
    </div>
  );
};

export default TripPage;
