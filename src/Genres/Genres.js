import {
  Button,
  FormControl,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { listGenres } from "../dataMovie/request";
import { setGenres } from "../features/genresSlice";
import "./Genres.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Genres() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const genresDispatch = useDispatch();

  const handleGenres = () => {
    if (input) {
      genresDispatch(setGenres(input));
    }
  };

  return (
    <div className="genres">
      <FormControl className={classes.margin}>
        <NativeSelect
          value={input}
          onChange={(e) => setInput(e.target.value)}
          inputProps={{
            name: "genres",
            id: "genres-native-helper",
          }}
          label="Genres"
        >
          {listGenres.map((genre) => (
            <option
              value={genre.id}
              key={genre.id}
              className={genre.disabled && "disabled"}
            >
              {genre.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <Button onClick={handleGenres}>add</Button>
    </div>
  );
}

export default Genres;
