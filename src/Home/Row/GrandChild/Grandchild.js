import { Favorite, PlayArrow } from "@material-ui/icons";
import React, { useState } from "react";
import "./Grandchild.css";
import movieTrailer from "movie-trailer";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import {
  setFavorId,
  addFavor,
  selectFavor,
} from "../../../features/favorSlice";
import { selectMovie, setMovie } from "../../../features/movieSlice";
import { makeStyles, Modal } from "@material-ui/core";
import Youtube from "react-youtube";
import db from "../../../firebase";

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

function Grandchild({ data }) {
  const movieDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const movie = useSelector(selectMovie);
  const [modalStyle] = useState(getModalStyle);
  const user = useSelector(selectUser);
  const favorDispatch = useDispatch();
  const favors = useSelector(selectFavor);

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

  const sendFavor = () => {
    favorDispatch(setFavorId(data.id));
    if (favors.indexOf(data.id) === -1) {
      favorDispatch(addFavor(data.id));
      db.collection("dbfavorite")
        .doc(user.uid)
        .collection("dbmovie")
        .add({ idmovie: data.id });
    } else {
      alert("It has already added!");
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
      <div className="grandchild">
        <div className="grandchild__item" key={data.id}>
          <img src={img_url + data.poster_path} alt="" />
          <div className="grandchild__button">
            <div className="grandchild__button-play">
              <PlayArrow id={data.title} onClick={handlePlay} />
            </div>
            <div className="grandchild__button-favorite">
              <Favorite id={data.id} onClick={sendFavor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grandchild;
