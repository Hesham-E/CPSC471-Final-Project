import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-secondary">
        <h1 className={styles.brandName}>
          Our Trips
        </h1>

        <Link to ="/" className={styles.navLinks}> 
          My Account
        </Link>
      </Navbar>
    );
  }
}

export default NavigationBar;