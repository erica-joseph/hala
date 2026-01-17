import { useState, useRef, useEffect } from 'react'

import retGradient from '../../assets/images/RetGradient.svg'

function Header() {
  
  return (
    <>
    <div className='headerContainer'>
      <div className='doorContainer'>
        <div className='doorContent'  style = {{backgroundImage: `url(${retGradient})`}}>
          <div className='doorFirstName'>
            ha
            <br></br>
            la
          </div>
          <div className='doorLastName'>
            haddadin
          </div>
        </div>

   
      </div>
    </div>
    </>
  )
}

export default Header
