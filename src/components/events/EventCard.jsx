import { useNavigate } from "react-router-dom";
import styles from "./EventCard.module.css";

const EventCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.targetEvent(props.event);
    navigate("/account/event");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.div1}>
        <span className="span-1">{"Name: " + props.event.Event_Name}</span>
        <span className="span-2">{"Event_ID: " + props.event.Event_ID}</span>
      </div>
      <span className="span-3">
        {"Description: " + props.event.Event_Description}
      </span>
      <div className={styles.div1}>
        <span className="span-4">{"Time: " + props.event.Duration}</span>
        <span className="span-5">{"Date: " + props.event.Date}</span>
      </div>
      <span className="span-6">
        {"Location: " + props.event.Event_Location}
      </span>
    </div>
  );
};

export default EventCard;
