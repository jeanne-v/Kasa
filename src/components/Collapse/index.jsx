import { useState } from "react";

import "./Collapse.scss";
import arrowImg from "../../assets/arrow.svg";

export default function Collapse({ title, titleType, children }) {
  const [isOpen, setIsOpen] = useState(false);

  let titleEl;
  if (titleType === "h2") {
    titleEl = <h2 className="collapse__title">{title}</h2>;
  } else {
    titleEl = <p className="collapse__title">{title}</p>;
  }

  const classes = isOpen ? "collapse collapse--open" : "collapse";

  return (
    <div className={classes}>
      <div className="collapse__top">
        {titleEl}
        <button
          aria-label={isOpen ? "fermer" : "ouvrir"}
          className="collapse__btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={arrowImg} alt="" className="collapse__btn-img" />
        </button>
      </div>
      <div className="collapse__content">
        <div className="collapse__content-container">{children}</div>
      </div>
    </div>
  );
}
