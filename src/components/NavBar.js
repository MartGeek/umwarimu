import React, { Component } from "react";
import Dropdown from "./dropdown";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="#">
              UMWARIMU
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="./">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./signup">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Log In
                  </a>
                </li>
                <li>
                  <Dropdown />
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Download
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
