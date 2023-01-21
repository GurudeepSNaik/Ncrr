import React, { useRef } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const LinkRef=useRef()
  const toggle=()=> LinkRef.current.classList.toggle('show-links');

  return (
    <>
      <nav className="nav">
    <div className="nav-header">
      <h3 className="logo">Quenc<span>i</span>l</h3>
      <button type="button" onClick={toggle} className="nav-toggle">
       <GiHamburgerMenu className="logo"/>
      </button>
    </div>
    <div>
      <ul ref={LinkRef} className="links" id='link'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Career Camp</a></li>
        <li>
          <a href="#">Technical Courses</a>
        </li>
        <li>
          <a href="#">Non Technical Courses</a>
        </li>
        <li><a href="#">Training Journey</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </nav> 
    </>
  )
}

export default Navbar
