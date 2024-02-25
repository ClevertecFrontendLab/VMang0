import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    ERROR_REG_USER_EXIST,
    ERROR_REGISTRATION,
    SUCCESS_REGISTRATION
} from '@utils/constants/route-path/route-path';
import { push } from 'redux-first-history';
import { REGISTRATION_URL } from '@utils/constants/urls/urls';
import axios from '../../utils/axios/axios';
import { TokenType } from '@redux/types/types';
import { setErrorState } from '@redux/slices/userSlice';

export const registration = createAsyncThunk<TokenType,
    { email: string, password: string }, { rejectValue: boolean }>(
    'auth/registration',
    async ({ email, password }, { dispatch }) => {
        try {
            const response = await axios.post(REGISTRATION_URL, { email, password });
            dispatch(push(SUCCESS_REGISTRATION, { result: 'Регистрация прошла успешно!' }));
            return response.data;
        } catch (e) {
            const error = e.response;
            dispatch(setErrorState(true));
            if (error.status === 409) {
                dispatch(push(ERROR_REG_USER_EXIST,
                    { result: 'Пользователь с таким e-mail уже существует!' }));
                throw error.data.message;
            }
            dispatch(push(ERROR_REGISTRATION, { result: 'Ошибка регистрации!' }));
            throw error.data.message;
        }
    }
);
