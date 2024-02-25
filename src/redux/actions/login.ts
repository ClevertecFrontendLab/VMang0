import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN_URL } from '@utils/constants/urls/urls';
import { push } from 'redux-first-history';
import { ERROR_LOGIN, MAIN } from '@utils/constants/route-path/route-path';
import axios from '../../utils/axios/axios';
import { TokenType } from '@redux/types/types';
import { setErrorState } from '@redux/slices/userSlice';

export const login = createAsyncThunk<TokenType,
    { email: string, password: string, isRemember: boolean }, { rejectValue: boolean }>(
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
            dispatch(setErrorState(true));
            dispatch(push(ERROR_LOGIN, { result: 'Ошибка авторизации!' }));
            throw e.response.data;
        }
    }
)
