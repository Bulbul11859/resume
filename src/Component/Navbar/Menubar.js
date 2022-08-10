import React, { useState } from 'react'
import './Menubar.css'
import './Responsive.css'

import { Wave } from 'react-animated-text';

const Menubar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };


  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className='Menu'>
      <div className={`${colorChange?"menu_fixed_color":"menu_fixed"}`}>
         
        <div className='container'>
         <nav className="navbar">
            <div className='nav_icon'>
            <Wave text="My Portfolio" effect="stretch" effectChange={2.2} style={{color:"white"}}/>
      </div>
      <div className='navbar_right'>
        <ul className="menu_list">
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li> <a href="#work">Work</a></li>
          <li><a href="#service">Services</a></li>
        </ul>
      </div>
    </nav>
    </div>
    </div>
    </div>
  )
}

export default Menubar