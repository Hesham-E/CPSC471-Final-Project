import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./VendorSignUpPage.css";

const VendorSignUpPage = (props) => {
  const [enteredOrgName, setEnteredOrgName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const orgnameChangeHandler = (event) => {
    setEnteredOrgName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitVendorInformation = () => {
    Axios.post("http://localhost:3001/api/vendor", {
      vendorName: enteredOrgName,
      userName: enteredUserName,
      email: enteredEmail,
      password: enteredPassword,
    }).then(() => {});
  };

  const signUp = () => {
    const user = {
      Vendor_Name: enteredOrgName,
      Email: enteredEmail,
      Username: enteredUserName,
      Password: enteredPassword,
      Type: "vendor",
    };
    submitVendorInformation();
    props.newUser(user);
  };

  const resetPage = () => {
    setEnteredOrgName("");
    setEnteredEmail("");
    setEnteredUserName("");
    setEnteredPassword("");
  };

  return (
    <div className="vendor-sign-up">
      <div className="background-rectangle" />
      <p className="page-title">Vendor Sign Up</p>
      <div className="question-bar">
        <label>Name of Organization</label>
        <input
          type="text"
          value={enteredOrgName}
          onChange={orgnameChangeHandler}
        />
      </div>
      <div className="question-bar">
        <label>Email</label>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      </div>
      <div className="question-bar">
        <label>User Name</label>
        <input
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className="question-bar">
        <label>Password</label>
        <input
          type="text"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>

      <button className="button-border" onClick={signUp}>
        <Link to="/account" className="button-text" onClick={resetPage}>
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default VendorSignUpPage;
