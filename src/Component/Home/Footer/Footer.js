import React from 'react'
import './footer.css'
import image from '../../../assets/Home/shape.png'

const Footer = () => {
  return (
    <div className='home_footer'>
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={image} alt='no internat'/> 
        </div>
      
    </div>
    <div className='home_footer_overflow'></div>
    </div>
  )
}

export default Footer