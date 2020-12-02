import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./Home/Home";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Home/Nav/Nav";
import Favourite from "./Favourite/Favourite";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: authUser.email,
            photo: authUser.photoURL,
            uid: authUser.uid,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/favourite">
            <Nav />
            <Favourite />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
