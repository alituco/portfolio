import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import ProfilePicture from '../assets/images/alialtaraif-profile-picture.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePicture} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/alituco" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ali-a-6a0076294/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ali Altaraif</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/alituco" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="hhttps://www.linkedin.com/in/ali-a-6a0076294/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;