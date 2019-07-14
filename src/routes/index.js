import React from 'react';

import Home from '../pages/Home';

import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {

    return (
        <BrowserRouter>
            <Route exact path={"/"} component={Home}/>
        </BrowserRouter>
    )
};

export default Routes;