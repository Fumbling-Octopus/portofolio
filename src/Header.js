import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <header>
      <nav>
          <ul>
            <li><NavLink to="/index">Home</NavLink></li>
            <li><NavLink to="/Recipes">Recipes</NavLink></li>
            <li><NavLink to="/Profile">Profile</NavLink></li>
            <li><NavLink to="/SignInPage">Sign-In</NavLink></li>
          </ul>
      </nav>
      <h1 className="page-title"> {props.name} </h1>
      </header>
    </div>
  );
}