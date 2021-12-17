import React from "react";
import { Route, Routes } from "react-router";
import AccountPage from "./components/account/AccountPage";
import InvitePage from "./components/account/invite/InvitePage";
import Event from "./components/events/EventPage";
import EventList from "./components/events/EventList";
import NewEvent from "./components/events/NewEvent";
import Trip from "./components/trips/TripPage";
import TripList from "./components/trips/TripList";
import NewTrip from "./components/trips/NewTrip";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PrivateTripPage from "./components/PrivateTripPage";
import PublicTripPage from "./components/PublicTripPage";
import PublicEventsPage from "./components/PublicEventsPage";
import styles from "./App.module.css";
import SignUpPage from "./components/SignUpPage";
import UserSignUpPage from "./components/UserSignUpPage";
import VendorSignUpPage from "./components/VendorSignUpPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <React.Fragment>
      <div className={styles.page}>
        <Routes>
          <Route
            path="/PublicEventsPage/*"
            element={
              <div>
                <Header title="Public Events" />
                <PublicEventsPage />
              </div>
            }
          />
          <Route
            path="/SignUpPage/*"
            element={
              <div>
                <Header title="Sign Up" />
                <SignUpPage />
              </div>
            }
          />
          <Route
            path="/SignUpPage/Vendor"
            element={
              <div>
                <Header title="Sign Up" />
                <VendorSignUpPage />
              </div>
            }
          />
          <Route
            path="/SignUpPage/User"
            element={
              <div>
                <Header title="Sign Up" />
                <UserSignUpPage />
              </div>
            }
          />
          <Route
            path="/LoginPage/*"
            element={
              <div>
                <Header title="Login" />
                <LoginPage />
              </div>
            }
          />
          {/* <Route
            path="/accountSettings/*"
            element={
              <div>
                <Header title="Account Settings" />
                <AccountPage />
              </div>
            }
          /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/account/invite" element={<InvitePage />} />
          <Route path="/account/event" element={<Event />} />
          <Route path="/account/eventList" element={<EventList />} />
          <Route path="/account/newEvent" element={<NewEvent />} />
          <Route path="/account/trip" element={<Trip />} />
          <Route path="/account/triplist" element={<TripList />} />
          <Route path="/account/newtrip" element={<NewTrip />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
