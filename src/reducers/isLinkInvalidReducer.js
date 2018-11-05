const initialState = null;

export const isLinkInvalidReducer = (state=initialState, action) => {
  switch(action.type){
    case 'INVALID_LINK':
      return 'yes'
    case 'VALID_LINK':
      return initialState
    default:
      return state
  }
}