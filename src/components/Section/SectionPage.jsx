import React from "react";
import './SectionPage.css'
import img1 from './section-img/img.jpg'
import img2 from './section-img/img1.jpg'
import img3 from './section-img/img2.jpg'
import img5 from './section-img/img4.jpg'
import img6 from './section-img/img5.jpg'
import img8 from './section-img/img7.jpg'
const RotatingGallery = () => {
  const imageContainerRef = React.useRef(null);
  let x = 0;

  const rotate = () => {
    imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  };

  const handlePrevClick = () => {
    x = x + 45;
    rotate();
  };

  const handleNextClick = () => {
    x = x - 45;
    rotate();
  };

  return (
    <div>
      <div className="image-container" ref={imageContainerRef}>
        <span style={{ "--i": 1 }}>
       <img src={img1} alt="" />
        </span>
        <span style={{ "--i": 2 }}>
        <img src={img2} alt="" />
        </span>
        <span style={{ "--i": 3 }}>
        <img src={img3} alt="" />
        </span>
        <span style={{ "--i": 4 }}>
        <img src={img2} alt="" />
        </span>
        <span style={{ "--i": 5 }}>
        <img src={img5} alt="" />
        </span>
        <span style={{ "--i": 6 }}>
        <img src={img6} alt="" />
        </span>
        <span style={{ "--i": 7 }}>
        <img src={img5  } alt="" />
        </span>
        <span style={{ "--i": 8 }}>
        <img src={img8} alt="" />
        </span>
      </div>

      <div className="btn-container">
        <button className="btn" id="prev" onClick={handlePrevClick}>Prev</button>
        <button className="btn" id="next" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default RotatingGallery;