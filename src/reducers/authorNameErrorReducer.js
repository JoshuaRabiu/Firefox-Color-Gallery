const initialState = false;

export const authorNameErrorReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'EMPTY_AUTHOR_NAME':
      return true;
    case 'VALID_AUTHOR_NAME':
      return initialState;
    default:
      return state;
  }
}