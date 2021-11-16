import React, { Component } from 'react';
import HomePage from './components/HomePage';
import NavigationBar from "./components/NavigationBar";


class App extends Component {
  render() {
    return (<React.Fragment>
      <NavigationBar />
      <HomePage />
    </React.Fragment>);
  }

}

export default App;
