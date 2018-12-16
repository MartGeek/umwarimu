import React, { Component } from "react";

export default class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          href="/"
        >
          Courses
        </a>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#nogo">
            Authentication
          </a>
          <a className="dropdown-item" href="#nogo">
            Blockchains
          </a>
          <a className="dropdown-item" href="#nogo">
            Programming Language
          </a>
        </div>
      </div>
    );
  }
}
