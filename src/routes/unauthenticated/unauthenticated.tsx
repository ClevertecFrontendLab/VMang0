import { useSelector } from 'react-redux';
import { Outlet, Navigate  } from 'react-router-dom';
import { MAIN } from '@utils/constants/route-path/route-path';
import { Layout } from 'antd';
import { Blur } from '@components/blur/blur';
import { getAuthenticated, getLoadingState } from '@redux/slices/userSlice';

export const UnauthenticatedRoute = () => {
    const isAuthenticated = useSelector(rootState => getAuthenticated(rootState));
    const isLoading = useSelector(rootState => getLoadingState(rootState));
    return !isAuthenticated
        ? (
            <Layout className='app app__unauth'>
                <Blur styleProp={`${isLoading ? 'blur_disabled' : ''}`}><Outlet /></Blur>
            </Layout>
        )
        : <Navigate to={MAIN} replace />;
};
