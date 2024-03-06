import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN } from '@utils/constants/route-path/route-path';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { setAuthData } from '@redux/slices/userSlice';

export const RedirectWithTokenCheck = () => {
    const dispatch = useDispatch<AppDispatch>();
    const accessToken = new URLSearchParams(window.location.search).get('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken) {
            dispatch(setAuthData({ isAuthenticated: true, accessToken }));
        }
        navigate(MAIN);
    }, [accessToken, dispatch, navigate]);

    return null;
};
