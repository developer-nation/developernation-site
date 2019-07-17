import { createStore, applyMiddleware } from "redux";
import { createReducer } from './rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddlewares = createSagaMiddleware();

export const history = createBrowserHistory();

export const Store = createStore(
    createReducer(history),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddlewares,
            routerMiddleware(history)
        )
    )
);
sagaMiddlewares.run(rootSaga);
