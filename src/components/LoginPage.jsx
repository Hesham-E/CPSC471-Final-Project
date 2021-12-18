import React, { useState } from 'react';
import { useNavigate } from "react-router";
import Axios from 'axios';
import "./LoginPage.css";

function LoginPage() {
    
    let navigate = useNavigate('');
    let [userName, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const authenticateLoginInfo = () => {
        Axios.get('http://localhost:3001/api/account').then((response) => {
            if (response.data != null)
            {
                let logInValid = false;
                for (let i = 0; i < response.data.length; i++)
                {
                    if (response.data[i]["Username"] === userName)
                    {
                        Axios.get(`http://localhost:3001/api/account/password/${response.data[i]["ID"]}`).then((responseP) => {
                        if (responseP.data[0]["Password"] === password)
                        {
                            navigate('/');
                        }
                        i = responseP.data.length;
                        });
                    }
                }
            }
            else
                navigate('/LoginPage');
            
        });
    }

    return (
        <div className="log-in">
            <div className="background-rectangle" />
            <div className="question-bar">
                <p className="question-title">Username</p>
                <input type="text" name="userName" className="form-field" onChange={(e) => {
                    setUsername(e.target.value);
                }} />            </div>
            <div className="question-bar">
                <p className="question-title">Password</p>
                <input type="text" name="password" className="form-field" onChange={(e) => {
                    setPassword(e.target.value);
                }} />            </div>

            <button className="button-border" onClick={authenticateLoginInfo}>
                <p className="button-text">Log In</p>
            </button>

        </div>
    );
}

export default LoginPage;