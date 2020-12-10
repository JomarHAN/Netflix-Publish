import React, { useEffect, useState } from "react";
import "./ChildFavorite.css";
import axios from "../../dataMovie/axios";
import { API_KEY } from "../../dataMovie/request";
import { DeleteOutlined, PlayCircleOutline } from "@material-ui/icons";
import { IconButton, makeStyles, Modal } from "@material-ui/core";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setMovie } from "../../features/movieSlice";
import { delFavor } from "../../features/favorSlice";
import db from "../../firebase";
import { selectUser } from "../../features/userSlice";

const img_url = "https://image.tmdb.org/t/p/original";

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
    "@media (max-width: 768px)": {
      width: 600,
      height: 400,
    },
    "@media (max-width: 425px)": {
      width: 400,
      height: 300,
    },
  },
}));

function ChildFavorite({ movieId }) {
  const [movieInfo, setMovieInfo] = useState();
  const movieDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const movie = useSelector(selectMovie);
  const favorDispatch = useDispatch();
  const user = useSelector(selectUser);

  const fetchMovieInfo = async () => {
    await axios
      .get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((res) => setMovieInfo(res.data))
      .catch((err) => console.log(err.masseage));
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  const playMovie = () => {
    setOpen(true);
    const name = movieInfo.title;
    movieTrailer(name)
      .then((res) => {
        const movieUrl = new URLSearchParams(new URL(res).search);
        const movieKey = movieUrl.get("v");
        movieDispatch(setMovie(movieKey));
      })
      .catch((err) => console.log(err.message));
  };

  const opts = {
    width: 700,
    height: 500,
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClose = () => {
    setOpen(false);
    movieDispatch(setMovie(null));
  };

  const delMovie = () => {
    favorDispatch(delFavor(movieId));
    if (user) {
      const findEle = db
        .collection("dbfavorite")
        .doc(user.uid)
        .collection("dbmovie")
        .where("idmovie", "==", movieId);
      findEle
        .get()
        .then((snapshot) => snapshot.docs.map((doc) => doc.ref.delete()));
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          {movie ? (
            <Youtube className="youtube" videoId={movie} opts={opts} />
          ) : (
            <div className="noFound">
              <h1>
                Opps!! Sorry... <br /> No found this video in Youtube...
              </h1>
            </div>
          )}
        </div>
      </Modal>
      <div className="childfavorite">
        <div className="childfavorite__content">
          <div className="childfavorite__left">
            <img src={`${img_url}${movieInfo?.poster_path}`} alt="" />
            <div className="childfavorite__play">
              <IconButton onClick={playMovie}>
                <PlayCircleOutline />
              </IconButton>
            </div>
          </div>
          <div className="childfavorite__right">
            <div className="childfavorite__rightTitle">
              <h3>{movieInfo?.title}</h3>
              <div className="childfavorite__del">
                <IconButton onClick={delMovie}>
                  <DeleteOutlined />
                </IconButton>
              </div>
            </div>
            <h4>Rate: {movieInfo?.vote_average}</h4>
            <h4>Release: {movieInfo?.release_date}</h4>
            <p>{movieInfo?.overview}</p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default ChildFavorite;
