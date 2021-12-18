import SideBar from "./SideBarAccount";
import styles from "./HeaderAccount.module.css";
import travelPicture from "../../pictures/travel.png";

const HeaderAccount = (props) => {
  return (
    <div className={styles.head}>
      <div
        className={styles.overlay}
        style={{ backgroundImage: `url(${travelPicture})` }}
      >
        <div className={styles.header}>
          <SideBar />
          <span className={styles.title}>{props.user}</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderAccount;
