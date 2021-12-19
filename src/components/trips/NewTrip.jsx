import React from "react";
import Header from "../account/HeaderAccount";
import { Link } from "react-router-dom";
import "./NewTrip.css";

const NewTrip = () => {
  return (
    <div>
      <Header />
      <div className="user-sign-up">
        <div className="background-rectangle" />
        <div className="question-bar">
          <p className="question-title">Name</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Description</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Date</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Time</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Location</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Send Invitation</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Private or Public?</p>
          <div className="form-field-trueorfalse" />
        </div>

        <button className="button-border">
          <Link to="/account" className="button-text">
            Add Trip
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NewTrip;
