export const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state+=9;
    case 'DECREMENT': 
      return state-=9;
    default:
      return state;
  }
}