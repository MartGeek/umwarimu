import React, { Component } from "react";
import "./Home.css";
import Card from "../components/cards";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="content">
          <h1>Do you want to learn Computer Science?</h1>
          <p>
            Umwarimu is a web application which helps you to get a tutor in
            order to learn computer science
          </p>

          <div className="button-groupe">
            <button
              type="button"
              className="btn btn-outline-success"
              id="homeButton"
            >
              Apply as a teacher
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              id="homeButton"
            >
              Get a teacher
            </button>
          </div>
        </div>
        <div className="courseCard">
          <Card />
        </div>
      </div>
    );
  }
}
