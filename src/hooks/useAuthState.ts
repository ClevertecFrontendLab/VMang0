import { useSelector } from 'react-redux';
import { getAuthenticated } from '@redux/slices/userSlice';

const useAuthState = () => {
    const isAuthenticated = useSelector(rootState => getAuthenticated(rootState));
    const registrationData = useSelector( state => state.user.registrationData);
    return {
        isAuthenticated,
        registrationData
    };
};

export default useAuthState;
