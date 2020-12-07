import React, { useEffect, useState } from "react";
import "./Children.css";
import axios from "../../../dataMovie/axios";
import fetchMovie from "../../../dataMovie/request";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { removeGenre } from "../../../features/genresSlice";

const img_url = "https://image.tmdb.org/t/p/original";

export const listGenres = [
  {
    id: false,
    name: "--Select Genres--",
  },
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

function Children({ genreId }) {
  const [movies, setMovies] = useState();
  const [titles, setTitles] = useState();
  const genreDispatch = useDispatch();

  useEffect(() => {
    const result = listGenres.find(({ id }) => id === genreId);
    setTitles(result.name);
    if (genreId) {
      const getMovie = () =>
        axios
          .get(`${fetchMovie.listMovie}${genreId}`)
          .then((res) => setMovies(res.data.results));
      return getMovie();
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
          <img key={movie.id} src={img_url + movie.poster_path} alt="" />
        ))}
      </div>
    </>
  );
}

export default Children;
