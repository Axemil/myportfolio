import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <h1>About me</h1>
        <div className="card-about-me">
          <h2>Vlad Kordonets</h2>
          <img
            src="https://memepedia.ru/wp-content/uploads/2018/08/hackerman_by_shiiftyshift-dan31sc.png"
            alt=""
          />
          <p>
            Full Stack Web Developer using React, Node.js (MERN) with an
            emphasis on Frontend web development and mobile using React & React
            Native. Experienced in building CRUD applications, RESTful APIs
            using Node.js and express, User Auth and oAuth with PassportJS and
            Firebase. Common libraries of use: Axios, Redux, Mongoose, Lodash,
            Express, body-parser, socket.io, react-router, redux- thunk. Common
            use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS,
            Material-UI, Elemental-UI and Native-Base for React Native.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
