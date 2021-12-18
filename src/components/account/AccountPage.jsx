import styles from "./AccountPage.module.css";
import Header from "./HeaderAccount";
import Body from "./AccountBody";

const AccountPage = (props) => {
  return (
    <div className={styles.body}>
      <Header user={props.user} logout={props.logout} />
      <Body />
    </div>
  );
};

export default AccountPage;
