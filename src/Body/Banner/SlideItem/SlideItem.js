import { Favorite, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./SlideItem.css";

const img_url = "https://image.tmdb.org/t/p/original";

function SlideItem({ title, overview, backdrop, vote, id }) {
  return (
    <div className="slideItem">
      <img src={img_url + backdrop} alt="" className="slideItem__backdrop" />
      <div className="slideItem__content">
        <h2 className="slideItem__title">{title}</h2>
        <p>
          Rating: <strong>{vote}</strong>
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
