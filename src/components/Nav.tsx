import React from 'react';
import './Nav.css';
import shield from '../assets/broken-shield-red.png';

function Nav() {
  return (
    <div className="container-nav">
        <div className="img-logo">
            <img className="img-nav" src={shield} alt="discord image" />
            <div className="name">
              <div className="myName">Israel albuquerque</div>
              <div className="job">Software Engineer</div>
            </div>
        </div>
        <div className="opts-nav">
            <div className="about-me">About</div>
            <div className="projects">Projects</div>
            <div className="contact">Contact me</div>
        </div>
    </div>
  );
}

export default Nav;
