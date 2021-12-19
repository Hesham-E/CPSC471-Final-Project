import React from "react";
import Header from "../account/HeaderAccount";
import TripCard from "./TripCard";
import { Link } from "react-router-dom";
import styles from "./TripList.module.css";

const TripList = (props) => {
  return (
    <div>
      <Header user={props.user} />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Trip List</span>
          <button className={styles.div1}>
            <Link to="/account/newTrip" className={styles.button1}>
              Add Trip
            </Link>
          </button>
        </div>
        {props.trips.map((item) => (
          <TripCard trip={item} targetTrip={props.targetTrip} />
        ))}
      </div>
    </div>
  );
};

export default TripList;
