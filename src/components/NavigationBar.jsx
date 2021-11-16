import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-secondary">

        <Navbar.Text bsPrefix={styles.brandName}>
          Our Trips
        </Navbar.Text>

        <Nav bsPrefix={styles.right}>
          <Nav.Link href="/home">
            Home
          </Nav.Link>
          <Nav.Link>
            My Account
          </Nav.Link>
        </Nav>

      </Navbar>
    );
  }
}

export default NavigationBar;