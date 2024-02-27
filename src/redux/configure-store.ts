import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import userReducer from './slices/userSlice';
import recoveryReducer from './slices/recoverySlice';

const { routerMiddleware, createReduxHistory, routerReducer } =
    createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 1 });

const rootReducer = combineReducers({
    router: routerReducer,
    user: userReducer,
    recoveryPassword: recoveryReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
