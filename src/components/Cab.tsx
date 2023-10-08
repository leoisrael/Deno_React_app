import React from 'react';
import './Cab.css';
import discordImg from '../assets/discordia.png';
import githubImg from '../assets/placa-do-github.png';
import instagramImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';

function Cab() {
  return (
    <div className="container-cab">
      <div className="bloco-img">
        <a href="https://discord.com/" target="_blank">
          <img className="img-cab" src={discordImg} alt="discord image" />
        </a>
        <a href="https://github.com/leoisrael" target="_blank">
          <img className="img-cab" src={githubImg} alt="github image" />
        </a>
        <a href="https://www.instagram.com/israel_gma/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
          <img className="img-cab" src={instagramImg} alt="instagram image" />
        </a>
        <a href="https://www.linkedin.com/in/israel-albuquerque-286049152/" target="_blank">
          <img className="img-cab" src={linkedinImg} alt="linkedin Image" />
        </a>
      </div>
    </div>
  );
}

export default Cab;
