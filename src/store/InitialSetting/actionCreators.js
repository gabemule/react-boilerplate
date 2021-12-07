import {INITIAL_SETTING_SET} from './actions'

const setInitialSetting = (isInitialized) => (dispatch) => {
	dispatch({
		type: INITIAL_SETTING_SET,
		payload: {
			isInitialized
		}
	})
}

export {
	setInitialSetting
}
