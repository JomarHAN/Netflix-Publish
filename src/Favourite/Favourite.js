import React, { useEffect } from "react";
import Nav from "../Home/Nav/Nav";
import "./Favourite.css";

function Favourite() {
  useEffect(() => {}, []);

  return (
    <div className="favourite">
      <Nav />
      <h1>I am the Favourite Page</h1>
    </div>
  );
}

export default Favourite;
