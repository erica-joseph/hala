import { useState, useRef, useEffect } from 'react'

import bioArrow from '../../assets/images/ArrowIntro.svg'
function Bio() {
  
  return (
    <>
    <div className='bio'>
    <div className='bioContainer'>
      <div className='bioTitle'>
        Hala Haddadin
      </div>
  
      <div className='bioContent'>
        Architectural Design
      </div>

      <button className='bioButton'>
        <div className='bioText'>
          <div className="bioTextContent"> Explore my Portfolio</div>
          <img src = {bioArrow} className='bioArrow'/>
        </div>
        <div className='bioBox'>

        </div>
      </button>
    </div>
    </div>
    </>
  )
}

export default Bio