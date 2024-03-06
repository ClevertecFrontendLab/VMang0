import { useSelector } from 'react-redux';
import { isAuthenticatedSelector, registrationDataSelector } from '@redux/slices/userSlice';

const useAuthState = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const registrationData = useSelector(registrationDataSelector);
    return {
        isAuthenticated,
        registrationData
    };
};

export default useAuthState;
