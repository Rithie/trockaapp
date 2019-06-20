import { createBrowserHistory } from 'history'
import {createStore, applyMiddleware } from  'redux';
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga'


import rootReducer from './reducers'
import rootSaga from './sagas/';

export const history = createBrowserHistory();


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(
  rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
