import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "NodeJS",
    "ReactJS",
    "ExpressJS",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Python",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Flutter",
    "Node",
    "Xcode",
    "Google Firebase",
    "Dart",
    "Figma",
    "React Native",
];

const labelsThird = [
    "Python",
    "Pandas",
    "SQL",
    "Matplotlib",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Node. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cross Platform App Development</h3>
                    <p>I specialize in creating apps that work seamlessly across multiple platforms, ensuring consistent user experiences on Android, iOS, and web. My focus is on delivering high-quality applications that perform well across all supported devices.</p>                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3> Data Science and AI </h3>
                    <p>I have practical experience in applying AI models and data science techniques to solve real-world problems. I’m equipped to contribute effectively to projects involving data-driven insights and AI applications for business to help stay relevant in the market.</p>                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;