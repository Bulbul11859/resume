import React from 'react'
import SkillBar from 'react-skillbars';


import './programmingSkill.css'



const ProgrammingSkill = () => {
  const skills = [
    { type: 'HTML', level: 100 },
    { type: 'css', level: 95 },
    { type: 'Boostrap', level: 94 },
    { type: 'MUI', level: 93 },
    { type: 'Tawlind', level: 92 },
    { type: 'Javascript', level: 90 },
    { type: 'React', level: 85 },
    { type: 'Redux', level: 85 },
    { type: 'Node.Js', level: 80 },
    { type: 'Express.Js', level: 80 },
    { type: 'MongoDB', level: 75 },
    { type: 'FireBase', level: 75 },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9"
    }
  };

  return (
    <div className='ProgrammingSkill'>
     <div className='ProgrammingSkill_child'>
     <SkillBar skills={skills} height={17} colors={colors}/>
     </div>
    </div>
  )
}

export default ProgrammingSkill
