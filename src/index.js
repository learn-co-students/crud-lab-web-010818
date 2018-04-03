import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import createStore from './createStore';
import manageRestaurant from './reducers/manageRestaurant';
import { Provider } from 'react-redux';

const store = createStore(manageRestaurant);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
