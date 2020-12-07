import React from "react";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/genresSlice";
import Children from "./Children/Children";
import "./Row.css";

function Row() {
  const genres = useSelector(selectGenres);

  return (
    <div className="row">
      {genres.map((genre) => (
        <div className="row__content" key={genre}>
          <Children genreId={genre} />
        </div>
      ))}
    </div>
  );
}

export default Row;
