import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from "react-router-dom";
import "./SignUpPage.css";
import friends from "../pictures/friends.png";
import business from "../pictures/business.png";
import VendorSignUpPage from './VendorSignUpPage';
import UserSignUpPage from './UserSignUpPage';
import { Stack } from 'react-bootstrap';


function chooseSignUp({ props }) {
    return (
        <div className="general-sign-up">
            <span className="page-title">
                Which account style best fits your needs?
            </span>
            <div className="account-types-links" >
                <Link to="/SignUpPage/Vendor" className="link-styling">
                    Vendor
                </Link>
                <Link to="/SignUpPage/User" className="link-styling">
                    User
                </Link>
            </div>
            <div className="account-types-images-and-desc">
                <div className="account-description" style={{ backgroundImage: `url(${business})`, backgroundSize: 'cover' }}>
                    <Stack>
                        <Stack>Vestibulum imperdiet erat neque, eu feugiat quam lacinia ut.</Stack>
                        <Stack>Vestibulum imperdiet erat neque, eu feugiat quam lacinia ut.</Stack>
                        <Stack>Vestibulum imperdiet erat neque, eu feugiat quam lacinia ut.</Stack>
                    </Stack>

                </div>
                <div className="account-description" style={{ backgroundImage: `url(${friends})`, backgroundSize: 'cover' }}>
                    <Stack>
                        <Stack>Vestibulum imperdiet erat neque, eu feugiat quam lacinia ut.</Stack>
                        <Stack>Vestibulum imperdiet erat neque, eu feugiat quam lacinia ut.</Stack>
                        <Stack>Vestibulum imperdiet erat neque, eu feugiat quam lacinia ut.</Stack>
                    </Stack>
                </div>
            </div>
        </div>
    );
}


class SignUpPage extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={chooseSignUp(this.props)} />
                <Route path="/Vendor" element={<VendorSignUpPage />} />
                <Route path="/User" element={<UserSignUpPage />} />
            </Routes>
        );
    }
}

export default SignUpPage