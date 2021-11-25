import SideBar from "./SideBar";
import styles from "./Header.module.css";
import travelPicture from "../pictures/travelPicture.png";

const Header = () => {
  return (
    <div className={styles.head}>
      <div
        className={styles.overlay}
        style={{ backgroundImage: `url(${travelPicture})` }}
      >
        <div className={styles.header}>
          <SideBar />
          <span className={styles.title}>Name goes here</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
