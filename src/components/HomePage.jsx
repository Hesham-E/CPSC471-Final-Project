import React, { Component } from 'react';
import styles from './HomePage.module.css'


class HomePage extends Component {
    render() {
        return (
            <div className={styles.welcomeMessage}>
                <span  >
                    Hello! Welcome to Our Trips.
                </span>
            </div>

        );
    }
}

export default HomePage