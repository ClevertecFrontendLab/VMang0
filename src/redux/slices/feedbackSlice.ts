import { FeedbacksType } from '@redux/types/types';
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { addFeedback, getFeedbacks } from '@redux/actions/feedback';
import { RootState } from '@redux/configure-store';

const initialState: FeedbacksType = {
    isLoading: false,
    feedbacks: null,
    isGetAllError: false,
    isAddError: false,
    isAddSuccess: false,
}

const feedbackSlice = createSlice<FeedbacksType, SliceCaseReducers<FeedbacksType> >({
    name: 'feedback',
    initialState,
    reducers: {
        setFeedbacks: (state,  action) => {
            state.feedbacks = action.payload;
        },
        setIsGetAllError: (state) => {
            state.isGetAllError = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getFeedbacks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.feedbacks = action.payload;
            })
            .addCase(getFeedbacks.pending, (state) => {
                state.isLoading = true;
                state.isGetAllError = false
            })
            .addCase(getFeedbacks.rejected, (state) => {
                state.isLoading = false;
                state.isGetAllError = true;
            })
            .addCase(addFeedback.fulfilled, (state) => {
                state.isLoading = false;
                state.isAddSuccess = true;
                state.isAddError = false;
            })
            .addCase(addFeedback.pending, (state) => {
                state.isLoading = true;
                state.isAddError = false;
                state.isAddSuccess = false
            })
            .addCase(addFeedback.rejected, (state) => {
                state.isLoading = false;
                state.isAddError = true;
                state.isAddSuccess = false
            })
    }
})

export const { setIsGetAllError } = feedbackSlice.reducer;
export const getLoadingState = (state: RootState) => state.feedback.isLoading;
export default feedbackSlice.reducer;
