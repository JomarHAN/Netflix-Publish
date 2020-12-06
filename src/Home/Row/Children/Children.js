import React, { useEffect, useState } from "react";
import "./Children.css";
import axios from "../../../dataMovie/axios";
import fetchMovie from "../../../dataMovie/request";

const img_url = "https://image.tmdb.org/t/p/original";

function Children({ id }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (id) {
      const getMovie = () =>
        axios
          .get(`${fetchMovie.listMovie}${id}`)
          .then((res) => setMovies(res.data.results));
      return getMovie();
    }
  }, [id]);

  return (
    <div className="children">
      {movies?.map((movie) => (
        <img key={movie.id} src={img_url + movie.poster_path} alt="" />
      ))}
    </div>
  );
}

export default Children;
