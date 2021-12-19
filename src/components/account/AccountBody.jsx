import EventCard from "../events/EventCard";
import TripCard from "../trips/TripCard";
import styles from "./AccountBody.module.css";

const AccountBody = (props) => {
  return (
    <div className={styles.body}>
      <p className={styles.text1}>Past Actions</p>
      {props.events.map((item) => (
        <EventCard event={item} />
      ))}
      <TripCard />
      <TripCard />
    </div>
  );
};

export default AccountBody;
