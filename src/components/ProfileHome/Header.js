import React, { Component } from "react";
import "./ProfileHome.css";

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <nav id="nav">
          <div className="nav-name trans">
            OLONNYE TAYLOR-WATSON | FRONT-END WEB DEVELOPER
          </div>
          <ul className="nav-default">
            <li>
              <a href="#showcase" className="home active">
                HOME
              </a>
            </li>
            <li>
              <a href="#projects" className="projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
