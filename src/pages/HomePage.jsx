import {React, useState} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/HomePage.css';

function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className = "user-info">
                <div className = "profile-box"/>
                <h3 className = "user-name">UserName</h3>
            </div>

            <hr className="divider" />

            <div className="home-content">
                <h2>Welcome to the Home Page!</h2>
                <p>This is where you can find the latest updates and features.</p>
                <button className = "home-create-button" onClick={() => navigate('/make-diary')}>Create New Entry</button>
            </div>
        </div>
    );
    }

    export default HomePage;