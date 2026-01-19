import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";

/* Page Imports */


import paper from '../../assets/images/paper.png'

function Projects() {
  
  return (
    <>
    {/* style = {{backgroundImage:`url(${paper})`, backgroundSize: "contain"}} */}
<div className='tableContents'>
    <div className = "projectsTitle">
      Hala Haddadin's Portfolio
    </div>

    <div className="linkList">
      <Link to="/portfolio/Roosevelt">
          <button className = "button"> Roosevelt </button>
      </Link>

      <Link to="/portfolio/EastKing">
          <button className = "button"> East King </button>
      </Link>

      <Link to="/portfolio/Alaska">
          <button className = "button"> Alaska </button>
      </Link>

      <Link to="/portfolio/SystemicTower">
          <button className = "button"> Systemic Tower </button>
      </Link>

      <Link to="/portfolio/LochHaven">
          <button className = "button"> Loch Haven </button>
      </Link>

      <Link to="/portfolio/Michigan">
          <button className = "button"> Michigan </button>
      </Link>

          <Link to="/portfolio/BokTower">
          <button className = "button"> Bok Tower </button>
      </Link>

          <Link to="/portfolio/FormStudies">
          <button className = "button"> Form Studies </button>
      </Link>

      <div className='projectsBox'>

      </div>
    <div className='portfolioLink'>
      <Link to= "/portfolio/view">
        <i>view</i>
      </Link>
    </div>
</div>
    </div>
    </>
  )
}

export default Projects
