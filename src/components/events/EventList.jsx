import Header from "../account/HeaderAccount";
import EventCard from "./EventCard";
import Button from "../parts/Button";
import styles from "./EventList.module.css";

const EventList = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Event List</span>
          <Button />
        </div>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default EventList;
