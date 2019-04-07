import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfileHome.css";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="projects">
          <div className="row">
            <div className="container">
              <div className="cf main-portfolio-item">
                <div className="portfolio-col screenshot">
                  <img alt="Hal-Con" src="images/hal-con.jpg" />
                </div>
                <div className="portfolio-col description-container">
                  <h3>
                    <Link to="/productList">Lolix</Link>
                  </h3>
                  <p class="description">
                    online web store that utilizes the paypal sandbox to
                    complete checkout experience
                  </p>
                  <ul class="skills">
                    <li>HTML</li>
                    <br />
                    <li>CSS</li>
                    <li>Styled-Components, Bootstrap</li>
                    <br />
                    <li>JAVASCRIPT</li>
                    <br />
                    <li>REACT</li>
                    <li>React-Router</li>
                    <br />
                    <li>Deployed with Netlify</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>

          <div className="row">
            <div className="container">
              <div className="cf main-portfolio-item">
                <div className="portfolio-col screenshot">
                  <img alt="Hal-Con" src="images/hal-con.jpg" />
                </div>
                <div className="portfolio-col description-container">
                  <h3>
                    <Link to="/">coming soon</Link>
                  </h3>
                  <p className="description">description.</p>
                  <ul className="skills">
                    <li>Custom Theme Development</li>
                    <br />
                    <li>WordPress</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
