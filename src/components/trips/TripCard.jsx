import styles from "./TripCard.module.css";

const TripCard = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.div1}>
          <span className="span-1">Name: Eleifend</span>
          <span className="span-2">Trip_ID: 674132</span>
        </div>
        <span className="span-3">
          Description: Ut posuere ultricies justo vitae porta. Morbi quis felis
          et dolor scelerisque suscipit at aliquet diam.
        </span>
        <div className={styles.div1}>
          <span className="span-4">Start Date: December 23, 2021</span>
          <span className="span-5">End Date: December 28, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
