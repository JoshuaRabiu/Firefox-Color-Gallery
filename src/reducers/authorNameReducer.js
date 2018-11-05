export const authorNameReducer =  (state='', action) => {
  switch(action.type){
    case 'SET_AUTHOR_NAME':
      return action.payload
    default:
      return state
  }
}