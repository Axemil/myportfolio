import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faNodeJs,
  faReact,
  faTelegram,
  faGoogle,
  faGit,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
export class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-greed">
          <Cell col={12}>
            <img
              className="react-pic"
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="avatar"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <p>
                <span className="thema-ico">
                  <FontAwesomeIcon className="thema-ico-logo" icon={faHtml5} />{" "}
                  HTML |
                </span>
                <span className="thema-ico">
                  <FontAwesomeIcon className="thema-ico-logo" icon={faCss3} />{" "}
                  CSS |
                </span>
                <span className="thema-ico">
                  <FontAwesomeIcon className="thema-ico-logo" icon={faSass} />{" "}
                  SASS |
                </span>
                <span className="thema-ico">
                  <FontAwesomeIcon className="thema-ico-logo" icon={faJs} />
                  Javascript |
                </span>
                <span className="thema-ico">
                  <FontAwesomeIcon className="thema-ico-logo" icon={faNodeJs} />
                  NodeJS |
                </span>
                <span className="thema-ico">
                  <FontAwesomeIcon className="thema-ico-logo" icon={faReact} />{" "}
                  React
                </span>
              </p>
              <div className="social-links">
                <a href="https://t.me/axemilon" target='_blank'>
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a href="https://google.com" target='_blank'>
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="https://google.com" target='_blank'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://google.com" target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
