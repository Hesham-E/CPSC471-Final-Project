import HomeBody from "./HomeBody";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.welcomeMessage}>
      <HomeBody />
    </div>
  );
};

export default HomePage;
