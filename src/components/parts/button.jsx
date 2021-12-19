import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.div1}>
      <Link to="/account/newEvent" className={styles.button1}>
        {props.name}
      </Link>
    </button>
  );
};

export default Button;
