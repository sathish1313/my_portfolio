import React from 'react'
import Navbar from './components/Navbar/Navbar';
import VideoComponent from './components/VideoComponent/VideoComponent';
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
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