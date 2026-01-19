import { useState, useRef, useEffect } from 'react'
import '../App.css'

import resume from '/documents/resume.pdf'

function Resume() {

  const isSafari =
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  
  return (
    <>
    {!isSafari ? (
  <object className = 'resume' data={resume} type="application/pdf"></object>
) : (
  <div className="pdfFallback">
    <center><p>Preview not supported in Safari.</p></center>
    <a href = {resume} target = "_blank">
    <center><button className='buttonDownload'> Open in new tab</button></center>
    </a>
  </div>
)}

    </>
  )
}

export default Resume