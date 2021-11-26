import styles from "./AccountPage.module.css";
import Header from "./HeaderAccount";
import Body from "./AccountBody";

const AccountPage = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Body />
    </div>
  );
};

export default AccountPage;
