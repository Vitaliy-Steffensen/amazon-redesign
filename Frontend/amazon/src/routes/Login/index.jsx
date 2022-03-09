import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import APIService from "../../Services/Auth/AuthAPIService";
import { useCookies } from "react-cookie";
import history from "../../helpers/history";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["userToken"]);

  useEffect(() => {
    if (token["userToken"]) {
      history.push("/myaccount");
    }
  }, [token, history]);

  const signIn = (e) => {
    e.preventDefault();
    APIService.LoginUser({ username, password })
      .then((resp) => {
        console.log(resp);
        return setToken("userToken", resp.token);
      })
      .catch((error) => console.log(error));
  };
  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            buttonType="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
