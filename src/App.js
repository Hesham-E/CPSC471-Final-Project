import React, { Component } from 'react';
import { Route, Routes} from 'react-router';
import AccountPage from './components/AccountPage';
import HomePage from './components/HomePage';
import NavigationBar from "./components/NavigationBar";
import PrivateTripPage from './components/PrivateTripPage';
import PublicTripPage from './components/PublicTripPage';

class App extends Component {
  render() {
    return (<React.Fragment>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/account/*" element={<AccountPage />}/>
        <Route path="/publictrips/*" element={<PublicTripPage />}/>
        <Route path="/privatetrips/*" element={<PrivateTripPage />}/>
      </Routes>

    </React.Fragment>);
  }

}

export default App;

