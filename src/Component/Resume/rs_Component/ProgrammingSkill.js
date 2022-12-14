import React from 'react'
import SkillBar from 'react-skillbars';


import './programmingSkill.css'



const ProgrammingSkill = () => {
  const skills = [
    { type: 'HTML', level: 100 },
    { type: 'css', level: 95 },
    { type: 'Boostrap', level: 94 },
    { type: 'React-Boostrap', level: 93 },
    { type: 'Rsuite', level: 92 },
    { type: 'Javascript', level: 90 },
    { type: 'React', level: 85 },
    { type: 'Context Api', level: 85 },
    { type: 'Node.Js', level: 80 },
    { type: 'Express.Js', level: 80 },
    { type: 'MongoDB', level: 75 },
    { type: 'FireBase', level: 70 },
  ];



  return (
    <div className='ProgrammingSkill'>
     <div className='ProgrammingSkill_child'>
     <SkillBar skills={skills} height={17}  />
     </div>
    </div>
  )
}

export default ProgrammingSkill
