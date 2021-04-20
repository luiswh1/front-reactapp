import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Confirm from '../pages/Confirm';
import Home from '../pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/confirm" exact component={Confirm} />
        </Switch>
        </BrowserRouter>
    )
}