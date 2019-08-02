import React from 'react'
import { Route,Switch } from 'react-router-dom'
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';

export default function Main() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/AboutMe' component={AboutMe}/>
      <Route path='/Projects' component={Projects}/>
    </Switch>
  )
}
