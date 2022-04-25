import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Auth/base.js";
import { AuthContext } from "../../Auth/Auth.js";
import image from "../../Img/img-login.svg";
import "../Login/Login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div class="login">
        <div class="login__content">
          <div class="login__img">
            <img src={image} alt=""></img>
          </div>

          <div class="login__forms">
            <form onSubmit={handleLogin} class="login__registre">
              <h1 class="login__title">Sign In</h1>

              <div class="login__box">
                <i class="bx bx-user login__icon"></i>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  class="login__input"
                ></input>
              </div>

              <div class="login__box">
                <i class="bx bx-lock-alt login__icon"></i>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  class="login__input"
                ></input>
              </div>

              <button type="submit" class="login__button">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
