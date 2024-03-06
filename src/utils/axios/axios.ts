import axios from 'axios';
import { BASE_URL } from '@utils/constants/urls/urls';
import { LOGIN } from '@utils/constants/route-path/route-path';

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

axiosPrivate.interceptors.response.use(
    async (response) => response,
    (e) => {
        if (e.response.status === 403 || e.response.status === 401) {
            localStorage.removeItem('accessToken');
            window.location.replace(LOGIN);
        }
        return Promise.reject(e);
    },
);
