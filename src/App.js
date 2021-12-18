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
import Axios from 'axios';

const USERS = [
  {
    ID: "1",
    First_Name: "Etienne",
    Last_Name: "Lagace",
    Email: "etienne.lagace@shaw.ca",
    Username: "EtienneL",
    Display_Name: "Etienne Lagace",
    Password: "chocolate",
    Type: "user",
  },
  {
    ID: "2",
    Vendor_Name: "THE organization",
    Email: "coolio@gmail.com",
    Username: "Habibi", 
    Password: "boo",
    Type: "vendor",
  },
];

const EVENTS = [
  {
    Event_ID: "312234",
    Event_Description: "This event is the coolest event",
    Date: "2022-02-14",
    Event_Name: "Valentine's Day", 
    Duration: "6",
    Account_Creator: "1",
    Event_Location: [
      "Calgary", 
      "Edmonton", 
      "Vancouver",
    ],
    Type: "private",
    Participants: [
      "etienne.cool@gmail.com",
      "angelina.cooler@gmail.com",
      "hesham.coolest@gmail.com",
    ],
  },
  {
    Event_ID: "234512",
    Event_Description: "It's Christmas time again so be good or you will be put on the naughty list",
    Date: "2021-12-25",
    Event_Name: "Jesus Christ is Born", 
    Duration: "24",
    Account_Creator: "1",
    Event_Location: [
      "Calgary", 
      "Edmonton", 
      "Vancouver",
      "Toronto", 
      "New York",
      "Montreal",
    ],
    Type: "private",
    User_ID_invited: [
      "elephant.cool@gmail.com",
      "awesome.cooler@gmail.com",
      "tree.coolest@gmail.com",
    ],
  },
]

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const [userList, setUserList] = useState(USERS);
  const [targetUser, setTargetUser] = useState("");

  const logInHandler = (username, password) => {
    setUserList(); //comment this out if you want to use the test accounts
    Axios.get("http://localhost:3001/api/account/users", {}).then((response) => {
        response.data.forEach((item) => {
          item.Type = "user";
        })

        setUserList([...userList, ...response.data]);
    });

    Axios.get("http://localhost:3001/api/account/vendors", {}).then((response) => {
      response.data.forEach((item) => {
        item.Type = "vendor";
      })

      setUserList([...userList, ...response.data]);
    });


    userList.forEach((item) => {
      if (username === item.Username && password === item.Password) {
        setAuthenticate(true);
        setTargetUser(item.Display_Name);
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
          <Route path="/" element={<HomePage />} />
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
                <VendorSignUpPage newUser={signUpHandler} />
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
