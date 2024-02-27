import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate  } from 'react-router-dom';
import { MAIN } from '@utils/constants/route-path/route-path';
import { Layout } from 'antd';
import { Blur } from '@components/blur/blur';
import { getAuthenticated, getLoadingState } from '@redux/slices/userSlice';

export const UnauthenticatedRoute: FC = () => {
    const isAuthenticated = useSelector(rootState => getAuthenticated(rootState));
    const isLoadingAuth = useSelector(rootState => getLoadingState(rootState));
    const isLoadingRecoveryPass = useSelector(state => state.recoveryPassword.isLoading);
    return !isAuthenticated
        ? (
            <Layout className='app app__unauth'>
                <Blur styleProp={`${isLoadingAuth || isLoadingRecoveryPass
                    ? 'blur_disabled' : ''}`}>
                    <Outlet />
                </Blur>
            </Layout>
        )
        : <Navigate to={MAIN} replace />;
};
