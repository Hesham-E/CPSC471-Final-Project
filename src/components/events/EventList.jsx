import Header from "../account/HeaderAccount";
import Event from "./EventCard";
import styles from "./EventList.module.css";

const EventList = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <span className={styles.text1}>Event List</span>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
};

export default EventList;
