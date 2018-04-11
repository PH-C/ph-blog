import React, { Component } from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Home from './Home/Home';
import FrontEndHots from './FrontEndHots/FrontEndHots';
import MyProject from './MyProject/MyProject';
import About from './About/About';
const routes = (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path='/home' component={ Home } />
            <Route path='/hot' component={ FrontEndHots } />
            <Route path='/project' component={ MyProject } />
            <Route path='/about' component={ About } />
        </Switch>
    </BrowserRouter>
);

export default routes;