import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>We believe in learning outside the classroom than learning inside the classroom.</p>
        <button className='btn'>Explore More<img src={dark_arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
