import React from 'react'
import './education.css'
const Education = () => {
  return (
    <div className='education'>
       <div className='education_child'>
           <div className='education_flex'>
              <p className='education_left'><span className='education_round'></span><span className='education_text'>Daffodil International University</span><br></br><span className='education_subject'>Bsc in Computer Science & Engineering</span></p>
              <p className='education_right'>2018-2022</p>
           </div>

           <div className='education_flex'>
              <p className='education_left'><span className='education_round'></span><span className='education_text'>Trust School & College,Uttara,Dhaka</span><br></br><span className='education_subject'>Science</span></p>
              <p className='education_right'>2016-2018</p>
           </div>

           <div className='education_flex'>
              <p className='education_left'><span className='education_round'></span><span className='education_text'>Dhakeshwari Mills High School & College</span><br></br><span className='education_subject'>Science</span></p>
              <p className='education_right'>2014-2016</p>
           </div>
         
       </div>
    </div>
  )
}

export default Education
