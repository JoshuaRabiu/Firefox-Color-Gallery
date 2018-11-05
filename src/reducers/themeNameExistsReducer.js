const initialState = null;

export const themeNameExistsReducer = (state=initialState, action) => {
  switch(action.type){
    case 'EMPTY_THEME_NAME':
      return 'theme name is empty'
    case 'VALID_THEME_NAME':
      return initialState
    default:
      return state
  }
}