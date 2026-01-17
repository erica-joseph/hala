import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/Right_Arrow.svg'
import exit from '../../assets/images/Exit.svg'
import download from '../../assets/images/Download.svg'

import Michigan_001 from '../../assets/images/Michigan/Michigan_001.png'
import Michigan_002 from '../../assets/images/Michigan/Michigan_002.png'
import Michigan_003 from '../../assets/images/Michigan/Michigan_003.jpg'
import Michigan_004 from '../../assets/images/Michigan/Michigan_004.jpg'
import Michigan_005 from '../../assets/images/Michigan/Michigan_005.jpg'
import Michigan_006 from '../../assets/images/Michigan/Michigan_006.jpg'
import Michigan_007 from '../../assets/images/Michigan/Michigan_007.jpg'
import Michigan_008 from '../../assets/images/Michigan/Michigan_008.jpg'
import Michigan_009 from '../../assets/images/Michigan/Michigan_009.jpg'
import Michigan_010 from '../../assets/images/Michigan/Michigan_010.jpg'

function Project3({ portfolioPages}) {
  
  const [visible, setVisible] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const myPortfolio = [
    { id: 146, page: "Michigan", img: Michigan_001 },
    { id: 147, page: "Michigan", img: Michigan_002 },
    { id: 148, page: "Michigan", img: Michigan_003 },
    { id: 149, page: "Michigan", img: Michigan_004 },
    { id: 150, page: "Michigan", img: Michigan_005 },
    { id: 151, page: "Michigan", img: Michigan_006 },
    { id: 152, page: "Michigan", img: Michigan_007 },
    { id: 153, page: "Michigan", img: Michigan_008 },
    { id: 154, page: "Michigan", img: Michigan_009 },
    { id: 155, page: "Michigan", img: Michigan_010 }
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
          Michigan Environmental Residential Study
        </div>
        <div className='paragraph'>
            Aiming to show that passive strategies alone can drive
performance and year-round comfort.
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