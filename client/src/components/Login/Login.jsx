import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Yai Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Yai Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
          <buetton className="loginRegisterButton">Create new account</buetton>
          </div>
        </div>
      </div>
    </div>
  );
}
