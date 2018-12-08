import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import initialState from '../../store/initialState';
import reducer from '../../store/reducers';

export default function initializeStore(state = initialState) {
	return createStore(
		reducer,
		state,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
}
