import { Loyalty } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Nav.css";
import { auth } from "../../firebase";

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${scrolling && "scrolling"}`}>
      <div className="nav__content">
        <div className="nav__left">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt=""
            className="nav__logo"
          />
        </div>
        <div className="nav__right">
          <div className="nav__list">
            <Loyalty />
            <p>0</p>
          </div>
          <img
            src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
            alt=""
            className="nav__avatar"
            onClick={() => auth.signOut()}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
