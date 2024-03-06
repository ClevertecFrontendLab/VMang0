import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { RegistrationDataType, UserType } from '@redux/types/types';
import { login } from '@redux/actions/login';
import { RootState } from '@redux/configure-store';
import { registration } from '@redux/actions/registration';

const initialState: UserType = {
    accessToken: localStorage.getItem('accessToken') || '',
    isLoading: false,
    isAuthenticated: !!localStorage.getItem('accessToken'),
    error: false,
    registrationData: {
        email: '',
        password: ''
    }
};

const userSlice = createSlice<UserType, SliceCaseReducers<UserType>>({
    name: 'user',
    initialState,
    reducers: {
        setErrorState: (state, action) => {
            state.error = action.payload;
        },
        setLoadingState: (state, action) => {
            state.isLoading = action.payload;
        },
        setAuthData: (state, action: PayloadAction<UserType>) => {
            const { accessToken, isAuthenticated } = action.payload;
            localStorage.setItem('accessToken', accessToken);
            state.isAuthenticated = isAuthenticated;
            state.accessToken = accessToken;
        },
        userLogout: (state) => {
            state.accessToken = '';
            state.isAuthenticated = false;
            localStorage.removeItem('accessToken');
        },
        setRegistrationData: (state,  action: PayloadAction<RegistrationDataType>) => {
            state.registrationData = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;
                state.isLoading = false;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(registration.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registration.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registration.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export const { setErrorState, userLogout, setRegistrationData, setLoadingState, setAuthData }
    = userSlice.actions;
export const getLoadingState = (state: RootState) => state.user.isLoading;
export const getAuthenticated = (state: RootState) => state.user.isAuthenticated;
export default userSlice.reducer;
