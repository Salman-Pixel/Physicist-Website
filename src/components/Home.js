import React from 'react';
import '../styles/Home.css';
import saimaImage from '../assets/images/transparent bg saima.png';


const Home = ({ onExplore }) => {
    return (
        <div className="content">
            <img className="profile-image" src={saimaImage} alt="Saima Jabeen" />
            <h1>Welcome, I'm Saima Jabeen</h1>
            <h3>Physicist | IBDP | IGCSE</h3>
            <h4>I'm on a journey beyond the stars. Join me!</h4>
            <button className="button" onClick={onExplore}>Explore</button>
        </div>
    );
};

export default Home;
