import Header from "../account/HeaderAccount";
import Event from "./EventDesc";
import Button from "../parts/Button";
import styles from "./EventPage.module.css";

const EventPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.alignDiv}>
          <span className={styles.text1}>Event</span>
          <Button />
        </div>
        <Event />
      </div>
    </div>
  );
};

export default EventPage;
