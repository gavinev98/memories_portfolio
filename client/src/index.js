import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';


import App from './App';

import './index.css';


//firstly we need to create a redux store
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));

