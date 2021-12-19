import React from "react";
import { Link } from "react-router-dom";
import styles from "./InviteBody.module.css";

const InviteBody = () => {
  return (
    <div className={styles.div3}>
      <span className={styles.text1}>Enter Event or Trip ID</span>
      <div className={styles.inputBox} />
      <button className="div1">
        <Link to="/account" className="button1">
          Register
        </Link>
      </button>
    </div>
  );
};

export default InviteBody;
