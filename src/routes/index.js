import React from 'react';

import Home from '../pages/Home';

import { Route, Switch} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store";

const Routes = () => {

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={"/"} component={Home}/>
            </Switch>
        </ConnectedRouter>
    )
};

export default Routes;