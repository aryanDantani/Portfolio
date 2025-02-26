import React from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
const LandingPage = () => {
  const handleSendLetter = () => {
    document.body.classList.add("sent");
  };
  return (
    <div className='contact-us-main'>
      <div className="wrapper">
        <div className="letter">
          <div className="side">
            <h1>Send a Letter</h1>
            <textarea placeholder="Write your message..."></textarea>
          </div>
          <div className="side">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <button onClick={handleSendLetter}>Send</button>
          </div>
        </div>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
        <small className="centered result-message">Letter sent!</small>
      </div>
    </div>
  );
};

export default LandingPage;
