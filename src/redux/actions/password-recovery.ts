import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    CHANGE_PASSWORD_URL,
    CHECK_EMAIL_URL,
    CONFIRM_EMAIL_URL
} from '@utils/constants/urls/urls';
import { push } from 'redux-first-history';
import {
    CHANGE_PASSWORD,
    CONFIRM_EMAIL, ERROR_CHANGE_PASSWORD,
    ERROR_CHECK_EMAIL,
    ERROR_CHECK_EMAIL_NOEXIST,
    SUCCESS_CHANGE_PASSWORD
} from '@utils/constants/route-path/route-path';
import axios, { axiosPrivate } from '../../utils/axios/axios';
import { TokenType } from '@redux/types/types';

export const checkEmail = createAsyncThunk<TokenType,
    { email: string }, { rejectValue: boolean }>(
    'recovery/check-email',
    async ({ email}, { dispatch }) => {
        try {
            const response = await axios.post(CHECK_EMAIL_URL, { email });
            dispatch(push(CONFIRM_EMAIL,
                { result: { status: 'info', email } }));
            return response.data;
        } catch (e) {
            const error = e.response
            if (error.status === 404 && error.data.message === 'Email не найден') {
                dispatch(push(ERROR_CHECK_EMAIL_NOEXIST,
                    { result: 'Email не найден' }));
                throw error.data;
            }
            dispatch(push(ERROR_CHECK_EMAIL,
                { result: 'Ошибка проверки e-mail!' }));
            throw error.data;
        }
    }
);

export const confirmEmail = createAsyncThunk<TokenType,
    { email: string, code: string }, { rejectValue: boolean }>(
    'recovery/confirm-email',
    async ({ email, code}, { dispatch }) => {
        try {
            const response = await axiosPrivate.post(CONFIRM_EMAIL_URL, { email, code });
            dispatch(push(CHANGE_PASSWORD,
                { result: 'Успешная проверка кода' }));
            return response.data;
        } catch (e) {
            dispatch(push(CONFIRM_EMAIL,
                { result: { status: 'error', email } }));
            throw e.response.data;
        }
    }
);

export const changePassword = createAsyncThunk<TokenType,
    { password: string, confirmPassword: string }, { rejectValue: boolean }>(
    'recovery/change-password',
    async ({ password, confirmPassword}, { dispatch }) => {
        try {
            const response = await axiosPrivate.post(
                CHANGE_PASSWORD_URL,
                { password, confirmPassword }
            );
            dispatch(push(SUCCESS_CHANGE_PASSWORD,
                { result: 'Успешное изменение пароля!' }));
            return response.data;
        } catch (e) {
            dispatch(push(ERROR_CHANGE_PASSWORD,
                { result: 'Ошибка изменения пароля!' }));
            throw e.response.data;
        }
    }
)


