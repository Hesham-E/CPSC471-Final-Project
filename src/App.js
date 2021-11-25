import React from "react";
import { Route, Routes } from "react-router";
import AccountPage from "./components/AccountPage";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PrivateTripPage from "./components/PrivateTripPage";
import PublicTripPage from "./components/PublicTripPage";
import styles from "./App.module.css";

const App = () => {
  return (
    <React.Fragment>
      <div className={styles.page}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/publictrips/*" element={<PublicTripPage />} />
          <Route path="/privatetrips/*" element={<PrivateTripPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
