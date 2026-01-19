import { useState, useRef, useEffect } from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import portfolio from '/documents/Portfolio.pdf'

function Portfolio() {

    const isSafari =
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  return (
    <>

    {!isSafari ? (
  <object className = 'resume' data={portfolio} type="application/pdf"></object>
) : (
  <div className="pdfFallback">
    <p>Preview not supported in Safari.</p>
    <a href = {portfolio} target = "_blank">
    <center><button className='buttonDownload'> Open in new tab</button></center>
    </a>
  </div>
)}
    </>
  )
}

export default Portfolio