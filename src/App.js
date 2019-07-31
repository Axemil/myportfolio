import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faIdCardAlt,
  faAward,
  faCode,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
function App() {
  const navBar = {
    fontSize: "1.3rem",
    fontWeight: 600,
    borderLeft: "1px solid #333",
    display: "flex",
    alignItems: "center"
  };
  return (
    <div>
      <Layout fixedHeader >
        <Header
          transparent
          className="header"
          style={{borderBottom: '1px solid #333', boxShadow: '0 1px 5px rgba(0,0,0,.2)'}}
          title={
            <span>
              <strong>
                <Link
                  to="/"
                  style={{ color: "whitesmoke" }}
                  className="title-portfolio"
                >
                  <FontAwesomeIcon className="react-logo" icon={faCode} /> My
                  Portfolio
                </Link>
              </strong>
            </span>
          }
        >
          <Navigation className="nav-bar">
            <Link style={navBar} className="nav-bar-item" to="/Projects">
              <FontAwesomeIcon className="nav-ico" icon={faProjectDiagram} />{" "}
              Projects
            </Link>
            <Link style={navBar} className="nav-bar-item" to="/Contact">
              <FontAwesomeIcon className="nav-ico" icon={faIdCardAlt} />
              Contact
            </Link>
            <Link style={navBar} className="nav-bar-item" to="/AboutMe">
              <FontAwesomeIcon className="nav-ico" icon={faUser} />
              About me
            </Link>
            <Link style={navBar} className="nav-bar-item" to="/Resume">
              <FontAwesomeIcon className="nav-ico" icon={faAward} />
              Resume
            </Link>
          </Navigation>
        </Header>
        <Drawer title="My portfolio">
          <Navigation>
            <Link style={navBar} className="nav-bar-item" to="/Projects">
              <FontAwesomeIcon className="nav-ico" icon={faProjectDiagram} />{" "}
              Projects
            </Link>
            <Link style={navBar} className="nav-bar-item" to="/Contact">
              <FontAwesomeIcon className="nav-ico" icon={faIdCardAlt} />
              Contact
            </Link>
            <Link style={navBar} className="nav-bar-item" to="/AboutMe">
              <FontAwesomeIcon className="nav-ico" icon={faUser} />
              About me
            </Link>
            <Link style={navBar} className="nav-bar-item" to="/Resume">
              <FontAwesomeIcon className="nav-ico" icon={faAward} />
              Resume
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
