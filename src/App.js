import React from "react";
import { Route, Routes } from "react-router";
import AccountPage from "./components/account/AccountPage";
import InvitePage from "./components/account/invite/InvitePage";
import Events from "./components/events/EventPage";
import EventList from "./components/events/EventList";
import NewEvent from "./components/events/NewEvent";
import Trips from "./components/trips/TripPage";
import TripList from "./components/trips/TripList";
import NewTrip from "./components/trips/NewTrip";
import HomePage from "./components/HomePage";
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
          <Route
            path="/"
            element={
              <div>
                <Header title="Name goes here" />
                <HomePage />
              </div>
            }
          />
          <Route path="/account/*" element={<AccountPage />} />
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
            path="/LoginPage/*"
            element={
              <div>
                <Header title="Login" />
                <LoginPage />
              </div>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/AccountPage/*"
            element={
              <div>
                <Header title="Account Settings" />
                <AccountPage />
              </div>
            }
          />
          <Route path="/account/invite" element={<InvitePage />} />
          <Route path="/account/events" element={<Events />} />
          <Route path="/account/eventlist" element={<EventList />} />
          <Route path="/account/newevent" element={<NewEvent />} />
          <Route path="/account/trips" element={<Trips />} />
          <Route path="/account/triplist" element={<TripList />} />
          <Route path="/account/newtrip" element={<NewTrip />} />
          <Route path="/publictrips/*" element={<PublicTripPage />} />
          <Route path="/privatetrips/*" element={<PrivateTripPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
