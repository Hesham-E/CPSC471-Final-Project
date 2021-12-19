import React, { useState } from "react";
import Header from "../account/HeaderAccount";
import { Link } from "react-router-dom";
import "./NewTrip.css";

const NewTrip = (props) => {
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");
  const [enteredStartLocation, setEnteredStartLocation] = useState("");
  const [enteredDestination, setEnteredDestination] = useState("");
  const [enteredVehicle, setEnteredVehicle] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEvent, setEnteredEvent] = useState("");
  const [enteredInvite, setEnteredInvite] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const StartDateChangeHandler = (trip) => {
    setEnteredStartDate(trip.target.value);
  };

  const EndDateChangeHandler = (trip) => {
    setEnteredEndDate(trip.target.value);
  };

  const DurationChangeHandler = (trip) => {
    setEnteredDuration(trip.target.value);
  };

  const StartLocationChangeHandler = (trip) => {
    setEnteredStartLocation(trip.target.value);
  };

  const DestinationChangeHandler = (trip) => {
    setEnteredDestination(trip.target.value);
  };

  const VehicleChangeHandler = (trip) => {
    setEnteredVehicle(trip.target.value);
  };

  const NameChangeHandler = (trip) => {
    setEnteredName(trip.target.value);
  };

  const EventChangeHandler = (trip) => {
    setEnteredEvent(trip.target.value);
  };

  const InviteChangeHandler = (trip) => {
    setEnteredInvite(trip.target.value);
  };

  const DescriptionChangeHandler = (trip) => {
    setEnteredDescription(trip.target.value);
  };

  const resetPage = () => {
    setEnteredStartDate("");
    setEnteredEndDate("");
    setEnteredDuration("");
    setEnteredStartLocation("");
    setEnteredDestination("");
    setEnteredVehicle("");
    setEnteredName("");
    setEnteredEvent("");
    setEnteredInvite("");
    setEnteredDescription("");
  };

  const addTripHandler = () => {
    const trip = {
      Trip_ID: "2",
      Account_ID: "1",
      Trip_Name: enteredName,
      Trip_Description: enteredDescription,
      Start_Date: enteredStartDate,
      End_Date: enteredEndDate,
      Start_Location: enteredStartLocation,
      Destination: enteredDestination,
      Vehicle: enteredVehicle,
      Event: enteredEvent,
      User_ID_invited: enteredInvite,
    };
    props.addTrip(trip);
  };

  return (
    <div>
      <Header user={props.user} />
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
          <label>Start Date</label>
          <input
            type="text"
            value={enteredStartDate}
            onChange={StartDateChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>End Date</label>
          <input
            type="text"
            value={enteredEndDate}
            onChange={EndDateChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Start Location</label>
          <input
            type="text"
            value={enteredStartLocation}
            onChange={StartLocationChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Destination</label>
          <input
            type="text"
            value={enteredDestination}
            onChange={DestinationChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Vehicle</label>
          <input
            type="text"
            value={enteredVehicle}
            onChange={VehicleChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Events</label>
          <input
            type="text"
            value={enteredEvent}
            onChange={EventChangeHandler}
          />
        </div>
        <div className="question-bar">
          <label>Invite</label>
          <input
            type="text"
            value={enteredInvite}
            onChange={InviteChangeHandler}
          />
        </div>

        <button className="button-border" onClick={addTripHandler}>
          <Link
            to="/account/tripList"
            className="button-text"
            onClick={resetPage}
          >
            Add trip
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NewTrip;
