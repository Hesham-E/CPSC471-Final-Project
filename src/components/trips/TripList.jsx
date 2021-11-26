import Header from "../account/HeaderAccount";
import TripCard from "./TripCard";
import Button from "../parts/Button";
import styles from "./TripList.module.css";

const TripList = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Trip List</span>
          <Button />
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
