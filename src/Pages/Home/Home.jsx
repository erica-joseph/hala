import { useState, useRef, useEffect } from 'react'

/* Page Imports */
import About from './About.jsx'
import Header from './Header.jsx'
import Bio from './Bio.jsx'


function Home() {
  return (
    <>
    <div className='home'>
      {/* 
      <div className='header'>
        <Header/>
      </div>
      */}
      <div className='bio'>
        <Bio/>
      </div>    
    </div>
    </>
  )
}

export default Home
