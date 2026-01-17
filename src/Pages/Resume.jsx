import { useState, useRef, useEffect } from 'react'
import '../App.css'

import resume from '/documents/resume.pdf'

function Resume() {
  
  return (
    <>
    <object className = 'resume' data={resume} type="application/pdf"></object>
    </>
  )
}

export default Resume