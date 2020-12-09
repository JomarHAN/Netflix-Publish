import React, { useEffect, useState } from "react";
import "./Children.css";
import axios from "../../../dataMovie/axios";
import fetchMovie, { listGenres } from "../../../dataMovie/request";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { removeGenre } from "../../../features/genresSlice";
import Grandchild from "../GrandChild/Grandchild";

function Children({ genreId }) {
  const [movies, setMovies] = useState();
  const [titles, setTitles] = useState();
  const genreDispatch = useDispatch();

  const getMovie = async () => {
    await axios
      .get(`${fetchMovie.listMovie}${genreId}`)
      .then((res) => setMovies(res.data.results));
  };

  useEffect(() => {
    if (genreId) {
      const result = listGenres.find(({ id }) => id.toString() === genreId);
      setTitles(result.name);
      getMovie();
    }
  }, [genreId]);

  const handleRemove = () => {
    genreDispatch(removeGenre(genreId));
  };

  return (
    <>
      <div className="children__title">
        <h1>{titles}</h1>
        <IconButton onClick={handleRemove}>
          <Delete />
        </IconButton>
      </div>
      <div className="children">
        {movies?.map((movie) => (
          <Grandchild key={movie.id} data={movie} />
        ))}
      </div>
    </>
  );
}

export default Children;
