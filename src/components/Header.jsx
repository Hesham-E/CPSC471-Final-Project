import SideBar from "./SideBar";
import styles from "./Header.module.css";
const travelPicture = require("../pictures/travelPicture.png");

const NavigationBar = () => {
  return (
    <div>
      <div className={styles.header}>
        <SideBar></SideBar>
        <span className={styles.title}>Name goes here</span>
      </div>
      <img
        className={styles.overlay}
        // style={{ background: `url(${travelPicture})` }}
        alt="travelPicture"
        src={travelPicture}
      />
    </div>
  );
};

export default NavigationBar;
