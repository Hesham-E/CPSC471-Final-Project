import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./VendorSignUpPage.css";

class VendorSignUpPage extends Component {
    render() {
        return (
            <div className="vendor-sign-up">
                <div className="background-rectangle" />
                <p className="page-title">Vendor Sign Up</p>
                <div className="question-bar">
                    <p className="question-title">Name of Organization</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Username</p>
                    <div className="form-field" />
                </div>
                <div className="question-bar">
                    <p className="question-title">Email</p>
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

export default VendorSignUpPage;