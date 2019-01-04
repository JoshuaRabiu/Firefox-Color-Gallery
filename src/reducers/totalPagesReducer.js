export const totalPagesReducer = (state=null, action) => {
  switch (action.type) {
    case 'SEND_TOTAL_NUMBER_OF_PAGES':
      return action.payload;
    default:
      return state;
  }
}