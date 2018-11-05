export const themeDataReducer = (state='', action) => {
  switch(action.type){
    case 'SEND_DATA':
      return action.payload
    default:
      return state
  }
}