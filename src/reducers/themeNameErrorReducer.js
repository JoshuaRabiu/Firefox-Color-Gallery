const initialState = false;

export const themeNameErrorReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'EMPTY_THEME_NAME':
      return true;
    case 'VALID_THEME_NAME':
      return initialState;
    default:
      return state;
  }
}