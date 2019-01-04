import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authorNameReducer } from './authorNameReducer';
import { themeNameReducer } from './themeNameReducer';
import { themeLinkReducer } from './themeLinkReducer';
import { themeDataReducer } from './themeDataReducer';
import { isLinkInvalidReducer } from './isLinkInvalidReducer';
import { authorNameErrorReducer } from './authorNameErrorReducer';
import { themeNameErrorReducer } from './themeNameErrorReducer';
import { loadingStatusReducer } from './loadingStatusReducer';
import { counterReducer } from './counterReducer';
import { totalPagesReducer } from './totalPagesReducer';


export const rootReducer = combineReducers({
  authorName: authorNameReducer,
  themeName: themeNameReducer,
  themeLink: themeLinkReducer,
  themeData: themeDataReducer,
  isLinkInvalid: isLinkInvalidReducer,
  authorNameError: authorNameErrorReducer,
  themeNameError: themeNameErrorReducer,
  loadingStatus: loadingStatusReducer,
  counter: counterReducer,
  totalPages: totalPagesReducer
});

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware);

