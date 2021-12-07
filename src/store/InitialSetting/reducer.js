import createReducer from '../createReducer'
import {INITIAL_SETTING_SET} from './actions'

export const initialState = {
	isInitialized: false,
}

const reducer = createReducer(initialState, {

	[INITIAL_SETTING_SET]: (state, action) => ({
		...state,
		isInitialized: action.payload.isInitialized,
	}),
})

export default reducer
