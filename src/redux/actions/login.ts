import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN_URL } from '@utils/constants/urls/urls';
import { push } from 'redux-first-history';
import { MAIN } from '@utils/constants/route-path/route-path';
import axios from '../../utils/axios/axios';
import { ErrorType, TokenType } from '@redux/types/types';

export const login = createAsyncThunk<TokenType,
    { email: string, password: string, isRemember: boolean }, { rejectValue: ErrorType }>(
    'user/login',
    async ({ email, password, isRemember }, { dispatch }) => {
        try {
            const response = await axios.post(LOGIN_URL, { email, password });
            if (isRemember) {
                localStorage.setItem('accessToken', response.data?.accessToken);
            }
            dispatch(push(MAIN));
            return response.data;
        } catch (e) {
            throw e.response.data;
        }
    }
)
