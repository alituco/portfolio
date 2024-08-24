import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <Typography variant="h4">Contact Me</Typography>
          <Typography variant="body1">
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </Typography>
          <Box className='contact-info'>
            <div className='contact-item'>
              <EmailIcon style={{color: "red"}}/> 
              <Typography variant="body1">alialtaraif@gmail.com</Typography>
            </div>
            <div className='contact-item'>
              <PhoneIcon style={{color: "red"}} /> 
              <Typography variant="body1">+1 (480)-746-9696</Typography>
            </div>
            <div className='contact-item'>
              <PhoneIcon style={{color: "red"}} /> 
              <Typography variant="body1">+973 38883670</Typography>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
