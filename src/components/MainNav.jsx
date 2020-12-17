import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

export default class MainNav extends Component {
  render() {
    return (
      <div className="navContainer">
        <Link to="/" className="navbar" id="nav1">
          Home
        </Link>
        <ul>
          <li>Chatrooms</li>
          <li>
            <Link to="/en" className="navbar" id="nav2">
              English
            </Link>
          </li>
          <li>
            <Link to="/fr" className="navbar" id="nav3">
              French
            </Link>
          </li>
          <li>
            <Link to="/es" className="navbar" id="nav4">
              Spanish
            </Link>
          </li>
          <li>
            <Link to="/de" className="navbar" id="nav5">
              German
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
