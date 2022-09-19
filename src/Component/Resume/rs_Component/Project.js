import React from 'react'
import './project.css'
import project1 from '../../../assets/About/project1.PNG'
const Project = () => {
  return (
    <div>
        <h1>ufhuef</h1>
        <a href='https://crisboarna.github.io/react-skillbars/docs/props/animation' target="_blank">
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={project1}  style={{width:"200px",height:"200px"}}/>
      <p>E-Commerce Project <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
</a>



    </div>
  )
}

export default Project
