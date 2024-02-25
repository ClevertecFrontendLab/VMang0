import { Blur } from '@components/blur';
import { Layout } from 'antd';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { LOGIN } from '@utils/constants/route-path/route-path';

export const Result = () => {
    const location = useLocation();
    const { state } = location;
    return state && state.result
        ? (
            <Layout className='app app__unauth'>
                <Blur><Outlet /></Blur>
            </Layout>
        )
        : <Navigate to={LOGIN} replace />;
};
