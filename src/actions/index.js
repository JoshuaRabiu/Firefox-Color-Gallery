import axios from 'axios';
import { store } from '../reducers';

export const setThemeName = e => store.dispatch({ type: 'SET_THEME_NAME', payload: e.target.value });

export const setAuthorName = e => store.dispatch({ type: 'SET_AUTHOR_NAME', payload: e.target.value });

export const setThemeLink = e => store.dispatch({ type: 'SET_THEME_LINK', payload: e.target.value });

export const postTheme = () => {
  store.dispatch(dispatch => {
    const { themeLink, authorName, themeName } = store.getState();

    const doesInputHaveValue = param => !!param.replace(/\s/g, '').length;

    const isValidFirefoxColorLink = link => !!link.startsWith('https://color.firefox.com/?theme=');

    doesInputHaveValue(authorName) ? dispatch({ type: 'VALID_AUTHOR_NAME' }) : dispatch({ type: 'EMPTY_AUTHOR_NAME' });

    doesInputHaveValue(themeName) ? dispatch({ type: 'VALID_THEME_NAME' }) : dispatch({ type: 'EMPTY_THEME_NAME' });

    isValidFirefoxColorLink(themeLink) ? dispatch({ type: 'VALID_LINK' }) : dispatch({ type: 'INVALID_LINK' });

    if (
      !store.getState().isLinkInvalid &&
      !store.getState().authorNameError &&
      !store.getState().themeNameError
    ) {
      dispatch({ type: 'LOADING_STATUS', payload: true });
      const { authorName, themeName, themeLink } = store.getState();
      axios
        .post('/server', {
          authorName,
          themeName,
          themeLink
        })
        .then(res => {
          dispatch({ type: 'LOADING_STATUS', payload: false });
          window.history.pushState(null, null, '#/');
          window.location.reload();
        });
    }
  });
};

const pageHandler = whichAction => {
  store.dispatch(dispatch => {
    dispatch({ type: 'LOADING_STATUS', payload: true });
    dispatch({ type: whichAction });
    loadThemes();
  });
};

export const changePage = direction => {
  switch (direction) {
    case 'forward':
      pageHandler('INCREMENT');
      break;
    case 'back':
      pageHandler('DECREMENT');
      break;
    default:
      console.error('Critical error occured.');
      break;
  }
};

const getNumberOfPages = () => {
  store.dispatch(dispatch => {
    axios.get('http://ec2-18-188-223-76.us-east-2.compute.amazonaws.com/server/?dbSize').then(res => {
      const dbSize = Number(res.data);
      const totalNumOfPages = Math.ceil(dbSize / 9);
      dispatch({ type: 'SEND_TOTAL_NUMBER_OF_PAGES', payload: totalNumOfPages });
    });
  });
};

export const loadThemes = () => {
  store.dispatch(dispatch => {
    getNumberOfPages();
    axios.get(`http://ec2-18-188-223-76.us-east-2.compute.amazonaws.com/server/?${store.getState().counter}`).then(res => {
      dispatch({ type: 'SEND_DATA', payload: res.data });
      dispatch({ type: 'LOADING_STATUS', payload: false });
    });
  });
};
