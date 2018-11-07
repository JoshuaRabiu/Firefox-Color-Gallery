const initialState = false;

export const isLinkInvalidReducer = (state=initialState, action) => {
  switch(action.type){
    case 'INVALID_LINK':
      return true
    case 'VALID_LINK':
      return initialState
    default:
      return state
  }
}