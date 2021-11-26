import styles from "./EventCard.module.css";

const EventCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <span className="span-1">Name: Tempor</span>
        <span className="span-2">Event_ID: 324169</span>
      </div>
      <span className="span-3">
        Description: Ut posuere ultricies justo vitae porta. Morbi quis felis et
        dolor scelerisque suscipit at aliquet diam.
      </span>
      <div className={styles.div1}>
        <span className="span-4">Time: 7:00-11:00AM</span>
        <span className="span-5">Date: October 23, 2022</span>
      </div>
      <span className="span-6">
        Location: 288 Collegiate Blvd NW, Calgary, AB T2N 1N4
      </span>
    </div>
  );
};

export default EventCard;
