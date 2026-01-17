import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/Right_Arrow.svg'
import exit from '../../assets/images/Exit.svg'
import download from '../../assets/images/Download.svg'

import EastKing_001 from '../../assets/images/EastKing/EastKing_001.png'
import EastKing_002 from '../../assets/images/EastKing/EastKing_002.png'
import EastKing_003 from '../../assets/images/EastKing/EastKing_003.png'
import EastKing_004 from '../../assets/images/EastKing/EastKing_004.jpg'
import EastKing_005 from '../../assets/images/EastKing/EastKing_005.jpg'
import EastKing_006 from '../../assets/images/EastKing/EastKing_006.jpg'
import EastKing_007 from '../../assets/images/EastKing/EastKing_007.jpg'
import EastKing_008 from '../../assets/images/EastKing/EastKing_008.jpg'
import EastKing_009 from '../../assets/images/EastKing/EastKing_009.jpg'
import EastKing_010 from '../../assets/images/EastKing/EastKing_010.jpg'
import EastKing_011 from '../../assets/images/EastKing/EastKing_011.jpg'
import EastKing_012 from '../../assets/images/EastKing/EastKing_012.jpg'
import EastKing_013 from '../../assets/images/EastKing/EastKing_013.jpg'
import EastKing_014 from '../../assets/images/EastKing/EastKing_014.jpg'
import EastKing_015 from '../../assets/images/EastKing/EastKing_015.jpg'
import EastKing_016 from '../../assets/images/EastKing/EastKing_016.jpg'
import EastKing_017 from '../../assets/images/EastKing/EastKing_017.jpg'
import EastKing_018 from '../../assets/images/EastKing/EastKing_018.jpg'
import EastKing_019 from '../../assets/images/EastKing/EastKing_019.jpg'
import EastKing_020 from '../../assets/images/EastKing/EastKing_020.jpg'
import EastKing_021 from '../../assets/images/EastKing/EastKing_021.jpg'
import EastKing_022 from '../../assets/images/EastKing/EastKing_022.jpg'
import EastKing_023 from '../../assets/images/EastKing/EastKing_023.jpg'
import EastKing_024 from '../../assets/images/EastKing/EastKing_024.jpg'
import EastKing_025 from '../../assets/images/EastKing/EastKing_025.jpg'
import EastKing_026 from '../../assets/images/EastKing/EastKing_026.jpg'
import EastKing_027 from '../../assets/images/EastKing/EastKing_027.jpg'
import EastKing_028 from '../../assets/images/EastKing/EastKing_028.jpg'
import EastKing_029 from '../../assets/images/EastKing/EastKing_029.jpg'
import EastKing_030 from '../../assets/images/EastKing/EastKing_030.jpg'
import EastKing_031 from '../../assets/images/EastKing/EastKing_031.jpg'
import EastKing_032 from '../../assets/images/EastKing/EastKing_032.jpg'
import EastKing_033 from '../../assets/images/EastKing/EastKing_033.jpg'
import EastKing_034 from '../../assets/images/EastKing/EastKing_034.jpg'
import EastKing_035 from '../../assets/images/EastKing/EastKing_035.jpg'
import EastKing_036 from '../../assets/images/EastKing/EastKing_036.jpg'
import EastKing_037 from '../../assets/images/EastKing/EastKing_037.jpg'
import EastKing_038 from '../../assets/images/EastKing/EastKing_038.jpg'
import EastKing_039 from '../../assets/images/EastKing/EastKing_039.jpg'

function Project1({ portfolioPages}) {
  
  const [visible, setVisible] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const myPortfolio = [
    { id: 11, page: "EastKing", img: EastKing_001 },
    { id: 12, page: "EastKing", img: EastKing_002 },
    { id: 13, page: "EastKing", img: EastKing_003 },
    { id: 14, page: "EastKing", img: EastKing_004 },
    { id: 47, page: "EastKing", img: EastKing_037 },
    { id: 47, page: "EastKing", img: EastKing_039 }
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
          East King Street Maternity Center
        </div>
        <div className='paragraph'>
           Birthing suites gather around a daylight-filled communal hearth,
          transforming clinical care into a shared, celebratory journey that
          balances privacy with collective support.
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
        East King Street Maternity Center
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

export default Project1