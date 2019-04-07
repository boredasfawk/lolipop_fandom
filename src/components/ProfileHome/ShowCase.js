import React, { Component } from "react";
import "./ProfileHome.css";

class ShowCase extends Component {
  render() {
    return (
      <React.Fragment>
        <article id="showcase_title">
          <div className="showcase_title">
            <p className="web">WEB DEVELOPER</p>
            <p className="quote">
              "I just want to create things that are beautifully simple"
            </p>
            <nav id="header_nav" className="header">
              <ul>
                <li className="name">
                  <a href="mailto:oloagency@gmail.com">Olonnye Taylor-Watson</a>
                </li>

                <li className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/olonnye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" /> Linkedin
                  </a>
                </li>

                <li className="github">
                  <a
                    href="https://github.com/boredasfawk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square" /> Github
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </article>

        <figure className="slide_fade">
          <img src="images/code3.jpg" alt="laptop on desk" />
          <figcaption className="text">Caption Three</figcaption>
        </figure>
      </React.Fragment>
    );
  }
}

export default ShowCase;
