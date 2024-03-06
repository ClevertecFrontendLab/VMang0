import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import recoveryReducer from './slices/recoverySlice';
import feedbackReducer from './slices/feedbackSlice';
import userReducer from './slices/userSlice';
import { axiosPrivate } from '@utils/axios/axios';

const { routerMiddleware, createReduxHistory, routerReducer } =
    createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 1 });

const rootReducer = combineReducers({
    router: routerReducer,
    user: userReducer,
    recoveryPassword: recoveryReducer,
    feedback: feedbackReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

axiosPrivate.interceptors.request.use((config) => {
    const state: RootState = store.getState();
    const accessToken = state?.user?.accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});
