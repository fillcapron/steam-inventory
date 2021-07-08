import {createStore, applyMiddleware,compose  } from "redux";
import thunk from 'redux-thunk'
import { rootReducers } from "./reducers/rootReducer";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))