import { useState } from "react";

import "./SlideShow.scss";
import arrowPrevImg from "../../assets/arrow-prev.svg";
import arrowNextImg from "../../assets/arrow-next.svg";

export default function SlideShow({ pictures }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function handleBtnClick(direction) {
    if (direction === "prev") {
      if (currentImgIndex > 0) {
        setCurrentImgIndex(currentImgIndex - 1);
      } else {
        setCurrentImgIndex(pictures.length - 1);
      }
    } else {
      if (currentImgIndex === pictures.length - 1) {
        setCurrentImgIndex(0);
      } else {
        setCurrentImgIndex(currentImgIndex + 1);
      }
    }
  }

  return (
    <div className="slideshow">
      <div
        className="slideshow__slides"
        style={{ transform: `translateX(-${100 * currentImgIndex}%)` }}
      >
        {pictures.map((pic, index) => {
          return (
            <div
              key={index}
              className="slideshow__slide"
              style={{ backgroundImage: `url(${pic})` }}
            ></div>
          );
        })}
      </div>
      {pictures.length > 1 && (
        <div className="slideshow__controls">
          <button className="slideshow__arrow-btn" onClick={() => handleBtnClick("prev")}>
            <img alt="précédent" src={arrowPrevImg} />
          </button>
          <p className="slideshow__number">
            {currentImgIndex + 1} / {pictures.length}
          </p>
          <button className="slideshow__arrow-btn" onClick={() => handleBtnClick("next")}>
            <img alt="suivant" src={arrowNextImg} />
          </button>
        </div>
      )}
    </div>
  );
}
