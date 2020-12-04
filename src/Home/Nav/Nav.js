import { MovieFilter } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Nav.css";
import { auth } from "../../firebase";
import { BrowserRouter as Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { Button } from "@material-ui/core";

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);


  return (
    <div className={`nav ${scrolling && "scrolling"}`}>
      <div className="nav__content">
        <Link to="/" className="nav__left" >
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt=""
            className="nav__logo"
          />
        </Link>
        <div className="nav__right">
          {user ? (
            <>
              <Link className="nav__list" to="/favourite">
                <MovieFilter />
                <p>0</p>
              </Link>
              <img
                src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                alt=""
                className="nav__avatar"
                onClick={() => auth.signOut()}
              />
            </>
          ) : (
              <Link to="/login">
                <Button className="nav__rightBtn" >
                  log in
              </Button>
              </Link>
            )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
