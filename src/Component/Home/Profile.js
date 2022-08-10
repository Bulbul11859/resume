import React, { Component } from 'react'
import Typical from 'react-typical'
import './Profile.css'



const Profile = () => {
  return (
    <div className='profile-container' id='home'>
       <div className='profile-parent'>
        <div className='profile-details'>
            <div className='clz'>
                <div className='clz-icon'>
                    <a href='https://www.facebook.com/swiftness.BB/'>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href='#'>
                    <i className="fa-brands fa-github"></i>
                    </a>
                    <a href='#'>
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href='#'>
                    <i className="fa-brands fa-youtube"></i>
                    </a>

                </div>

            </div>
            <div className='profile-details-name'>
               <span className='primary-text'>
                 {" "}
                 Hello, I'M<span className='highlighted-text'>{" "}Bulbul Rahman</span>
               </span>
              
            </div>
            <div className='profile-details-role'>
               <span className='primary-text'>
                 {" "}
                 <h1>
                 <Typical
                 
                        steps={[
                            'MERN Developer!',
                        2000, 
                         'Full Stack Developer!', 
                        2000,
                         'React Developer!',
                        2000, 
                         'Full Stack Developer!', 
                        2000]}
                         loop={Infinity}
                         wrapper="span"
                       />
                 </h1>
                <span className='profile-role-tagline'>
                    kanck of building applications with fornt and back end
                </span>
               </span>
              
            </div>
            <div className='profile-options'>
              <button className='btn primary-btn'>
                {" "}
                Hire me{" "}
              </button>
              <a href='Cv.pdf' download="Cv.pdf">
              <button className='btn highlighted-btn'> Get Resume</button>
              </a>
             
            </div>
         </div>

         <div className='profile-picture'>
            <div className='profile-picture-background'>
                  
            </div>

         </div>
       </div>
    </div>
  )
}

export default Profile