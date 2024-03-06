import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { LOGIN, REGISTRATION } from '@utils/constants/route-path/route-path';
import { LoginForm } from '@components/login-form';
import { RegistrationForm } from '@components/registration-form';
import classNames from 'classnames';
import { Tabs } from '@components/tabs';
import logo_ from '../sidebar/logo/logo.svg';
import useLoadingState from '@hooks/useLoadingState';

export const AuthContainer: FC = () => {
    const { isLoadingAuth, isLoadingRecoveryPass } = useLoadingState();
    const { pathname } = useLocation();
    const authFormClasses = classNames('auth_container', {
        'auth_container_fixed': isLoadingAuth || isLoadingRecoveryPass,
        'auth_container_registr': pathname === REGISTRATION
    });
    return (
        <div className={authFormClasses}>
            <img src={logo_} alt='cleverFIT logotype' loading='lazy'/>
            <Tabs />
            { pathname === LOGIN ? <LoginForm /> : <RegistrationForm /> }
        </div>
    );
};
