import actionTypes from './actionTypes';

export const serverRenderClock = isServer => dispatch => {
	return dispatch({type: actionTypes.TICK, light: !isServer, ts: Date.now()});
};

export const startClock = dispatch => {
	return setInterval(() => {
		// Dispatch `TICK` every 1 second
		dispatch({type: actionTypes.TICK, light: true, ts: Date.now()});
	}, 1000);
};

export const incrementCount = () => dispatch => {
	return dispatch({type: actionTypes.INCREMENT});
};

export const decrementCount = () => dispatch => {
	return dispatch({type: actionTypes.DECREMENT});
};

export const resetCount = () => dispatch => {
	return dispatch({type: actionTypes.RESET});
};
