import { Favorite, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./SlideItem.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const img_url = "https://image.tmdb.org/t/p/original";

function SlideItem({ title, overview, backdrop, vote, id }) {
  const handlePlay = (e) => {
    const movieName = e.target.id;
    // console.log(movieName);
    movieTrailer(movieName).then((res) => {
      const urlParams = new URLSearchParams(new URL(res).search);
      const keyID = urlParams.get("v");
      console.log(keyID);
    });
  };

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
            <PlayArrow id={title} onClick={handlePlay} />
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
