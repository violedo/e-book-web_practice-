import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '../src/App';
import login from '../src/login';
import cart from '../src/cart';

const BasicRouter = () => (
    <HashRouter>
        <Switch>
            <Route  exact path="/"  component={App}></Route>
            <Route  exact path="/login" component={login}></Route>
            <Route  exact path="/cart" component={cart}></Route>
        </Switch>
    </HashRouter>
);


export default BasicRouter;