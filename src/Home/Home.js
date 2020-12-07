import React from "react";
import Nav from "./Nav/Nav";
import "./Home.css";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import Genres from "../Genres/Genres";

function Home() {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <div className="home__child">
        <Genres />
        <Row />
      </div>
    </div>
  );
}

export default Home;
