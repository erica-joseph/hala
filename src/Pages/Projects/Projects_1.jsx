import { useState, useRef, useEffect } from 'react'


/* Page Imports */

import portfolio from '../../assets/documents/portfolio.pdf'

function Projects() {
  
  return (
    <>
    <object className = 'resume' data={portfolio} type="application/pdf"></object>
    </>
  )
}

export default Projects
