import React, { Component } from 'react';
import { Stack } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './AccountPage.module.css'


function notModifiying({ props }) {
    return (
        <div>
            <Stack direction="horizontal" className={styles.infoStack}>
                <Stack className={styles.accountLabels}>User Name:</Stack>
                <Stack className={styles.accountInfo}>Some User Name</Stack>
            </Stack>

            <Stack direction="horizontal" bsPrefix={styles.infoStack}>
                <Stack className={styles.accountLabels}>Display Name:</Stack>
                <Stack className={styles.accountInfo}>Some Display Name</Stack>
            </Stack>

            <Stack direction="horizontal" bsPrefix={styles.infoStack}>
                <Stack className={styles.accountLabels}>Email:</Stack>
                <Stack className={styles.accountInfo}>Some Email Name</Stack>
            </Stack>

            <Stack gap={2} className="col-md-5 mx-auto">
                <Link className="btn btn-outline-secondary" to="/account/edit">Change Account Information</Link>
            </Stack>
        </div >
    );

}

function modifying({ props }) {
    return (
        <div>
            <Stack direction="horizontal" className={styles.infoStack}>
                <Stack className={styles.accountLabels}>User Name:</Stack>
                <Stack className={styles.accountInfo}>Some User Name</Stack>
            </Stack>

            <Stack direction="horizontal" bsPrefix={styles.infoStack}>
                <Stack className={styles.accountLabels}>Display Name:</Stack>
                <Stack className={styles.accountInfo}>Some Display Name</Stack>
            </Stack>

            <Stack direction="horizontal" bsPrefix={styles.infoStack}>
                <Stack className={styles.accountLabels}>Email:</Stack>
                <Stack className={styles.accountInfo}>Some Email Name</Stack>
            </Stack>

            <Stack gap={2} className="col-md-5 mx-auto">
                <Link className="btn btn-secondary" to="/account">Save changes</Link>
                <Link className="btn btn-outline-secondary" to="/account">Cancel</Link>
            </Stack>
        </div >
    );
}

class AccountPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Stack gap={5}>
                    <div className={styles.welcomeMessage}>
                        <span  >
                            Hello! This is the Account Page.
                        </span>
                    </div>

                    <Routes>
                        <Route path="/" element={notModifiying(this.props)} />
                        <Route path="/edit" element={modifying(this.props)} />
                    </Routes>



                </Stack>
            </div>


        );
    }
}

export default AccountPage