import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
    render() {
        return (
            <div className="log-in">
                <div className="background-rectangle" />
                <div className="question-bar">
                    <p className="question-title">Username</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Password</p>
                    <div className="form-field" />
                </div>

                <button className="button-border">
                    <Link to="/" className="button-text">
                        Log In
                    </Link>
                </button>



            </div>
        );
    }
}

export default LoginPage;