const initialState = null

export const authorNameExistsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'EMPTY_AUTHOR_NAME':
      return 'empty author name'
    case 'VALID_AUTHOR_NAME':
      return initialState
    default:
      return state
  }
}