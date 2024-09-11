import React from "react";
import starfin from '../assets/images/startfin-properties.png';
import gamerdepot from '../assets/images/gamer-depot.png';
import field from '../assets/images/field.png';
import license from '../assets/images/license-plate.png';

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://starfinventures.com/" target="_blank" rel="noreferrer"><img src={starfin} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.starfinventures.com/" target="_blank" rel="noreferrer"><h2>StarFin Ventures</h2></a>
                <p>Developed the foundation of a full-stack web app, collaborating with multiple teams to ensure project alignment and implementing key features like user registration, property listing, and an Admin role for streamlined site control. Also wrote a detailed software manual to reduce onboarding time and designed a RESTful API for seamless integration using request protocols.</p>
            </div>
            <div className="project">
                <a href="https://main--lively-daffodil-df0457.netlify.app/" target="_blank" rel="noreferrer"><img src={gamerdepot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://main--lively-daffodil-df0457.netlify.app/" target="_blank" rel="noreferrer"><h2>Computer Part Quick Selling</h2></a>
                <p>Developed a Full Stack application using the MERN stack, integrating React.js for a dynamic frontend and Node.js with Express.js for a robust backend, optimized for efficient request handling. Implemented MongoDB for flexible data storage, a shopping cart system, and order tracking, while integrating Google Firebase for secure user authentication.</p>
            </div>
            <div className="project">
                <a href="https://www.github.com/alituco/field" target="_blank" rel="noreferrer"><img src={field} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.github.com/alituco/field" target="_blank" rel="noreferrer"><h2>Field: Sports Matchmaking App</h2></a>
                <p>Field is the all-in-one app for sports enthusiasts. Customize your profile, create and manage clans, and handle user requests with ease. Organize matches with a dynamic skill rating system and book sports facilities directly within the app. Whether you're forming teams, scheduling games, or booking courts, Field provides everything you need for a seamless sports experience.</p>
            </div>
            <div className="project">
                <a href="https://www.github.com/alituco/field" target="_blank" rel="noreferrer"><img src={license}  className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.github.com/alituco/field" target="_blank" rel="noreferrer"><h2> Bahrain License Plate Estimator</h2></a>
                <p> Developed a predictive model using Random Forest to estimate the price of license plates, incorporating features like palindrome patterns and consecutive numbers for enhanced accuracy. Implemented the model through a Flask web application, enabling users to input license plate numbers and receive real-time price predictions.</p>
            </div>
        </div>
    </div>
    );
};

export default Project