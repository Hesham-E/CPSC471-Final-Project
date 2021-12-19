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
import PublicEventsPage from "./components/PublicEventsPage";
import styles from "./App.module.css";
import SignUpPage from "./components/SignUpPage";
import UserSignUpPage from "./components/UserSignUpPage";
import VendorSignUpPage from "./components/VendorSignUpPage";
import LoginPage from "./components/LoginPage";
import Axios from "axios";

const USERS = [
  {
    ID: "1",
    First_Name: "Etienne",
    Last_Name: "Lagace",
    Email: "etienne.lagace@shaw.ca",
    Username: "et",
    Display_Name: "Etienne Lagace",
    Password: "phone",
    Type: "user",
  },
  {
    ID: "2",
    First_Name: "Hesham",
    Last_Name: "Elkaliouby",
    Email: "some.cool@gmail.com",
    Username: "hesham",
    Display_Name: "Heshhhhh",
    Password: "e",
    Type: "user",
  },
  {
    ID: "3",
    First_Name: "Angelina",
    Last_Name: "Rochon",
    Email: "anotehr.cool@gmail.com",
    Username: "angelina",
    Display_Name: "Angelina",
    Password: "r",
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
  {
    ID: "4",
    Vendor_Name: "THE organization",
    Email: "some@gmail.com",
    Username: "bot1",
    Password: "bot1",
    Type: "vendor",
  },
  {
    ID: "5",
    Vendor_Name: "ANOTHER organization",
    Email: "mairo.bros@gmail.com",
    Username: "bot2",
    Password: "bot2",
    Type: "vendor",
  },
  {
    ID: "6",
    Vendor_Name: "THE ONE organization",
    Email: "donkey.kong@gmail.com",
    Username: "bot3",
    Password: "bot3",
    Type: "vendor",
  },
];

const TRIPS = [
  {
    Trip_ID: "12534",
    Account_ID: "1",
    Trip_Name: "Party House",
    Trip_Description:
      "Now that finals are almost over, it is time to relax, have some fun, and go to the BAHAMASSSSS!!!",
    Start_Date: "2022-03-15",
    End_Date: "2022-04-03",
    Start_Location: "Calgary",
    Destination: "Bahamas",
    Vehicle: "WestJet Plane",
    Event: "312234, 75674",
    User_ID_invited: "some.email@gmail.com",
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
    Event_Location: "Calgary",
    Type: "private",
    Participants: "etienne.cool@gmail.com",
  },
  {
    Event_ID: "234512",
    Event_Description:
      "It's Christmas time again so be good or you will be put on the naughty list",
    Date: "2021-12-25",
    Event_Name: "Jesus Christ is Born",
    Duration: "24",
    Account_Creator: "2",
    Event_Location: "Calgary",
    Type: "private",
    User_ID_invited: "elephant.cool@gmail.com",
  },
  {
    Event_ID: "75674",
    Event_Description:
      "Halloween is cool I guess. Come down to my haunted house.",
    Date: "2021-10-231",
    Event_Name: "Spoooky",
    Duration: "2",
    Account_Creator: "1",
    Event_Location: "Halifax",
    Type: "private",
    User_ID_invited: "luigi.cool@gmail.com",
  },
  {
    Event_ID: "7313452",
    Event_Description:
      "I wish it was summer, therefore I am creating a beach wonderland during the middle of winter... You're welcome",
    Date: "2021-12-29",
    Event_Name: "BEACH PARTY",
    Duration: "7",
    Account_Creator: "1",
    Event_Location: "Vancouver",
    Type: "private",
    User_ID_invited: "waluigi.cool@gmail.com",
  },
  {
    Event_ID: "124243",
    Event_Description:
      "Coorporate is making me do this so don't expect anything great. But here is laser tag for adults. Not sponsored :(",
    Date: "2022-01-9",
    Event_Name: "Classified",
    Duration: "1.5",
    Account_Creator: "5",
    Event_Location: "Calgary",
    Type: "public",
    User_ID_invited: "somedudewithahat.cool@gmail.com",
  },
];

const App = () => {
  // will need to change this
  const [authenticate, setAuthenticate] = useState(false);
  const [userList, setUserList] = useState(USERS);
  const [eventList, setEventList] = useState(EVENTS);
  const [tripList, setTripList] = useState(TRIPS);
  const [targetUser, setTargetUser] = useState({
    ID: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    Username: "",
    Display_Name: "",
    Password: "",
    Type: "",
  });
  const [targetEvent, setTargetEvent] = useState({
    Event_ID: "",
    Event_Description: "",
    Date: "",
    Event_Name: "",
    Duration: "",
    Account_Creator: "",
    Event_Location: "",
    Type: "",
    User_ID_invited: "",
  });
  const [targetTrip, setTargetTrip] = useState({
    TRIP_ID: "",
    Account_ID: "",
    Start_Date: "",
    End_Date: "",
    Start_Location: "",
    Destination: "",
    Vehicle: "",
    Type: "",
    Event: "",
    User_ID_invited: "",
  });

  const logInHandler = (username, password) => {
    // setUserList(); //comment this out if you want to use the test accounts
    // Axios.get("http://localhost:3001/api/account/users", {}).then(
    //   (response) => {
    //     response.data.forEach((item) => {
    //       item.Type = "user";
    //     });

    //     setUserList([...userList, ...response.data]);
    //   }
    // );

    // Axios.get("http://localhost:3001/api/account/vendors", {}).then(
    //   (response) => {
    //     response.data.forEach((item) => {
    //       item.Type = "vendor";
    //     });

    //     setUserList([...userList, ...response.data]);
    //   }
    // );

    userList.forEach((item) => {
      if (username === item.Username && password === item.Password) {
        setAuthenticate(true);
        setTargetUser(item);
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
    setTargetUser(newUser);
    console.log(userList);
  };

  const addEventHandler = (newEvent) => {
    setEventList((prevState) => {
      return [newEvent, ...prevState];
    });
    console.log(newEvent);
  };

  const targetEventHandler = (event) => {
    setTargetEvent(targetEvent);
  };

  const addTripHandler = (newTrip) => {
    setTripList((prevState) => {
      return [newTrip, ...prevState];
    });
    console.log(newTrip);
  };

  const targetTripHandler = (trip) => {
    setTargetTrip(targetTrip);
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
          {authenticate && (
            <Route
              path="/account/*"
              element={
                <AccountPage
                  user={targetUser}
                  events={eventList}
                  trips={tripList}
                  logout={logOutHandler}
                />
              }
            />
          )}
          {authenticate && (
            <Route
              path="/account/invite"
              element={<InvitePage user={targetUser} />}
            />
          )}
          {authenticate && (
            <Route
              path="/account/event"
              element={<Event event={targetEvent} user={targetUser} />}
            />
          )}
          {authenticate && (
            <Route
              path="/account/eventList"
              element={
                <EventList
                  events={eventList}
                  targetEvent={targetEventHandler}
                  user={targetUser}
                />
              }
            />
          )}
          {authenticate && (
            <Route
              path="/account/newEvent"
              element={
                <NewEvent addEvent={addEventHandler} user={targetUser} />
              }
            />
          )}
          {authenticate && (
            <Route
              path="/account/trip"
              element={
                <Trip
                  user={targetUser}
                  targetEvent={targetEventHandler}
                  events={eventList}
                />
              }
            />
          )}
          {authenticate && (
            <Route
              path="/account/tripList"
              element={
                <TripList
                  trips={tripList}
                  targetTrip={targetTripHandler}
                  user={targetUser}
                />
              }
            />
          )}
          {authenticate && (
            <Route
              path="/account/newtrip"
              element={<NewTrip user={targetUser} addTrip={addTripHandler} />}
            />
          )}
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
