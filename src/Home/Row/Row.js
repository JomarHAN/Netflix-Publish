import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/genresSlice";
import "./Row.css";

function Row() {
  const genres = useSelector(selectGenres);

  return (
    <div className="row">
      {genres.map((genre) => (
        <h1>{genre.genreName}</h1>
      ))}
    </div>
  );
}

export default Row;
