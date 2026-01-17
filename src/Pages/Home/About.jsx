import { useState, useRef, useEffect } from 'react'


function About() {
  
  return (
    <>
    <div className='about'>
    <div className='aboutContainer'>
      <div className='aboutTitle'>
        about me | <div className='doorSubtext'>
            <a href = "mailto:@hala@haddadin.me"> @hala@haddadin.me </a>
            <a href = "https://www.linkedin.com/in/hala-haddadin-884407264"> @LinkedIn </a>
        </div>
      </div>
              
      <div className='aboutContent'>
              Final-year undergraduate architecture student at the
      University of Central Florida, blending innovative design
      with a strong foundation in architectural history. Work
      focuses on creating spaces that elevate human and
      community experiences while embracing the dynamic
      possibilities of emerging technologies. With hands-on
      studio experience and a minor in art history, each project
      is approached with a sensitivity to cultural context and
      future potential. Passionate about exploring the diverse
      dimensions of architecture and committed to the power of
      collaboration in shaping meaningful, transformative
      spaces.
      </div>
    </div>
    </div>
    </>
  )
}

export default About
