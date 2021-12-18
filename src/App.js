import React, { useState } from "react";
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
// import PrivateTripPage from "./components/PrivateTripPage";
// import PublicTripPage from "./components/PublicTripPage";
import PublicEventsPage from "./components/PublicEventsPage";
import styles from "./App.module.css";
import SignUpPage from "./components/SignUpPage";
import UserSignUpPage from "./components/UserSignUpPage";
import VendorSignUpPage from "./components/VendorSignUpPage";
import LoginPage from "./components/LoginPage";

const USERS = [
  {
    id: "e1",
    firstname: "Etienne",
    lastname: "Lagace",
    email: "etienne.lagace@shaw.ca",
    username: "EtienneL",
    displayname: "Etienne Lagace",
    password: "chocolate",
  },
];

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const [userList, setUserList] = useState(USERS);
  const [targetUser, setTargetUser] = useState("");

  const logInHandler = (username, password) => {
    userList.forEach((item) => {
      if (username === item.username && password === item.password) {
        setAuthenticate(true);
        setTargetUser(item.displayname);
      }
    });
  };

  const logOutHandler = () => {
    setAuthenticate(false);
  };

  const signUpHandler = (newUser) => {
    setUserList((prevState) => {
      return [newUser, ...prevState];
    });

    setAuthenticate(true);
    setTargetUser(newUser.displayname);
    console.log(userList);
  };

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
                <UserSignUpPage newUser={signUpHandler} />
              </div>
            }
          />
          <Route
            path="/LoginPage/*"
            element={
              <div>
                <Header title="Login" />
                <LoginPage logUser={logInHandler} auth={authenticate} />
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
          {authenticate && (
            <Route
              path="/account/*"
              element={<AccountPage user={targetUser} logout={logOutHandler} />}
            />
          )}
          {authenticate && (
            <Route path="/account/invite" element={<InvitePage />} />
          )}
          {authenticate && <Route path="/account/event" element={<Event />} />}
          {authenticate && (
            <Route path="/account/eventList" element={<EventList />} />
          )}
          {authenticate && (
            <Route path="/account/newEvent" element={<NewEvent />} />
          )}
          {authenticate && <Route path="/account/trip" element={<Trip />} />}
          {authenticate && (
            <Route path="/account/tripList" element={<TripList />} />
          )}
          {authenticate && (
            <Route path="/account/newtrip" element={<NewTrip />} />
          )}
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
