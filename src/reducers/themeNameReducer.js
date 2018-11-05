export const themeNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_THEME_NAME':
      return action.payload;
    default:
      return state;
  }
};
