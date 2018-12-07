import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Switch>
)