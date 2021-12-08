const createReducer = (initialState, handleActions) => {
  return (state = initialState, action) => {
    return Object.prototype.hasOwnProperty.call(handleActions, action.type)
      ? handleActions[action.type](state, action)
      : state
  }
}
export default createReducer
