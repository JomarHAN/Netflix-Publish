import React, { useEffect, useState } from "react";
import "./Children.css";
import axios from "../../../dataMovie/axios";
import fetchMovie from "../../../dataMovie/request";
import { IconButton, makeStyles, Modal } from "@material-ui/core";
import { Delete, Favorite, PlayArrow } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeGenre } from "../../../features/genresSlice";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import { selectMovie, setMovie } from "../../../features/movieSlice";
import { selectUser } from "../../../features/userSlice";
import db from "../../../firebase";
import { selectFavorId, setFavorId } from "../../../features/favorSlice";

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

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    height: 500,
    boxShadow: theme.shadows[5],
  },
}));

function Children({ genreId }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [movies, setMovies] = useState();
  const [titles, setTitles] = useState();
  const genreDispatch = useDispatch();
  const movieDispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);
  const favorDispatch = useDispatch();
  const favorId = useSelector(selectFavorId);

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

  const handlePlay = (e) => {
    setOpen(true);

    const movieId = e.target.id;

    movieTrailer(movieId)
      .then((res) => {
        const paramUrl = new URLSearchParams(new URL(res).search);
        const movieKey = paramUrl.get("v");
        movieDispatch(setMovie(movieKey));
      })
      .catch((err) => console.log(err.message));
  };

  const handleClose = () => {
    setOpen(false);
    movieDispatch(setMovie(null));
  };

  const opts = {
    width: 700,
    height: 500,
    playerVars: {
      autoplay: 1,
    },
  };

  const addFavor = (e) => {
    favorDispatch(setFavorId(e.target.id));
    db.collection("dbfavorite")
      .doc(user.uid)
      .collection("dbmovie")
      .add({ id: e.target.id });
  };

  useEffect(() => {
    if (user) {
      if (favorId) {
        db.collection("dbfavorite")
          .doc(user.id)
          .collection("dbmovie")
          .onSnapshot((snapshot) =>
            snapshot.docs.map((doc) => console.log(doc))
          );
      }
    }
  }, [user, favorId]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          {movie ? (
            <Youtube videoId={movie} opts={opts} />
          ) : (
            <div className="noFound">
              <h1>
                Opps!! Sorry... <br /> No found this video in Youtube...
              </h1>
            </div>
          )}
        </div>
      </Modal>
      <div className="children__title">
        <h1>{titles}</h1>
        <IconButton onClick={handleRemove}>
          <Delete />
        </IconButton>
      </div>
      <div className="children">
        {movies?.map((movie) => (
          <div className={`children__item`} key={movie.id}>
            <h1 className="popup">{movie.title}</h1>
            <img src={img_url + movie.poster_path} alt="" />
            <div className="children__button">
              <div className="children__button-play">
                <PlayArrow id={movie.title} onClick={handlePlay} />
              </div>
              <div className="children__button-favorite">
                <Favorite id={movie.id} onClick={addFavor} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Children;
