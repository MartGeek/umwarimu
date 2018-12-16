import React, { Component } from "react";
import "./css/profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div class="container bootstrap snippet">
        <div class="row">
          <div class="col-sm-10">
            <h3>User name</h3>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="text-center">
                <img
                  src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  class="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>
                <input
                  type="file"
                  class="text-center center-block file-upload"
                />
              </div>
              <ul class="list-group">
                <li class="list-group-item text-muted">
                  Activity <i class="fa fa-dashboard fa-1x" />
                </li>
                <li class="list-group-item text-right">
                  <span class="pull-left">
                    <strong>Shares</strong>
                  </span>{" "}
                  125
                </li>
                <li class="list-group-item text-right">
                  <span class="pull-left">
                    <strong>Likes</strong>
                  </span>{" "}
                  13
                </li>
                <li class="list-group-item text-right">
                  <span class="pull-left">
                    <strong>Posts</strong>
                  </span>{" "}
                  37
                </li>
                <li class="list-group-item text-right">
                  <span class="pull-left">
                    <strong>Followers</strong>
                  </span>{" "}
                  78
                </li>
              </ul>
              <div class="panel panel-default">
                <div class="panel-heading">Social Media</div>
                <div class="panel-body">
                  <i class="fa fa-facebook fa-2x" />{" "}
                  <i class="fa fa-github fa-2x" />{" "}
                  <i class="fa fa-twitter fa-2x" />{" "}
                  <i class="fa fa-pinterest fa-2x" />{" "}
                  <i class="fa fa-google-plus fa-2x" />{" "}
                </div>
              </div>
              <div class="col-sm-9">
                <div class="tab-content">
                  <div class="tab-pane active" id="home">
                    <form
                      class="form"
                      action="##"
                      method="post"
                      id="registrationForm"
                    >
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="first_name">
                            <h4>First name</h4>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="first_name"
                            id="first_name"
                            placeholder="first name"
                            title="enter your first name if any."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="last_name">
                            <h4>Last name</h4>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="last_name"
                            id="last_name"
                            placeholder="last name"
                            title="enter your last name if any."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="phone">
                            <h4>Phone</h4>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="phone"
                            id="phone"
                            placeholder="enter phone"
                            title="enter your phone number if any."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="mobile">
                            <h4>Mobile</h4>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="mobile"
                            id="mobile"
                            placeholder="enter mobile number"
                            title="enter your mobile number if any."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="email">
                            <h4>Email</h4>
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="you@email.com"
                            title="enter your email."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="email">
                            <h4>Location</h4>
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="location"
                            placeholder="somewhere"
                            title="enter a location"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="password">
                            <h4>Password</h4>
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            name="password"
                            id="password"
                            placeholder="password"
                            title="enter your password."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-6">
                          <label for="password2">
                            <h4>Verify</h4>
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            name="password2"
                            id="password2"
                            placeholder="password2"
                            title="enter your password2."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-12">
                          <button class="btn btn-lg btn-success" type="submit">
                            <i class="glyphicon glyphicon-ok-sign" /> Save
                          </button>
                          <button class="btn btn-lg" type="reset">
                            <i class="glyphicon glyphicon-repeat" /> Reset
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
