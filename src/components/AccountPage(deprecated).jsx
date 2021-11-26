import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import styles from "./AccountPage.module.css";
const travelPicture = require("../pictures/travel.png");


function notModifiying({ props }) {
  return (
    <div>
      <Stack direction="horizontal" className={styles.infoStack}>
        <Stack className={styles.accountLabels}>User Name:</Stack>
        <Stack className={styles.accountInfo}>Some User Name</Stack>
      </Stack>

      <Stack direction="horizontal" bsPrefix={styles.infoStack}>
        <Stack className={styles.accountLabels}>Display Name:</Stack>
        <Stack className={styles.accountInfo}>Some Display Name</Stack>
      </Stack>

      <Stack direction="horizontal" bsPrefix={styles.infoStack}>
        <Stack className={styles.accountLabels}>Email:</Stack>
        <Stack className={styles.accountInfo}>Some Email</Stack>
      </Stack>

      <Stack direction="horizontal" bsPrefix={styles.infoStack}>
        <Stack className={styles.accountLabels}>Password:</Stack>
        <Stack className={styles.accountInfo}>Some Password</Stack>
      </Stack>

      <div className={styles.buttonDiv}>
        <button className={styles.buttonBorder}>
          <Link to="/AccountPage/AccountPageEdit" className={styles.buttonText}>
            Edit Account
          </Link>
        </button>
      </div>

    </div>
  );
}

function modifying({ props }) {
  return (
    <div>
      <Stack direction="horizontal" className={styles.infoStack}>
        <Stack className={styles.accountLabels}>User Name:</Stack>
        <div className={styles.formField} />
      </Stack>

      <Stack direction="horizontal" bsPrefix={styles.infoStack}>
        <Stack className={styles.accountLabels}>Display Name:</Stack>
        <div className={styles.formField} />
      </Stack>

      <Stack direction="horizontal" bsPrefix={styles.infoStack}>
        <Stack className={styles.accountLabels}>Email:</Stack>
        <div className={styles.formField} />
      </Stack>

      <Stack direction="horizontal" bsPrefix={styles.infoStack}>
        <Stack className={styles.accountLabels}>Password:</Stack>
        <div className={styles.formField} />
      </Stack>

      <div className={styles.buttonDiv}>
        <button className={styles.buttonBorder}>
          <Link to="/AccountPage" className={styles.buttonText}>
            Save Changes
          </Link>
        </button>
        <button className={styles.buttonBorder}>
          <Link to="/AccountPage" className={styles.buttonText}>
            Cancel
          </Link>
        </button>
      </div>
    </div>
  );
}

class AccountPage extends Component {
  render() {
    return (
      <div className={styles.background}>
        <Stack gap={5}>
          <Routes>
            <Route path="/" element={notModifiying(this.props)} />
            <Route path="/AccountPageEdit" element={modifying(this.props)} />
          </Routes>
        </Stack>
      </div>
    );
  }
}

export default AccountPage;
