import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn-left"></div>
          <button type="button" class="toggle-btn" onlick="login()">
            Log in
          </button>
          <Link to="/register">
            <button type="button" class="toggle-btn" onlick="register()">
              Register
            </button>
          </Link>
        </div>
        <div className="social-icons">
          <img src="images/Signup/fb.png"></img>
          <img src="images/Signup/tw.png"></img>
          <img src="images/Signup/gp.png"></img>
        </div>
        <form id="login" className="input-group">
          <input
            type="text"
            class="input-field"
            placeholder="User ID"
            required
          ></input>
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
            required
          ></input>
          <input type="checkbox" class="check-box"></input>
          <span>Remember me</span>
          <button type="submit" class="submit-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
