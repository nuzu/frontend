import initialState from './initialState';
import actionTypes from './actionTypes';

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TICK:
			return Object.assign({}, state, {
				lastUpdate: action.ts,
				light: Boolean(action.light)
			});
		case actionTypes.INCREMENT:
			return Object.assign({}, state, {
				count: state.count + 1
			});
		case actionTypes.DECREMENT:
			return Object.assign({}, state, {
				count: state.count - 1
			});
		case actionTypes.RESET:
			return Object.assign({}, state, {
				count: initialState.count
			});
		default:
			return state;
	}
};

export default reducers;
