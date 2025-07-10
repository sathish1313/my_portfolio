import React from 'react'
import Navbar from './components/Navbar/Navbar';
import VideoComponent from './components/VideoComponent/VideoComponent';
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import VantaBackground from './components/VantaBackground/VantaBackground'
const App = () => {
  return (
    <div>
        <VantaBackground/>
        <VideoComponent/>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Contact/>
       
       
    </div>
  )
}

export default App