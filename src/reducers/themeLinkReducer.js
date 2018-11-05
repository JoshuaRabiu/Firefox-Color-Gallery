export const themeLinkReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_THEME_LINK':
      return action.payload;
    default:
      return state;
  }
};
