import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/Right_Arrow.svg'
import exit from '../../assets/images/Exit.svg'
import download from '../../assets/images/Download.svg'

import LochHaven_002 from '/LochHaven/LochHaven_001.png'
import LochHaven_001 from '/LochHaven/LochHaven_002.png'
import LochHaven_003 from '/LochHaven/LochHaven_003.jpg'
import LochHaven_004 from '/LochHaven/LochHaven_004.jpg'
import LochHaven_005 from '/LochHaven/LochHaven_005.jpg'
import LochHaven_009 from '/LochHaven/LochHaven_009.png'
import LochHaven_014 from '/LochHaven/LochHaven_014.png'
import LochHaven_015 from '/LochHaven/LochHaven_015.png'
import LochHaven_016 from '/LochHaven/LochHaven_016.png'

function Project3({ portfolioPages}) {
  
  const [visible, setVisible] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const myPortfolio = [
    { id: 94, page: "LochHaven", img: LochHaven_001 },
    { id: 95, page: "LochHaven", img: LochHaven_002 },
    { id: 96, page: "LochHaven", img: LochHaven_003 },
    { id: 97, page: "LochHaven", img: LochHaven_004 },
    { id: 98, page: "LochHaven", img: LochHaven_005 },
    { id: 102, page: "LochHaven", img: LochHaven_009 },
    { id: 107, page: "LochHaven", img: LochHaven_014 },
    { id: 108, page: "LochHaven", img: LochHaven_015 },
    { id: 109, page: "LochHaven", img: LochHaven_016 }
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
          Loch Haven Park Educational
Pavilion & Cardiovascular
Wellness Complex
        </div>
        <div className='paragraph'>
          Tiered floor levels and rooftops map exertion to immersive AR visualizations of
heart activity, turning movement itself into an exhibit that invites visitors to learn,
play, and care for their cardiovascular health.
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

export default Project3