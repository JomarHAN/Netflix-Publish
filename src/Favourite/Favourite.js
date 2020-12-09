import React from "react";
import { useSelector } from "react-redux";
import { selectFavor } from "../features/favorSlice";
import Nav from "../Home/Nav/Nav";
import ChildFavorite from "./ChildFavorite/ChildFavorite";
import "./Favourite.css";

function Favourite() {
  const favors = useSelector(selectFavor);
  return (
    <div className="favorite">
      <Nav />
      <div className="favorite__content">
        <h1>My Favorite List:</h1>
        {favors ? (
          favors.map((favor) => <ChildFavorite key={favor} movieId={favor} />)
        ) : (
          <h1>Opps....Nothing at all!!</h1>
        )}
      </div>
    </div>
  );
}

export default Favourite;
