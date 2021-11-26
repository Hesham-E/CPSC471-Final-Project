import EventCard from "../events/EventCard";
import TripCard from "../trips/TripCard";
import styles from "./AccountBody.module.css";

const AccountBody = () => {
  return (
    <div className={styles.body}>
      <p className={styles.text1}>Past Actions</p>
      <EventCard />
      <EventCard />
      <TripCard />
      <TripCard />
    </div>
  );
};

export default AccountBody;
