import { combineReducers } from 'redux'

import InitialSetting from './InitialSetting/reducer'

const reducers = combineReducers({
	InitialSetting: InitialSetting
})

export default reducers
