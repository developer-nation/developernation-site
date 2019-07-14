import { createStore, applyMiddleware } from "redux";
import Reducers from './rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddlewares = createSagaMiddleware();

export const Store = createStore(
    Reducers,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddlewares
        )
    )
);
sagaMiddlewares.run(rootSaga);