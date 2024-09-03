import React from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-280} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-160} duration={500}>About Us</Link> </li>
            <li><Link to='campus' smooth={true} offset={-280} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link className='btn' to='contact' smooth={true} offset={-250} duration={500}>Contact US</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
