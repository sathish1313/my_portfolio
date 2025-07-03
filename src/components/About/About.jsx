import React from 'react'
import './About.css'
import srm from '../../assets/srm_logo.png'
import narayanaj from '../../assets/narayanaj_logo.jpeg'
import narayanas from '../../assets/narayanas_logo.png'

const About = () => {
  return (
    <div className="about-container" id="About">
      <h2>About Me</h2>
      <div className="about-intro">
       <p>I am a learning developer based in Andhra pradesh, India. I am an currently CSE undergraduate from SRM institute of science and engineering and technology in chennai. I am very passionate about improving my coding skills & developing applications & websites.</p>
      </div>

      <h2>My Education</h2>

      <div className="education-item">
        <div className="edu-column">
          <img src={srm} alt="BTech Icon" className="icon" />
        </div>
        <div className="edu-column gun">
          <span className="gun-emoji">▄︻デ══━一💥</span>
        </div>
        <div className="edu-column">
          <div className="edu-details">
            <p><strong>B.Tech</strong> - SRM University, Chennai</p>
            <p>CGPA: 9.15 / 10</p>
          </div>
        </div>
      </div>

      <div className="education-item">
        <div className="edu-column">
          <img src={narayanaj} alt="Inter Icon" className="icon" />
        </div>
        <div className="edu-column gun">
          <span className="gun-emoji">▄︻デ══━一💥</span>
        </div>
        <div className="edu-column">
          <div className="edu-details">
            <p><strong>Intermediate</strong> - Narayana, Nellore</p>
            <p>Marks: 956 / 1000</p>
          </div>
        </div>
      </div>

      <div className="education-item">
        <div className="edu-column">
          <img src={narayanas} alt="School Icon" className="icon" />
        </div>
        <div className="edu-column gun">
          <span className="gun-emoji">▄︻デ══━一💥</span>
        </div>
        <div className="edu-column">
          <div className="edu-details">
            <p><strong>School</strong> - Narayana, Chittoor</p>
            <p>CGPA: 10 / 10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
