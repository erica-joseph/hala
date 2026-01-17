import { useState, useRef, useEffect } from 'react'
import './App.css'

/* Page Imports */
import Routing from './Routing.jsx'
import { Link } from "react-router-dom";

import paper from './assets/images/paper.png'
import abstract from './assets/images/Background_Abstract_009.svg'

function App() {

  return (
    <>
    <div className = "main" style = {{backgroundImage:`url(${abstract})`}}>
      <div className='controlsNav'>
        <div className='logo'>
          <a href = "/" >hala</a>
        </div>
      <div className = 'navbar'>
      <Link to="/">
          <button className = "button"> Home </button>
      </Link>

      <Link to="/portfolio">
          <button className = "button"> Portfolio </button>
      </Link>    

      <Link to="/resume">
          <button className = "button"> Resume </button>
      </Link>

      <Link to="/about">
          <button className = "button"> About </button>
      </Link>
      </div>
      </div>

    {/* style = {{backgroundImage:`url(${paper})`, backgroundSize: "contain"}} */}
    <div className='pageContainer'>
      <Routing/>
    </div>
    <div className='credits'>
      <div className='creditsTitle'>Hala Haddadin</div>

      <div className='creditsLinks'>
        <a href = "mailto:@hala@haddadin.me"> @hala@haddadin.me </a>
            <a href = "https://www.linkedin.com/in/hala-haddadin-884407264"> @LinkedIn </a>
      </div>

      <div className='copy'>© Hala Haddadin, 2026</div>
    </div>
    </div>
    </>
  )
}

export default App
