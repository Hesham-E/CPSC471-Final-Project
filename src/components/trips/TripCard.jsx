import { useNavigate } from "react-router-dom";
import styles from "./TripCard.module.css";

const TripCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.targetTrip(props.trip);
    navigate("/account/trip");
  };

  return (
    <div>
      <div className={styles.container} onClick={handleClick}>
        <div className={styles.div1}>
          <span className="span-1">{"Name: " + props.trip.Trip_Name}</span>
          <span className="span-2">{"Trip_ID: " + props.trip.Trip_ID}</span>
        </div>
        <span className="span-3">
          {"Description: " + props.trip.Trip_Description}
        </span>
        <div className={styles.div1}>
          <span className="span-4">
            {"Start Date: " + props.trip.Start_Date}
          </span>
          <span className="span-5">{"End Date: " + props.trip.End_Date}</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
