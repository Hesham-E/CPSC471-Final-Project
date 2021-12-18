import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const logIn = () => {
    props.logUser(enteredUserName, enteredPassword);
  };

  const resetPage = () => {
    setEnteredUserName("");
    setEnteredPassword("");
  };

  return (
    <div className="log-in">
      <div className="background-rectangle" />
      <div className="question-bar">
        <label>Username</label>
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

      <button className="button-border" onClick={logIn}>
        {props.auth && (
          <Link to="/account" className="button-text">
            Log In
          </Link>
        )}
        {!props.auth && (
          <Link to="/LoginPage" className="button-text" onClick={resetPage}>
            Log In
          </Link>
        )}
      </button>
    </div>
  );
};

export default LoginPage;
