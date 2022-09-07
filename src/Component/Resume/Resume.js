import React, { useEffect, useState } from 'react'

import './resume.css'
import './mobileresume.css'

import Education from './rs_Component/Education';
import Workhistory from './rs_Component/Workhistory';
import ProgrammingSkill from './rs_Component/ProgrammingSkill';


const Resume = () => {
  const [slidereducation, setSliderEducation] = useState(true);
  const [sliderwork, setSliderWork] = useState(false);
  const [sliderSkill, setSliderSkill] = useState(false);
  const [sliderProject, setSliderProject] = useState(false);
  const [sliderinterest, setSliderInterest] = useState(false);
  
  let slideEducation=()=>{
    setSliderEducation(true)
    setSliderWork(false)
    setSliderSkill(false)
    setSliderProject(false)
    setSliderInterest(false)
  }
  let slideWorkhistory=()=>{
    setSliderEducation(false)
    setSliderWork(true)
    setSliderSkill(false)
    setSliderProject(false)
    setSliderInterest(false)
  }
  let slideProgramSkill=()=>{
    setSliderEducation(false)
    setSliderWork(false)
    setSliderSkill(true)
    setSliderProject(false)
    setSliderInterest(false)
  }
  let slideProject=()=>{
    setSliderEducation(false)
    setSliderWork(false)
    setSliderSkill(false)
    setSliderProject(true)
    setSliderInterest(false)
  }
  let slideInterest=()=>{
    setSliderEducation(false)
    setSliderWork(false)
    setSliderSkill(false)
    setSliderProject(false)
    setSliderInterest(true)
  }

  

  return (
    
    <div className='resume' id='Resume' style={{marginTop:"120px"}} >
       
        <h1>Resume</h1>
        <p className='resume_choose_me'>My Formal Bio Details</p>
        <p className='public_underline'> <span className='public_underline_span'><span></span></span></p>
        <div className='resume_flex container' style={{marginTop:"35px"}}>
         <div  className='resume_flex_left'>
            <div className='resume_left_icon'>
               
                <p className={`${slidereducation ? "resume_p_active" : "resume_p"} `} onClick={slideEducation} ><i className="fa-solid fa-user-graduate"></i></p>
                <p className={`${sliderwork ? "resume_p_active" : "resume_p" } `} onClick={slideWorkhistory}><i class="fa-solid fa-clock-rotate-left"></i></p>
                <p className={`${sliderSkill ? "resume_p_active" : "resume_p" } `} onClick={slideProgramSkill}><i class="fa-solid fa-computer"></i></p>
                <p className={`${sliderProject ? "resume_p_active" : "resume_p" } `} onClick={slideProject}><i class="fa-solid fa-up-right-from-square"></i></p>
                <p className={`${sliderinterest ? "resume_p_active" : "resume_p" } `}  onClick={slideInterest}><i class="fa-solid fa-child-reaching"></i></p>
              
            </div>
            <div className='resume_right_icon'>
             
            <p className={`${slidereducation ? "resume_p_active" : "resume_p"} `} onClick={slideEducation}><span>Education</span></p>
            <p className={`${sliderwork ? "resume_p_active" : "resume_p" } `} onClick={slideWorkhistory}><span>Work History</span></p>
            <p className={`${sliderSkill ? "resume_p_active" : "resume_p" } `} onClick={slideProgramSkill}><span>Programming Skills</span></p>
            <p className={`${sliderProject ? "resume_p_active" : "resume_p" } `} onClick={slideProject}><span>Project</span></p>
            <p className={`${sliderinterest ? "resume_p_active" : "resume_p" } `}  onClick={slideInterest}><span>Interest</span></p>
           
            </div>
           
        </div>


         <div   className='resume_flex_right'>
            <div className='resume_right'> 
                {slidereducation&&
                  <div>
                   <Education/>
                    </div>
              }
              {sliderwork&&
                 <div>
                 <Workhistory/>
                  </div>
              }
              {sliderSkill&&
                  <div>
                   <ProgrammingSkill/>
                    </div>
              }
              {sliderProject&&
                   <div >
                  <Workhistory/>
                    </div>  
              }

             {sliderinterest&&
                   <div>
                  <Education/>
                    </div>  
              }

            </div>
           </div>
      </div>
    </div>
  )
}

export default Resume
