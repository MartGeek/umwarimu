import React, { Component } from "react";
import "./css/signup.css";

export default class Signup extends Component {
  render() {
    return (
      <div className="container2">
        <form className="form-horizontal" role="form">
          <h3>Registration</h3>
          <div className="form-group">
            <label for="firstName" className="col-sm-3 control-label">
              First Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="form-control"
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label for="lastName" className="col-sm-3 control-label">
              Last Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="form-control"
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label for="email" className="col-sm-3 control-label">
              Email*{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="password" className="col-sm-3 control-label">
              Password*
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="password" className="col-sm-3 control-label">
              Confirm Password*
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="birthDate" className="col-sm-3 control-label">
              Date of Birth*
            </label>
            <div className="col-sm-9">
              <input type="date" id="birthDate" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label for="phoneNumber" className="col-sm-3 control-label">
              Phone number{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                className="form-control"
              />
              <span className="help-block">
                Your phone number won't be disclosed anywhere{" "}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-3">Gender</label>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input type="radio" id="femaleRadio" value="Female" />
                    Female
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input type="radio" id="maleRadio" value="Male" />
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              <span className="help-block">*Required fields</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
      </div>
    );
  }
}
