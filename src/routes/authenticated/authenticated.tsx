import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { LOGIN } from '@utils/constants/route-path/route-path';
import useAuthState from '@hooks/useAuthState';

export const AuthenticatedRoute: FC = () => {
    const { isAuthenticated } = useAuthState();
    return isAuthenticated
        ? <Outlet />
        : <Navigate to={LOGIN} replace />;
};
