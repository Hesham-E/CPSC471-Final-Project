import Button from "../../parts/Button";
import styles from "./InviteBody.module.css";

const InviteBody = () => {
  return (
    <div className={styles.div3}>
      <span className={styles.text1}>Enter Event or Trip ID</span>
      <div className={styles.inputBox} />
      <Button />
      <Button />
    </div>
  );
};

export default InviteBody;
