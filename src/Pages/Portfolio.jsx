import { useState, useRef, useEffect } from 'react'
import '../App.css'

import portfolio from '../assets/documents/Portfolio.pdf'

function Portfolio() {
  
  return (
    <>
    <object className = 'resume' data={portfolio} type="application/pdf"></object>
    </>
  )
}

export default Portfolio