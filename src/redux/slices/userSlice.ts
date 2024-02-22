import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { UserType } from '@redux/types/types';
import { login } from '@redux/actions/login';
import { RootState } from '@redux/configure-store';

const initialState: UserType = {
    accessToken: localStorage.getItem('accessToken') || '',
    isLoading: false,
    isRemember: false,
    isAuthenticated: !!localStorage.getItem('accessToken'),
    error: {
        statusCode: 0,
        error: '',
        message: ''
    }
};

const userSlice = createSlice<UserType, SliceCaseReducers<UserType>>({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

/*export const { setUser, logout } = userSlice.actions;*/
export const getLoadingState = (state: RootState) => state.user.isLoading;
export const getAuthenticated = (state: RootState) => state.user.isAuthenticated;
export default userSlice.reducer;
