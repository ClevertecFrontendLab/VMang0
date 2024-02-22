import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { LOGIN } from '@utils/constants/route-path/route-path';

export const AuthenticatedRoute = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    return isAuthenticated
        ? <Outlet />
        : <Navigate to={LOGIN} />;
};
