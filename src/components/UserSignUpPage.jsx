import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./UserSignUpPage.css";

const submitUserInformation = (state) => {
    Axios.post('http://localhost:3001/api/users', {
        displayName: state.displayName,
        firstName: state.firstName,
        lastName: state.lastName,
        userName: state.userName,
        email: state.email,
        password: state.password
    }).then(() => {
    });
}

class UserSignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            displayName: '',
            password: ''
        };
    }

    render() {
        return (
            <div className="user-sign-up">
                <div className="background-rectangle" />
                <p className="page-title">User Sign Up</p>
                <div className="question-bar">
                    <p className="question-title">First Name</p>
                    <input type="text" name="firstName" className="form-field" onChange={(e) => {
                        this.state.firstName = e.target.value;
                    }} />
                </div>
                <div className="question-bar">
                    <p className="question-title">Last Name</p>
                    <input type="text" name="lastName" className="form-field" onChange={(e) => {
                        this.state.lastName = e.target.value;
                    }} />                </div>
                <div className="question-bar">
                    <p className="question-title">Email</p>
                    <input type="text" name="email" className="form-field" onChange={(e) => {
                        this.state.email = e.target.value;
                    }} />                </div>
                <div className="question-bar">
                    <p className="question-title">User Name</p>
                    <input type="text" name="userName" className="form-field" onChange={(e) => {
                        this.state.userName = e.target.value;
                    }} />                </div>
                <div className="question-bar">
                    <p className="question-title">Display Name</p>
                    <input type="text" name="displayName" className="form-field" onChange={(e) => {
                        this.state.displayName = e.target.value;
                    }} />                </div>
                <div className="question-bar">
                    <p className="question-title">Password</p>
                    <input type="text" name="password" className="form-field" onChange={(e) => {
                        this.state.password = e.target.value;
                    }} />                </div>

                <Link to="/SignUpPage" className="link">
                    <button className="button-border" onClick={() => submitUserInformation(this.state)}>
                        <p className="button-text">Sign Up</p>
                    </button>
                </Link>




            </div>
        );
    }
}

export default UserSignUpPage;