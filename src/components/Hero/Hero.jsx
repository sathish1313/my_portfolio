import React from 'react';
import './Hero.css';
import photo from '../../assets/your_photo.jpg';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.jpeg';
const Hero = () => {
  return (
    <div className="hero-container" id="Home">
      <div className="hero-text">
        <h1>Hi There,</h1>
        <h1>I'm <span className="highlight">Sathish</span></h1>
        <p>i am into</p>
        <h3 className="highlight">Web design</h3>
        <a
    href="/sathish__Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="cv-button"
    >
      View CV
    </a>
        <div className="socials">
        <a href="https://www.linkedin.com/in/sathish-p-489b92269/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" className="social-con" />
  </a>
  <a href="https://github.com/sathish1313" target="_blank" rel="noopener noreferrer">
    <img src={github} alt="GitHub" className="social-icon" />
  </a>
  <a href="https://www.instagram.com/p_s__13?igsh=OXZ1NTZobmw4ZG11&utm_source=qr" target="_blank" rel="noopener noreferrer">
    <img src={insta} alt="GitHub" className="social-icon" />
  </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Sathish"/>
      </div>
    </div>
  );
};
export default Hero;
