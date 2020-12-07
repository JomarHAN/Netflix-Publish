import { makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { selectMovie, setMovie } from "./features/movieSlice";

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

function YoutubePlay() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const movie = useSelector(selectMovie);
  const movieDispatch = useDispatch();

  console.log(movie);

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

  return (
    <div className="youtubePlay">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          {/* {movie && <YouTube videoId={movie} opts={opts} />} */}
        </div>
      </Modal>
    </div>
  );
}

export default YoutubePlay;
