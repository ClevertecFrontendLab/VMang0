import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN } from '@utils/constants/route-path/route-path';
import { push } from 'redux-first-history';
import { REGISTRATION_URL } from '@utils/constants/urls/urls';
import axios from '../../utils/axios/axios';

export const registration = createAsyncThunk(
    "auth/registration",
    async ({ email, password }, { dispatch }) => {
        try {
            const response = await axios.post(REGISTRATION_URL, { email, password });
            dispatch(push(LOGIN));
            return response.data;
        } catch (e) {
            throw e.response.data.message;
        }
    }
);
