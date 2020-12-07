import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listGenres } from "../Home/Row/Children/Children";
import { selectGenres, setGenres } from "../features/genresSlice";
import "./Genres.css";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Genres() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const genresDispatch = useDispatch();
  const genres = useSelector(selectGenres);

  const handleGenres = () => {
    genresDispatch(setGenres(input));
  };

  return (
    <div className="genres">
      <FormControl className={classes.margin}>
        <InputLabel>Genres</InputLabel>
        <Select
          input={<BootstrapInput />}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
          {listGenres.map((genre) => (
            <MenuItem
              value={genre.id}
              key={genre.id}
              disabled={!genre.id && true}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleGenres}>add</Button>
    </div>
  );
}

export default Genres;
