import React from "react";
import "./register.css";

export default function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="New Password" className="loginInput" />
            <input placeholder="confirm your password" className="loginInput"/>
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <buetton className="loginRegisterButton">Log into account </buetton>
          </div>
        </div>
      </div>
    </div>
  );
}
