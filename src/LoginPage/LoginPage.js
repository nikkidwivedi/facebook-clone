import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './LoginPage.css';

function LoginPage () {
  return(
  <div className="Login">
    <div className="facebook">
      <div className="facebooktext">
        facebook
      </div>
      <div className="title">
      Facebook helps you connect and share
      with the people in your life.
      </div>
    </div>
    <div className="LoginContainer">
      <div className="Logindetails">
        <input type="email" placeholder="Email address or phone number" />
        <br/>
        <input type="password" placeholder="Password" />
        <br/>
        <button className="btn">
          <Link to='/HeaderArea'>LogIn</Link>
        </button>
      </div>
      <div className="forget">
        <a href="forget">
          Forgetten Password
        </a>
        <br/>
        <button className="btns">
          Create New Account
        </button>
      </div>
      <p></p>
      <br/>
      <div className="page">
        <a href="createpage">
          Create a Page
        </a> for a celebrity, brand or business.
      </div>
    </div>
  </div>
  )
}

export  default LoginPage;
