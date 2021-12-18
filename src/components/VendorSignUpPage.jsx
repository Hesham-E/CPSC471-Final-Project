import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./VendorSignUpPage.css";

const submitVendorInformation = (state) => {
    Axios.post('http://localhost:3001/api/vendor', {
        vendorName: state.vendorName,
        userName: state.userName,
        email: state.email,
        password: state.password
    }).then(() => {
    });
}

class VendorSignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendorName: '',
            email: '',
            userName: '',
            password: ''
        };
    }

    render() {
        return (
            <div className="vendor-sign-up">
                <div className="background-rectangle" />
                <p className="page-title">Vendor Sign Up</p>
                <div className="question-bar">
                    <p className="question-title">Name of Organization</p>
                    <input type="text" name="vendorName" className="form-field" onChange={(e) => {
                        this.setState({vendorName: e.target.value});
                    }} />
                </div>
                <div className="question-bar">
                    <p className="question-title">Username</p>
                    <input type="text" name="userName" className="form-field" onChange={(e) => {
                        this.setState({userName: e.target.value});
                    }} />
                </div>
                <div className="question-bar">
                    <p className="question-title">Email</p>
                    <input type="text" name="email" className="form-field" onChange={(e) => {
                        this.setState({email: e.target.value});
                    }} />
                </div>
                <div className="question-bar">
                    <p className="question-title">Password</p>
                    <input type="text" name="password" className="form-field" onChange={(e) => {
                        this.setState({password: e.target.value});
                    }} />
                </div>

                <Link to="/SignUpPage" className="link">
                    <button className="button-border" onClick={() => submitVendorInformation(this.state)}>
                        <p className="button-text">Sign Up</p>
                    </button>
                </Link>

            </div>
        );
    }
}

export default VendorSignUpPage;