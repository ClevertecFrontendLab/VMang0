import { RecoveryType } from '@redux/types/types';
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { changePassword, checkEmail, confirmEmail } from '@redux/actions/password-recovery';
import { RootState } from '@redux/configure-store';

const initialState: RecoveryType = {
    isLoading: false,
    password: ''
}

const recoverySlice = createSlice<RecoveryType, SliceCaseReducers<RecoveryType> >({
    name: 'recovery',
    initialState,
    reducers: {
        setPassword: (state,  action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(checkEmail.fulfilled, (state) => {
                state.isLoading = false;
             })
            .addCase(checkEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkEmail.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(confirmEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(confirmEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(confirmEmail.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changePassword.rejected, (state) => {
                state.isLoading = false;
            })
    }
})
export const { setPassword } = recoverySlice.actions;
export const getLoadingState = (state: RootState) => state.recoveryPassword.isLoading;
export default recoverySlice.reducer;
