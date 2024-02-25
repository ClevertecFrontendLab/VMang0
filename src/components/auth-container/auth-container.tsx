import { useLocation } from 'react-router-dom';
import logo from '@components/sidebar/logo/logo.png';
import { LOGIN, REGISTRATION } from '@utils/constants/route-path/route-path';
import { LoginForm } from '@components/login-form';
import { RegistrationForm } from '@components/registration-form';
import { Blur } from '@components/blur/blur';
import { Loader } from '@components/loader';
import { useSelector } from 'react-redux';
import { getLoadingState } from '@redux/slices/userSlice';
import classNames from 'classnames';
import { Tabs } from '@components/tabs';

export const AuthContainer = () => {
    const isLoading = useSelector(rootState => getLoadingState(rootState));
    const { pathname } = useLocation();
    const authFormClasses = classNames('auth_container', {
        'auth_container_fixed': isLoading,
        'auth_container_registr': pathname === REGISTRATION
    });

    return (
        <>
            { isLoading && <Blur styleProp='blur_center' />}
            { isLoading && <Loader /> }
            <div className={authFormClasses}>
                <img src={logo} alt='cleverFIT logotype' loading='lazy'/>
                <Tabs />
                { pathname === LOGIN ? <LoginForm /> : <RegistrationForm /> }
            </div>
        </>
    );
};
