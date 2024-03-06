import { createAsyncThunk } from '@reduxjs/toolkit';
import { FeedbackType } from '@redux/types/types';
import { FEEDBACK_URL } from '@utils/constants/urls/urls';
import { FEEDBACKS } from '@utils/constants/route-path/route-path';
import { push } from 'redux-first-history';
import { axiosPrivate } from '@utils/axios/axios';

export const getFeedbacks = createAsyncThunk<Array<FeedbackType>, void, { rejectValue: boolean }>(
    'feedback/all',
    async (_, { dispatch}) => {
        try {
            const response = await axiosPrivate.get(FEEDBACK_URL);
            const sortedFeedbacks = response.data.sort((a, b) =>
                new Date(a.createdAt) - new Date(b.createdAt));
            dispatch(push(FEEDBACKS));
            return sortedFeedbacks;
        } catch (e) {
            dispatch(push(FEEDBACKS));
            throw e.response;
        }
    }
);

export const addFeedback = createAsyncThunk<FeedbackType,
    { message?: string, rating: number }, { rejectValue: boolean }>(
    'feedback/add',
    async ({ message, rating }) => {
        try {
            const response = await axiosPrivate.post(FEEDBACK_URL, { message, rating });
            return response.data;
        } catch (e) {
            throw e.response;
        }
    }
);
