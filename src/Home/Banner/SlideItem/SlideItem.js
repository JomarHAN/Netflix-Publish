import { Favorite, PlayArrow } from "@material-ui/icons";
import React, { useState } from "react";
import "./SlideItem.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie, setMovie } from "../../../features/movieSlice";
import { makeStyles, Modal } from "@material-ui/core";
import {
  addFavor,
  selectFavor,
  setFavorId,
} from "../../../features/favorSlice";
import db from "../../../firebase";
import { selectUser } from "../../../features/userSlice";

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
  },
}));

function SlideItem({ title, overview, backdrop, vote, id }) {
  const movieDispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const favorDispatch = useDispatch();
  const favors = useSelector(selectFavor);
  const user = useSelector(selectUser);

  const handlePlay = (e) => {
    setOpen(true);
    const movieName = e.target.id;

    movieTrailer(movieName)
      .then((res) => {
        const urlParams = new URLSearchParams(new URL(res).search);
        const keyID = urlParams.get("v");

        movieDispatch(setMovie(keyID));
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
    favorDispatch(setFavorId(id));
    if (favors.indexOf(id) === -1) {
      favorDispatch(addFavor(id));
      db.collection("dbfavorite")
        .doc(user.uid)
        .collection("dbmovie")
        .add({ idmovie: id });
    } else {
      alert("It has already added!");
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          {movie && <Youtube videoId={movie} opts={opts} />}
        </div>
      </Modal>
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
              <Favorite onClick={sendFavor} />
            </div>
          </div>
          <p className="slideItem__overview">{overview}</p>
        </div>
      </div>
    </>
  );
}

export default SlideItem;
