import React from "react";
import Header from "../account/HeaderAccount";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import styles from "./EventList.module.css";

const EventList = (props) => {
  return (
    <div>
      <Header title="Event List" user={props.user} />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Event List</span>
          <button className={styles.div1}>
            <Link to="/account/newEvent" className={styles.button1}>
              Add Event
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

export default EventList;
