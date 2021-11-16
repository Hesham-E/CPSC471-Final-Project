import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" style={{ color: "Lavender" }}>
          Our Trips
        </span>
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
          Log In
        </button>
      </nav>
    );
  }
}

export default NavBar;