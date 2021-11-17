import React, { Component } from "react";
import { Nav, Navbar} from "react-bootstrap";
import styles from "./NavigationBar.module.css";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-secondary">

        <Nav.Item className="col">
          <Navbar.Text  bsPrefix={styles.brandName}>
            Our Trips
          </Navbar.Text>
        </Nav.Item>

        <Nav bsPrefix={styles.navLinks}>
          <Nav.Item>
            <Nav.Link href="/home">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/account">
              My Account
            </Nav.Link>
          </Nav.Item>


        </Nav>

      </Navbar>
    );
  }
}

export default NavigationBar;