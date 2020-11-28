import React from "react";
import Nav from "./Nav/Nav";
import "./Body.css";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";

function Body() {
  return (
    <div className="body">
      <Nav />
      <Banner />
      <Row />
    </div>
  );
}

export default Body;
