import EventCard from "../events/EventCard";
import TripCard from "../trips/TripCard";
import styles from "./AccountBody.module.css";

const AccountBody = (props) => {
  return (
    <div className={styles.body}>
      <p className={styles.text1}>Past Actions</p>
      <div>
        {props.events.map((item) => (
          <EventCard event={item} />
        ))}
      </div>
      {/* <div>
        {props.trips.map((item) => (
          <TripCard trip={item} />
        ))}
      </div> */}
    </div>
  );
};

export default AccountBody;
