// IMPORTANT: be sure to install history v4.10.1
// see open issue: https://github.com/supasate/connected-react-router/issues/312#issuecomment-647082777

import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

// combineReducers will be handled internally by configureStore
const rootReducer = (h: any) => ({
  router: connectRouter(h),
});

const preloadedState = {};
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
  reducer: rootReducer(history),

  preloadedState,
});
