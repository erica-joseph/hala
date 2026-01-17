import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/Right_Arrow.svg'
import exit from '../../assets/images/Exit.svg'
import download from '../../assets/images/Download.svg'

import Alaska_001 from '../../assets/images/Alaska/Alaska_001.png'
import Alaska_002 from '../../assets/images/Alaska/Alaska_002.png'
import Alaska_003 from '../../assets/images/Alaska/Alaska_003.png'
import Alaska_004 from '../../assets/images/Alaska/Alaska_004.png'
import Alaska_005 from '../../assets/images/Alaska/Alaska_005.png'
import Alaska_006 from '../../assets/images/Alaska/Alaska_006.png'
import Alaska_007 from '../../assets/images/Alaska/Alaska_007.png'
import Alaska_008 from '../../assets/images/Alaska/Alaska_008.png'
import Alaska_009 from '../../assets/images/Alaska/Alaska_009.jpg'
import Alaska_010 from '../../assets/images/Alaska/Alaska_010.jpg'
import Alaska_011 from '../../assets/images/Alaska/Alaska_011.jpg'
import Alaska_012 from '../../assets/images/Alaska/Alaska_012.jpg'
import Alaska_013 from '../../assets/images/Alaska/Alaska_013.jpg'
import Alaska_014 from '../../assets/images/Alaska/Alaska_014.jpg'
import Alaska_015 from '../../assets/images/Alaska/Alaska_015.jpg'
import Alaska_016 from '../../assets/images/Alaska/Alaska_016.jpg'
import Alaska_017 from '../../assets/images/Alaska/Alaska_017.jpg'
import Alaska_018 from '../../assets/images/Alaska/Alaska_018.jpg'
import Alaska_019 from '../../assets/images/Alaska/Alaska_019.jpg'
import Alaska_020 from '../../assets/images/Alaska/Alaska_020.jpg'
import Alaska_021 from '../../assets/images/Alaska/Alaska_021.jpg'
import Alaska_022 from '../../assets/images/Alaska/Alaska_022.jpg'
import Alaska_023 from '../../assets/images/Alaska/Alaska_023.jpg'
import Alaska_024 from '../../assets/images/Alaska/Alaska_024.jpg'
import Alaska_025 from '../../assets/images/Alaska/Alaska_025.jpg'
import Alaska_026 from '../../assets/images/Alaska/Alaska_026.jpg'
import Alaska_027 from '../../assets/images/Alaska/Alaska_027.jpg'
import Alaska_028 from '../../assets/images/Alaska/Alaska_028.jpg'
import Alaska_029 from '../../assets/images/Alaska/Alaska_029.jpg'
import Alaska_030 from '../../assets/images/Alaska/Alaska_030.jpg'
import Alaska_031 from '../../assets/images/Alaska/Alaska_031.jpg'
import Alaska_032 from '../../assets/images/Alaska/Alaska_032.jpg'
import Alaska_033 from '../../assets/images/Alaska/Alaska_033.jpg'
import Alaska_034 from '../../assets/images/Alaska/Alaska_034.jpg'
import Alaska_035 from '../../assets/images/Alaska/Alaska_035.jpg'
import Alaska_036 from '../../assets/images/Alaska/Alaska_036.jpg'
import Alaska_037 from '../../assets/images/Alaska/Alaska_037.jpg'

function Project3({ portfolioPages}) {
  
  const [visible, setVisible] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const myPortfolio = [
    { id: 49, page: "Alaska", img: Alaska_001 },
    { id: 50, page: "Alaska", img: Alaska_002 },
    { id: 57, page: "Alaska", img: Alaska_009 },
    { id: 62, page: "Alaska", img: Alaska_014 },
    { id: 78, page: "Alaska", img: Alaska_030 }
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
          Alaska Physical Therapy & Community Center
        </div>
        <div className='paragraph'>
           A glazed atrium acts as a social crossroads, where bridging
walkways link the cultural wing and therapy wing, offering
sheltered views of the tundra that connects tourists and locals
to the past and future of the land.
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
        Alaska Physical Therapy & Community Center
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