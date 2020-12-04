import React from "react";
import Nav from "./Nav/Nav";
import "./Home.css";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import Genres from "../Genres/Genres";

function Body() {
  return (
    <div className="home">
      <Banner />
      <div className="home__child">
        <Genres />
        <Row />
      </div>
    </div>
  );
}

export default Body;
