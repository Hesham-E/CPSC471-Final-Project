import React, { Component } from 'react';
import { Route, Routes} from 'react-router';
import AccountPage from './components/AccountPage';
import HomePage from './components/HomePage';
import NavigationBar from "./components/NavigationBar";
import PrivateEventPage from './components/PrivateEventPage';
import PublicEventPage from './components/PublicEventPage';

class App extends Component {
  render() {
    return (<React.Fragment>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/account/*" element={<AccountPage />}/>
        <Route path="/publicevents/*" element={<PublicEventPage />}/>
        <Route path="/privateevents/*" element={<PrivateEventPage />}/>
      </Routes>

    </React.Fragment>);
  }

}

export default App;
