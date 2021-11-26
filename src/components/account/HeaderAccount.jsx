import SideBar from "./SideBarAccount";
import styles from "./HeaderAccount.module.css";
import travelPicture from "../../pictures/travel.png";

const HeaderAccount = () => {
  return (
    <div className={styles.head}>
      <div
        className={styles.overlay}
        style={{ backgroundImage: `url(${travelPicture})` }}
      >
        <div className={styles.header}>
          <SideBar />
          <span className={styles.title}>ETIENNEL</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderAccount;
