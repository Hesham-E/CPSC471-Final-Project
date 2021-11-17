import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './components/HomePage';
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  render() {
    return (<React.Fragment>
      <NavigationBar />
      <HomePage />

      {/* <Routes>
        <Route path="/" element={<HomePage />}/>
        
      </Routes> */}

    </React.Fragment>);
  }

}

export default App;
