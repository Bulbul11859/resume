import React from 'react'
import './about.css'
import './mobileAbout.css'

const About = () => {
  return (
    <div className='about' id='About'>
      <h1>About Me</h1>
      <p className='about_choose_me'>Why Choose Me?</p>
      <p className='public_underline'> <span className='public_underline_span'><span></span></span></p>
      <div className='about_flex container' >
        <div className='about_left'> 
          <div className='about_image'></div>
        </div>
        <div className='about_right'>
          <div className='about_right_Text'>
            <p>
              I am Bulbul Rahman.I am a Full stack web  and mobile developer with background knowledge of MERN stacks with redux,context api,along with a knack of building applications with utmost efficiency .
              <br/>
              <br/>
              <br/>
              <br/>
              <span style={{display:"block",fontSize:"17px"}}>
                Here are a Few Highlights:
              </span>
              
              <span style={{display:"flex",alignItems:"center",marginTop:"7px"}} ><span className='about_right_circle'></span>Full Stack Web and mobile development</span>
              <span style={{display:"flex",alignItems:"center",marginTop:"7px"}}><span className='about_right_circle'></span>Front End,With React and React Native </span>
              <span style={{display:"flex",alignItems:"center",marginTop:"7px"}}><span className='about_right_circle'></span>Back End,With Node js,Express Js</span>
              <span style={{display:"flex",alignItems:"center",marginTop:"7px"}}><span className='about_right_circle'></span>Redux For State Management</span>
              <span style={{display:"flex",alignItems:"center",marginTop:"7px"}}><span className='about_right_circle'></span>Bulding Rest Api</span>
              <span style={{display:"flex",alignItems:"center",marginTop:"7px"}}><span className='about_right_circle'></span>Managing Database</span>
           
            
             
           
            </p>
            <div className='about_right_btn'>
           
            <button className='btn primary-btn about_btn'>
                {" "}
                Hire me{" "}
              </button>
              <a href='Cv.pdf' download="Cv.pdf" className='about_highlighted-btn'>
              <button className='btn highlighted-btn about_btn'> Get Resume</button>
              </a>
            
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About