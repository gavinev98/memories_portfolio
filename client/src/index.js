import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';


import App from './App';


//firstly we need to create a redux store
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider>
<App />
</Provider>,
 document.getElementById('root'));

