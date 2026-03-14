import { useState, useContext, createContext } from "react";

import "./Collapse.scss";
import arrowImg from "../../assets/arrow.svg";

const CollapseContext = createContext();

function Collapse({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const classes = isOpen ? "collapse collapse--open" : "collapse";

  return (
    <CollapseContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={classes}>{children}</div>
    </CollapseContext.Provider>
  );
}

function CollapseTop({ children }) {
  const { isOpen, setIsOpen } = useContext(CollapseContext);

  return (
    <div className="collapse__top">
      <div className="collapse__title">{children}</div>
      <button
        aria-label={isOpen ? "fermer" : "ouvrir"}
        className="collapse__btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={arrowImg} alt="" className="collapse__btn-img" />
      </button>
    </div>
  );
}

function CollapseContent({ children }) {
  return (
    <div className="collapse__content">
      <div className="collapse__content-container">{children}</div>
    </div>
  );
}

Collapse.Top = CollapseTop;
Collapse.Content = CollapseContent;
export default Collapse;
