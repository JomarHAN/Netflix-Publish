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
        <div className="row__content" key={genre.id}>
          <h1>{genre.genreName}</h1>
          <Children id={genre.id} />
        </div>
      ))}
    </div>
  );
}

export default Row;
