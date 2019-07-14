import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Reset from "./styles/Generics/Reset";
import Base from './styles/Base';

ReactDOM.render(
    <Fragment>
        <Base />
        <Reset />
        <Routes />
    </Fragment>, document.getElementById('root'));