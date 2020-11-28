import { Loyalty } from "@material-ui/icons";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content">
        <div className="nav__left">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt=""
            className="nav__logo"
          />
        </div>
        <div className="nav__right">
          <Loyalty />
          <img
            src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
            alt=""
            className="nav__avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
