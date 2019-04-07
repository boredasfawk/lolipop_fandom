import React, { Component } from "react";
import "./ProfileHome.css";

const imageSize = {
  maxWidth: "130px",
  borderRadius: "50%",
  border: "2px solid white"
};

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="break">
          <div class="break">
            Are you ready?
            <br />
            Lets get started on your next project
          </div>
        </section>

        <div id="footer">
          <div class="row">
            <div class="container">
              <div class="center span4">
                <img alt="profile" src="images/olani.jpg" style={imageSize} />
                <div
                  class="details"
                  data-tool-tip="I'm also available for remote work!"
                >
                  <a
                    href="mailto:oloagency@gmail.com"
                    rel="noopener noreferrer"
                    class="details-small"
                  >
                    Contact Me
                  </a>
                </div>
                <div id="social">
                  <a
                    href="https://github.com/boredasfawk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="icon-github">
                      <i class="fab fa-github-square" />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olonnye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="icon-linkedin">
                      <i class="fab fa-linkedin" />
                    </span>
                  </a>
                  <a href="mailto:oloagency@gmail.com">
                    <span class="icon-email" />
                  </a>
                </div>
              </div>
              <div class="span8" id="contact">
                <form
                  action="mailer.php"
                  id="contact-form"
                  method="post"
                  name="contact-form"
                >
                  <div class="buffer-bottom">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required=""
                      id="field1"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div class="buffer-bottom">
                    <textarea
                      class="message"
                      name="message"
                      placeholder="Message"
                      required=""
                      rows="6"
                    />
                  </div>
                  <span id="submit-response" />
                  <div class="pull-right">
                    <input type="submit" class="button" value="send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="center" id="links">
          <ul>
            <li>© OLONNYE.ME 2019 </li>
            <li>
              <a
                href="https://github.com/boredasfawk"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
