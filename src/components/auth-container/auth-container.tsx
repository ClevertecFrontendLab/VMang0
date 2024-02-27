import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { LOGIN, REGISTRATION } from '@utils/constants/route-path/route-path';
import { LoginForm } from '@components/login-form';
import { RegistrationForm } from '@components/registration-form';
import { Blur } from '@components/blur/blur';
import { Loader } from '@components/loader';
import { useSelector } from 'react-redux';
import { getLoadingState } from '@redux/slices/userSlice';
import classNames from 'classnames';
import { Tabs } from '@components/tabs';
import logo_ from '../sidebar/logo/logo.svg';

export const AuthContainer: FC = () => {
    const isLoadingAuth = useSelector(rootState => getLoadingState(rootState));
    const isLoadingRecoveryPass = useSelector(state => state.recoveryPassword.isLoading);
    const { pathname } = useLocation();
    const authFormClasses = classNames('auth_container', {
        'auth_container_fixed': isLoadingAuth || isLoadingRecoveryPass,
        'auth_container_registr': pathname === REGISTRATION
    });

    return (
        <>
            { (isLoadingAuth || isLoadingRecoveryPass) && <Blur />}
            { (isLoadingAuth || isLoadingRecoveryPass) && <Loader /> }
            <div className={authFormClasses}>
                <img src={logo_} alt='cleverFIT logotype' loading='lazy'/>
                <Tabs />
                { pathname === LOGIN ? <LoginForm /> : <RegistrationForm /> }
            </div>
        </>
    );
};
