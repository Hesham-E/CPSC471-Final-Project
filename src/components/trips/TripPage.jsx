import Header from "../account/HeaderAccount";
import EventCard from "../events/EventCard";
import Button from "../parts/Button";
import styles from "./TripPage.module.css";

const TripPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Trip Events List</span>
          <Button />
        </div>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default TripPage;
