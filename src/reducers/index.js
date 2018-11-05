import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authorNameReducer } from './authorNameReducer';
import { themeNameReducer } from './themeNameReducer';
import { themeLinkReducer } from './themeLinkReducer';
import { themeDataReducer } from './themeDataReducer';
import { isLinkInvalidReducer } from './isLinkInvalidReducer';
import { authorNameExistsReducer } from './authorNameExistsReducer';
import { themeNameExistsReducer } from './themeNameExistsReducer';
import { loadingStatusReducer } from './loadingStatusReducer';
import { counterReducer } from './counterReducer';
import { totalPagesReducer } from './totalPagesReducer';


export const rootReducer = combineReducers({
  authorName: authorNameReducer,
  themeName: themeNameReducer,
  themeLink: themeLinkReducer,
  themeData: themeDataReducer,
  isLinkInvalid: isLinkInvalidReducer,
  authorNameExists: authorNameExistsReducer,
  themeNameExists: themeNameExistsReducer,
  loadingStatus: loadingStatusReducer,
  counter: counterReducer,
  totalPages: totalPagesReducer
})

const middleware = applyMiddleware(thunk)
export const store = createStore(rootReducer, middleware)

