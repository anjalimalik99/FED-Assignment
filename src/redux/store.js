import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createReducer from "./index";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import cartReducer from '../components/reducers/cartReducer';
import { Provider } from 'react-redux';

// const initialState = {};
// const enhancers = [];
// const middleware = [thunk];

// const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
// if (typeof devToolsExtension === "function") {
//   enhancers.push(devToolsExtension({ latency: 0 }));
// }

// const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

// const store = createStore(createReducer(), initialState, composedEnhancers);
// store.asyncReducers = {};
const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export default store;
