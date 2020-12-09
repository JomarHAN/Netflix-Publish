import { MovieFilter } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Nav.css";
import db, { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavor,
  selectFavorId,
  setFavorId,
  uploadFavor,
} from "../../features/favorSlice";
import { selectUser } from "../../features/userSlice";

function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const favors = useSelector(selectFavor);
  const user = useSelector(selectUser);
  const favorDispatch = useDispatch();
  const favorId = useSelector(selectFavorId);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  useEffect(() => {
    if (favorId === null) {
      db.collection("dbfavorite")
        .doc(user.uid)
        .collection("dbmovie")
        .onSnapshot((snapshot) =>
          favorDispatch(
            uploadFavor(snapshot.docs.map((doc) => doc.data().idmovie))
          )
        );

      favorDispatch(setFavorId(false));
    }
  }, [favorId]);

  return (
    <div className={`nav ${scrolling && "scrolling"}`}>
      <div className="nav__content">
        <div className="nav__left">
          <Link to="/">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              alt=""
              className="nav__logo"
            />
          </Link>
        </div>
        <div className="nav__right">
          <Link className="nav__list" to="/favourite">
            <>
              <MovieFilter />
              <p>{favors?.length}</p>
            </>
          </Link>
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
