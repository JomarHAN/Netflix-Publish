import React from "react";
import "./SlideItem.css";

function SlideItem({ name, overview, backdrop }) {
  return (
    <div className="slideItem">
      <img src={backdrop} alt="" className="slideItem__backdrop" />
      <div className="slideItem__content">
        <h2 className="slideItem__title">{name}</h2>
        <p className="slideItem__overview">{overview}</p>
      </div>
    </div>
  );
}

export default SlideItem;
