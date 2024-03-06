import { FC } from 'react';
import { Outlet, Navigate  } from 'react-router-dom';
import { MAIN } from '@utils/constants/route-path/route-path';
import { Layout } from 'antd';
import { Blur } from '@components/blur/blur';
import { Loader } from '@components/loader';
import classNames from 'classnames';
import useLoadingState from '@hooks/useLoadingState';
import useAuthState from '@hooks/useAuthState';

export const UnauthenticatedRoute: FC = () => {
    const { isLoadingAuth, isLoadingRecoveryPass } = useLoadingState();
    const { isAuthenticated } = useAuthState();
    const blurClasses = classNames('blur_default', {
        'blur_disabled': isLoadingAuth || isLoadingRecoveryPass,
    });
    return !isAuthenticated
        ? (
            <div className='main_container'>
                { (isLoadingAuth || isLoadingRecoveryPass) && <Blur />}
                { (isLoadingAuth || isLoadingRecoveryPass) && <Loader /> }
                <Layout className='app app__unauth'>
                    <Blur styleProp={blurClasses} />
                    <Outlet />
                </Layout>
            </div>
        )
        : <Navigate to={MAIN} replace />;
};
