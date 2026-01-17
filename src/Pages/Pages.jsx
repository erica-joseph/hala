import { useState, useRef, useEffect } from 'react'
import './App.css'

/* Page Imports */
import About from './Pages/About.jsx'
import Header from './Pages/Header.jsx'
import Routing from './Routing.jsx'
import Resume from './Pages/Resume.jsx'
import Project1 from './Pages/Project1.jsx'
import Project2 from './Pages/Project2.jsx'
import Project3 from './Pages/Project3.jsx'
import Project4 from './Pages/Project4.jsx'
import Project5 from './Pages/Project5.jsx'

import page1 from './assets/images/Test/Portfoliov4_Page_01.png'
import page2 from './assets/images/Test/Portfoliov4_Page_02.png'
import page3 from './assets/images/Test/Portfoliov4_Page_03.png'
import page5 from './assets/images/Test/Portfoliov4_Page_05.png'
import page6 from './assets/images/Test/Portfoliov4_Page_06.png'
import page7 from './assets/images/Test/Portfoliov4_Page_07.png'
import page8 from './assets/images/Test/Portfoliov4_Page_08.png'

import paper from './assets/images/paper.png'

function Pages() {

  const portfolioPages =[
    [{id: 1, page: "First AHHH", img: page1},
    {id: 2, page: "Second", img: page2},
    {id: 3, page: "Third", img: page3},
    {id: 4, page: "Fourth", img: page5}],
    [{id: 5, page: "Fifth", img: page6},
    {id: 6, page: "Sixth", img: page7},
    {id: 7, page: "Seventh", img: page8},
    {id: 8, page: "Eigth", img: page8}],
  ]
  
  return (
    <>
    {/* style = {{backgroundImage:`url(${paper})`, backgroundSize: "contain"}} */}
    <div className='pageContainer'>

      <div className='resume'>
        <Resume/>
      </div>
      
      
      <div className='projectOne'>
        <Project1 portfolioPages={portfolioPages}/>
      </div>
      <div className='projectOne'>
        <Project2 portfolioPages={portfolioPages}/>
      </div>
      <div className='projectOne'>
        <Project3 portfolioPages={portfolioPages}/>
      </div>
      <div className='projectOne'>
        <Project4 portfolioPages={portfolioPages}/>
      </div>
      <div className='projectOne'>
        <Project5 portfolioPages={portfolioPages}/>
      </div>

    </div>
    </>
  )
}

export default Pages