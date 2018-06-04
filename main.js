import React from 'react';
import Landing from './Landing';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './Resume';

import { Switch, Route } from 'react-router-dom';




const Main = () => (
    <Switch>
        <Route exact path ="/" component = { Landing } />
        <Route  path ="/.aboutme" component = { AboutMe } />
        <Route  path ="/.contact" component = { Contact } />
        <Route  path ="/.project" component = { Project } />
        <Route  path ="/.Resume" component = { Resume } />

        
         </Switch>
)
export default Main;