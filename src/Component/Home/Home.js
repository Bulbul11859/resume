import React from 'react'
import Footer from './Footer/Footer'
import Profile from './Profile'
import './home.css'
import Menubar from '../Navbar/Menubar'
import MobileMenubar from '../Navbar/MobileMenubar'

const Home = () => {
  return (
    <div className='home-container' >
        <Menubar/>
        <MobileMenubar/>
        <Profile/>
        <Footer/>
     
       
    </div>
  )
}

export default Home