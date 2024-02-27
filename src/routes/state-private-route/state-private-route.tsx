import { FC } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { LOGIN } from '@utils/constants/route-path/route-path';

export const StatePrivateRoute: FC = () => {
    const { state } = useLocation();
    return state && state.result
        ? <Outlet />
        : <Navigate to={LOGIN} replace />;
};
