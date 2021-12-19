import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../account/HeaderAccount";
import "./NewEvent.css";

const NewEvent = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredInvite, setEnteredInvite] = useState("");
  const [enteredType, setEnteredType] = useState("");

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const DescriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const TimeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const LocationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const InviteChangeHandler = (event) => {
    setEnteredInvite(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const resetPage = () => {
    setEnteredName("");
    setEnteredDescription("");
    setEnteredDate("");
    setEnteredTime("");
    setEnteredLocation("");
    setEnteredInvite("");
    setEnteredType("");
  };

  const addEventHandler = () => {
    const event = {
      Event_Description: enteredDescription,
      Date: enteredDate,
      Event_Name: enteredName,
      Duration: enteredTime,
      Account_Creator: props.user.ID,
      Event_Location: [enteredLocation],
      Type: enteredType,
      User_ID_invited: [enteredInvite],
    };
    props.addEvent(event);
  };

  return (
    <div>
      <Header />
      <div className="user-sign-up">
        <div className="background-rectangle" />
        <div className="question-bar">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={NameChangeHandler} />
        </div>
        <div className="question-bar">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={DescriptionChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Date</label>
          <input type="text" value={enteredDate} onChange={DateChangeHandler} />
        </div>
        <div className="question-bar">
          <label>Time</label>
          <input type="text" value={enteredTime} onChange={TimeChangeHandler} />
        </div>
        <div className="question-bar">
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={LocationChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Send Invitation</label>
          <input
            type="text"
            value={enteredInvite}
            onChange={InviteChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Private or Public?</label>
          <input type="text" value={enteredType} onChange={typeChangeHandler} />
        </div>

        <button className="button-border" onClick={addEventHandler}>
          <Link
            to="/account/eventList"
            className="button-text"
            onClick={resetPage}
          >
            Add Event
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NewEvent;
