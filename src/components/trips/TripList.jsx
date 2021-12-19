import React from "react";
import Header from "../account/HeaderAccount";
import TripCard from "./TripCard";
import { Link } from "react-router-dom";
import styles from "./TripList.module.css";

const TripList = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Trip List</span>
          <button className="button-border">
            <Link to="/account" className="button-text">
              Add Trip
            </Link>
          </button>
        </div>
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
      </div>
    </div>
  );
};

export default TripList;
