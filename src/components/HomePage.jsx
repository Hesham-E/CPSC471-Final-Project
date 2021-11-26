import HomeBody from "./HomeBody";
import Header from "./Header";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.welcomeMessage}>
      <Header />
      <HomeBody />
    </div>
  );
};

export default HomePage;
