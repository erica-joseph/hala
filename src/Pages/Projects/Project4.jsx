import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/Right_Arrow.svg'
import exit from '../../assets/images/Exit.svg'
import download from '../../assets/images/Download.svg'

import Tower_001 from '../../assets/images/Tower/Tower_001.png'
import Tower_002 from '../../assets/images/Tower/Tower_002.png'
import Tower_003 from '../../assets/images/Tower/Tower_003.png'
import Tower_004 from '../../assets/images/Tower/Tower_004.png'
import Tower_005 from '../../assets/images/Tower/Tower_005.png'
import Tower_006 from '../../assets/images/Tower/Tower_006.png'
import Tower_007 from '../../assets/images/Tower/Tower_007.png'
import Tower_008 from '../../assets/images/Tower/Tower_008.png'

function Project4({ portfolioPages}) {
  
  const [visible, setVisible] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const myPortfolio = [
    { id: 86, page: "Tower", img: Tower_001 },
    { id: 87, page: "Tower", img: Tower_002 }
  ];

    const goToSectionRight = () => {
    const nextIndex = Math.min(currentIndex + 1, myPortfolio.length - 1);
    const el = document.getElementById(myPortfolio[nextIndex].id);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setCurrentIndex(nextIndex);
  };

  const goToSectionLeft = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    const el = document.getElementById(myPortfolio[prevIndex].id);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setCurrentIndex(prevIndex);
  };

  const popupClose = () => {
    setVisible(v => !v)
  }

  const turnLeft = () => {
    console.log("Turn left");
    setCurrentIndex((prev) =>
      (prev - 1 + myPortfolio.length) % myPortfolio.length
    );
  }

  const turnRight = () => {
    console.log("Turn right");
    setCurrentIndex((prev) =>
    (prev + 1) % myPortfolio.length
    );
  }

  return (
    <>
    <div className = "projectOneContainer">
      <div className= 'paragraphContainer'>
        <div className= 'paragraphTitle'>
          Systematic Tower
        </div>
        <div className='paragraph'>
           The interior organization begins with program points, which generate programmatic boxes that
define space. The vertices of these boxes are cross-referenced with the program points to
establish circulation, connecting the nearest points to
vertices, with density of connections increasing where program concentration is higher. The
midpoints of these
connections are then averaged to form a structural spine, which extends vertically through
the system to unify both program and circulation.</div><div className='paragraph'>
This structural logic is further informed by the relationship between interior and exterior
data. Program box points are cross-referenced with exterior data points, ensuring that only
areas with significant overlap produce an external skin. The exterior points simultaneously
control the degree of variation in the skin, linking the building’s outer expression to its
interior logic and data-driven organization
        </div>
      </div>
      <div className="carousel">
        {myPortfolio.map((pages, index) => (
          <div onClick={() => {
              setCurrentSlide(pages);
              setVisible(true);
            }} className="page" key={index}>
            <img className ="thumbnail" src = {pages.img} />
          </div>
        ))}
        
      {visible && currentSlide && (
      <div id = "myPopup" className="popupContainer">
        <div className='topControls'> 
        Roosevelt Island Towers
        <img className='exit' onClick={() => popupClose()} src = {exit}></img>
        </div>
        <div className="popup">
          <div className="popupContent">
            <div className = "popupControls">

            {/* 
            <button onClick={turnLeft}> left </button>
            </div>
            <img className ="canvas" src = {myPortfolio[currentIndex].img} />
            <div className = "popupControls">
            <button onClick={turnRight}> right </button>*/}
            </div>

      <div className='gallery'>
      <div className="carouselGallery">
              {myPortfolio.map((pages, index) => (
                <div onClick={() => {
                    setCurrentSlide(pages);
                    setVisible(true);
                  }} id = {pages.id} className="pageGallery" key={index}>
                  <a className ="linkGallery" href = {pages.img}>
                  <img className ="thumbnailGallery" src = {pages.img} />
                    </a>    
                </div>
              ))}
      </div>
      <div className='controlContainer'>
      <img
        onClick={goToSectionLeft}
        className='leftArrow'
        src={arrow}
      />
      East King
      <img
        onClick={goToSectionRight}
        className='rightArrow'
        src={arrow}
      />
      </div>
          </div>
        </div>
      </div>
</div>
      
      )}

      </div>
      
    </div>
    </>
  )
}

export default Project4