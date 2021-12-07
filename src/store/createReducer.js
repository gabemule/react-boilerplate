const createReducer = (initialState, handleActions) =>
	(state = initialState, action) =>
		Object.prototype.hasOwnProperty
			.call(handleActions, action.type)
			? handleActions[action.type](state, action)
			: state

export default createReducer
