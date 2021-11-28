import React from "react";
import { Route, Routes } from "react-router";
import AccountPage from "./components/AccountPage";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PrivateTripPage from "./components/PrivateTripPage";
import PublicTripPage from "./components/PublicTripPage";
import PublicEventsPage from "./components/PublicEventsPage";
import styles from "./App.module.css";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <React.Fragment>
      <div className={styles.page}>
       
        <Routes>
          <Route path="/" element={<div><Header title="Name goes here"/><HomePage /></div>} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/PublicEventsPage/*" element={<div><Header title="Public Events"/><PublicEventsPage /></div>} />
          <Route path="/SignUpPage/*" element={<div><Header title="Sign Up"/><SignUpPage /></div>} />
          <Route path="/LoginPage/*" element={<div><Header title="Login"/><LoginPage /></div>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/AccountPage/*" element={<div><Header title="Account Settings"/><AccountPage /></div>} />
          <Route path="/publictrips/*" element={<PublicTripPage />} />
          <Route path="/privatetrips/*" element={<PrivateTripPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
