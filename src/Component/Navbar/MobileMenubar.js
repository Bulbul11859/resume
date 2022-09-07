import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import './Responsive.css'
import './MobileNav.css'


const MobileMenubar = () => {
  const [isOpen, setOpen] = useState(false)


  // Toggle the Mobile Nav open / close
  

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setOpen(false);
  });

  return (
    <>
    <div>
    <nav className="mobileNav_container">
    
      <div className="mobileNav_logo">
      <i className="fa fa-home" aria-hidden="true"></i>
     
      <Hamburger toggled={isOpen} toggle={setOpen} />

      </div>
      <div className="mobileNav_text">
      <div className="mobileNav_menu_container">
        <ul
          className={`${
            isOpen ? "mobileNav_open" : "mobileNav_closed"
          } mobileNav_menu_list`}
        >
          <li><a href="#home" onClick={()=>setOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={()=>setOpen(false)}>About</a></li>
          <li><a href="#Resume" onClick={()=>setOpen(false)}>Resume</a></li>
          <li> <a href="#work">Work</a></li>
          <li><a href="#service">Services</a></li>
        </ul>
      </div>
      </div>
       <div className={`${
      isOpen ? "mobileNav_bg_open" : "mobileNav_bg_closed"
    } mobileNav_bg`}></div>
    </nav>
   
    </div>
    </>
  )
}

export default MobileMenubar