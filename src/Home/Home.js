import React from "react";
import Nav from "./Nav/Nav";
import "./Home.css";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";

function Body() {
  return (
    <div className="home">

      <Banner />
      <Row />
    </div>
  );
}

export default Body;
