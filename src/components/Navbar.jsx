import React from 'react'
import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };
  return (
    <div className='Navbar'>
      <div class="title">
        <h1 className='name'>Sathish's Portfolio</h1>
        </div>
        <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        <button className="like-button" onClick={handleLike}>
        ❤️ Like {likes}
      </button>

    </div>
  )
}

export default Navbar