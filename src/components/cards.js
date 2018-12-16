import React, { Component } from "react";
import "./css/cards.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <img
              src={require("../assets/image3.jpg")}
              className="card-img-top"
              alt="mg"
            />
            <h5 className="card-title">Authentication</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="/resume" className="btn btn-primary">
              view teachers
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src={require("../assets/image2Cropped.jpg")}
              className="card-img-top"
              alt="mg"
            />
            <h5 className="card-title">BrokeChain</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="#" className="btn btn-primary">
              view teachers
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src={require("../assets/image1.jpg")}
              className="card-img-top"
              alt="mg"
            />
            <h5 className="card-title">Programming Languages</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <a href="#" className="btn btn-primary">
              view teachers
            </a>
          </div>
        </div>
      </div>
    );
  }
}
