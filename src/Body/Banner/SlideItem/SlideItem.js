import { Favorite, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./SlideItem.css";

function SlideItem({ name, overview, backdrop, rating }) {
  return (
    <div className="slideItem">
      <img src={backdrop} alt="" className="slideItem__backdrop" />
      <div className="slideItem__content">
        <h2 className="slideItem__title">{name}</h2>
        <p>
          Rating: <strong>{rating}</strong>
        </p>
        <div className="slideItem__buttons">
          <div className="slideItem__btnPlay">
            <PlayArrow />
          </div>
          <div className="slideItem__btnAdd">
            <Favorite />
          </div>
        </div>
        <p className="slideItem__overview">{overview}</p>
      </div>
    </div>
  );
}

export default SlideItem;
