import React from "react";
import SideBar from "./SideBarAccount";
import styles from "./HeaderAccount.module.css";
import travelPicture from "../../pictures/travel.png";

const HeaderAccount = (props) => {
  return (
    <div className={styles.head} on>
      <SideBar logout={props.logout} />
      <div
        className={styles.overlay}
        style={{ backgroundImage: `url(${travelPicture})` }}
      >
        <span className={styles.title}>{props.user.Display_Name}</span>
      </div>
    </div>
  );
};

export default HeaderAccount;
