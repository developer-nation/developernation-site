import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Reset from "./styles/Generics/Reset";
import Base from './styles/Base';
import { Provider } from 'react-redux';
import { Store } from "./store";

ReactDOM.render(
    <Fragment>
        <Base />
        <Reset />
        <Provider store={Store}>
            <Routes />
        </Provider>
    </Fragment>, document.getElementById('root'));