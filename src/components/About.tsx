import React from 'react';
import './About.css';
import rocket from '../assets/rocket.png';
import community from '../assets/community.png';
import cyberSecurity from '../assets/cyber-security.png';

function About() {
  return (
    <div className="container-about">
        <div className="background-image"></div>
        <div className="background-fade"></div>
        <div className="content">
            <h1>About me</h1>
            <p> I am a passionate full-stack developer with extensive experience in information security, software development, and innovation.</p>
            <p> My approach is centered around software development using advanced and modern tech stacks, always guided by testing, security, and scalability to ensure high-quality code creation. </p>
            <p> Furthermore, I take pleasure in contributing to open-source projects in the field of information security, further expanding my perspective and knowledge. I share this experience with the developer community through forums, lectures, and workshops. </p>    
        </div>
        <div className="utils">
            <div className="item">
                <img className="itemImg" src={rocket} alt="rocket" />
                <h3>Technological Innovation</h3>
            </div>
            <div className="item">
                <img className="itemImg" src={community} alt="rocket" />
                <h3>Security and Quality</h3>
            </div>
            <div className="item">
                <img className="itemImg" src={cyberSecurity} alt="rocket" />
                <h3>Sharing and Collaboration</h3> 
            </div>
        </div>
    </div>
  );
}

export default About;
