import { FeedbacksType } from '@redux/types/types';
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { addFeedback, getFeedbacks } from '@redux/actions/feedback';

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
export const isAddSuccessSelector = (state) => state.feedback.isAddSuccess;
export const isAddErrorSelector = (state) => state.feedback.isAddError;
export const isGetAllErrorSelector = (state) => state.feedback.isGetAllError;
export const feedbacksSelector = (state) => state.feedback.feedbacks;
export const isLoadingSelector = (state) => state.feedback.isLoading;

export const { setIsGetAllError } = feedbackSlice.reducer;
export default feedbackSlice.reducer;
