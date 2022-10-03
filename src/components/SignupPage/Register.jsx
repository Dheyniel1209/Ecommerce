import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn-right"></div>
          <button type="button" class="toggle-btn" onlick="login()">
            Log in
          </button>
          <button type="button" class="toggle-btn" onlick="register()">
            Register
          </button>
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
            type="text"
            class="input-field"
            placeholder="Email ID"
            required
          ></input>
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
            required
          ></input>
          <Link to="/">
            <button type="submit" class="submit-btn">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Register;
