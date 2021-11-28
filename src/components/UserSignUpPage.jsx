import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./UserSignUpPage.css";

class UserSignUpPage extends Component {
    render() {
        return (
            <div className="user-sign-up">
                <div className="background-rectangle" />
                <p className="page-title">User Sign Up</p>
                <div className="question-bar">
                    <p className="question-title">First Name</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Last Name</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Email</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Display Name</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Password</p>
                    <div className="form-field" />
                </div>


                <button className="button-border">
                    <Link to="/SignUpPage" className="button-text">
                        Sign Up
                    </Link>
                </button>



            </div>
        );
    }
}

export default UserSignUpPage;