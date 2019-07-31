import React from 'react'
import { Route,Switch } from 'react-router-dom'
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

export default function Main() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/AboutMe' component={AboutMe}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Projects' component={Projects}/>
      <Route path='/Resume' component={Resume}/>
    </Switch>
  )
}
