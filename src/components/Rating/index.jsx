import filledStarImg from "../../assets/star-filled.svg";
import unfilledStarImg from "../../assets/star-unfilled.svg";

import "./Rating.scss";

export default function Rating({ rating }) {
  const array = new Array(5).fill("");
  const starsArray = array.map((item, index) => {
    const src = index < rating ? filledStarImg : unfilledStarImg;
    return <img src={src} alt="" className="rating__star" key={index} />;
  });

  return <div className="rating">{starsArray}</div>;
}
