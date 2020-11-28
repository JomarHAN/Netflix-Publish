import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password);
  };

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__background">
        <div className="login__fade"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85e22987-d2dd-46ca-b8b7-65cd0e31c24a/629ae878-26a7-4d88-b12b-af5018a1f7b2/US-en-20201123-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="login__logo">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </div>
      <div className="login__form">
        <h2>Sign In</h2>
        <form className="login__input">
          <TextField
            className="login__textField"
            type="email"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="login__textField"
            type="password"
            label="Password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={signIn} className="login__signIn">
            Sign In
          </Button>
          <Button onClick={signUp} className="login__signUp">
            Sign up
          </Button>
          <hr />
          <Button className="login__google">Sign IN with google</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
