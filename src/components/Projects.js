import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import CardItem from './projectsCard/CardItem'

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }
  toggleCatygory = array => {
    return array[this.state.activeTab];
  };
  render() {
    const arrayThemas = [
    <CardItem title={'React project'} url='https://facebook.github.io/create-react-app/img/logo-og.png' times={6}/>,
      <h1>Hello Angular</h1>,
      <h1>Hello HTML/CSS</h1>,
      <h1>Hello HTML/SASS</h1>,
      <h1>JS</h1>
    ];
    return (
      <div className="projects">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>HTML/CSS</Tab>
            <Tab>HTML/SASS</Tab>
            <Tab>JS</Tab>
          </Tabs>
          <section className='section-grid'>
            <Grid className="project-grid">
              <Cell className="cell-grid" col={12}>{this.toggleCatygory(arrayThemas)}</Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
