import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/Right_Arrow.svg'
import exit from '../../assets/images/Exit.svg'
import download from '../../assets/images/Download.svg'

import LochHaven_002 from '../../assets/images/LochHaven/LochHaven_001.png'
import LochHaven_001 from '../../assets/images/LochHaven/LochHaven_002.png'
import LochHaven_003 from '../../assets/images/LochHaven/LochHaven_003.jpg'
import LochHaven_004 from '../../assets/images/LochHaven/LochHaven_004.jpg'
import LochHaven_005 from '../../assets/images/LochHaven/LochHaven_005.jpg'
import LochHaven_006 from '../../assets/images/LochHaven/LochHaven_006.png'
import LochHaven_007 from '../../assets/images/LochHaven/LochHaven_007.png'
import LochHaven_008 from '../../assets/images/LochHaven/LochHaven_008.png'
import LochHaven_009 from '../../assets/images/LochHaven/LochHaven_009.png'
import LochHaven_010 from '../../assets/images/LochHaven/LochHaven_010.png'
import LochHaven_011 from '../../assets/images/LochHaven/LochHaven_011.png'
import LochHaven_012 from '../../assets/images/LochHaven/LochHaven_012.png'
import LochHaven_013 from '../../assets/images/LochHaven/LochHaven_013.png'
import LochHaven_014 from '../../assets/images/LochHaven/LochHaven_014.png'
import LochHaven_015 from '../../assets/images/LochHaven/LochHaven_015.png'
import LochHaven_016 from '../../assets/images/LochHaven/LochHaven_016.png'
import LochHaven_017 from '../../assets/images/LochHaven/LochHaven_017.png'
import LochHaven_018 from '../../assets/images/LochHaven/LochHaven_018.png'
import LochHaven_019 from '../../assets/images/LochHaven/LochHaven_019.jpg'
import LochHaven_020 from '../../assets/images/LochHaven/LochHaven_020.jpg'
import LochHaven_021 from '../../assets/images/LochHaven/LochHaven_021.jpg'
import LochHaven_022 from '../../assets/images/LochHaven/LochHaven_022.jpg'
import LochHaven_023 from '../../assets/images/LochHaven/LochHaven_023.jpg'
import LochHaven_024 from '../../assets/images/LochHaven/LochHaven_024.jpg'
import LochHaven_025 from '../../assets/images/LochHaven/LochHaven_025.jpg'
import LochHaven_026 from '../../assets/images/LochHaven/LochHaven_026.jpg'
import LochHaven_027 from '../../assets/images/LochHaven/LochHaven_027.jpg'
import LochHaven_028 from '../../assets/images/LochHaven/LochHaven_028.jpg'
import LochHaven_029 from '../../assets/images/LochHaven/LochHaven_029.jpg'
import LochHaven_030 from '../../assets/images/LochHaven/LochHaven_030.jpg'
import LochHaven_031 from '../../assets/images/LochHaven/LochHaven_031.jpg'
import LochHaven_032 from '../../assets/images/LochHaven/LochHaven_032.jpg'
import LochHaven_033 from '../../assets/images/LochHaven/LochHaven_033.jpg'
import LochHaven_034 from '../../assets/images/LochHaven/LochHaven_034.jpg'
import LochHaven_035 from '../../assets/images/LochHaven/LochHaven_035.jpg'
import LochHaven_036 from '../../assets/images/LochHaven/LochHaven_036.jpg'
import LochHaven_037 from '../../assets/images/LochHaven/LochHaven_037.jpg'
import LochHaven_038 from '../../assets/images/LochHaven/LochHaven_038.jpg'
import LochHaven_039 from '../../assets/images/LochHaven/LochHaven_039.jpg'
import LochHaven_040 from '../../assets/images/LochHaven/LochHaven_040.jpg'
import LochHaven_041 from '../../assets/images/LochHaven/LochHaven_041.jpg'
import LochHaven_042 from '../../assets/images/LochHaven/LochHaven_042.jpg'
import LochHaven_043 from '../../assets/images/LochHaven/LochHaven_043.jpg'
import LochHaven_044 from '../../assets/images/LochHaven/LochHaven_044.jpg'
import LochHaven_045 from '../../assets/images/LochHaven/LochHaven_045.jpg'
import LochHaven_046 from '../../assets/images/LochHaven/LochHaven_046.jpg'
import LochHaven_047 from '../../assets/images/LochHaven/LochHaven_047.jpg'
import LochHaven_048 from '../../assets/images/LochHaven/LochHaven_048.jpg'
import LochHaven_049 from '../../assets/images/LochHaven/LochHaven_049.jpg'
import LochHaven_050 from '../../assets/images/LochHaven/LochHaven_050.jpg'
import LochHaven_051 from '../../assets/images/LochHaven/LochHaven_051.jpg'
import LochHaven_052 from '../../assets/images/LochHaven/LochHaven_052.jpg'

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