import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import "./homepage.css"

function Homepage() {
  return (
    <div className='full-page'>
      <div className='outer-home'>
        <Navbar />
        <Home />
      </div>
        <Footer />
    </div>
  )
}

export default Homepage