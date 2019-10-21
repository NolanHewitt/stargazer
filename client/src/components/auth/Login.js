import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import background from "../images/background.jpg";
import Skywatch from "../skywheel/watch";

import "./Login.css";

import { AuthContext } from "../../auth/auth";

export default function Login({ history }) {
  // todo: errors my friend...
  const { user, loginUser, errors = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/dashboard");
    }
  }, [user, history]);

  return (
    <>
    <Skywatch/>
    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">

        <div id ="bg">
      <img src={background} alt="starry night sky">
      </img>
    </div>


          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b className="white-text">Login below</b>
            </h4>
            <p className="white-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form
            noValidate
            onSubmit={e => {
              e.preventDefault();

              const userData = {
                email,
                password
              };

              loginUser(userData);
            }}
          >
            <div className="input-field col s12">
              <input style={{color: "white"}}
                onChange={e => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <label className="white-text" htmlFor="email">Email</label>
              <span className="white-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="input-field col s12 white-text">
              <input style={{color: "white"}}
                onChange={e => setPassword(e.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <label className="white-text" htmlFor="password">Password</label>
              <span className="white-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
