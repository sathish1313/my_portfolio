import React from 'react'
import './Skills.css'
import html from'../../assets/html.jpeg'
import css from '../../assets/css.png'
import js from '../../assets/javascript_logo.png'
import react from '../../assets/react.png'
import c from '../../assets/c.jpeg'
import java from '../../assets/java_logo.png'
import sql from '../../assets/mysql.png'
import bootstrap from '../../assets/bootstrap.png'
const Skills = () => {
  return (
    <div className="skills-wrapper" id="Skills">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-orbit">
      <img src={html} alt="HTML" className="skill-icon pos1" />
      <img src={css} alt="CSS" className="skill-icon pos2" />
      <img src={js} alt="JavaScript" className="skill-icon pos3" />
      <img src={react} alt="React" className="skill-icon pos4" />
      <img src={c} alt="C" className="skill-icon pos5" />
      <img src={java} alt="Java" className="skill-icon pos6" />
      <img src={sql} alt="SQL" className="skill-icon pos7" />
      <img src={bootstrap} alt="Bootstrap" className="skill-icon pos8" />
    </div>
  </div>
  )
}

export default Skills