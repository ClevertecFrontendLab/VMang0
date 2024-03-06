import { useSelector } from 'react-redux';
import { getLoadingState as userLoading } from '@redux/slices/userSlice';
import { getLoadingState as feedbackLoading } from '@redux/slices/feedbackSlice';
import { getLoadingState as recoveryLoading } from '@redux/slices/recoverySlice';

const useLoadingState = () => {
    const isLoadingAuth = useSelector(rootState => userLoading(rootState));
    const isLoadingRecoveryPass = useSelector(rootState => recoveryLoading(rootState));
    const isLoadingFeedback = useSelector(rootState => feedbackLoading(rootState));
    return {
        isLoadingAuth,
        isLoadingRecoveryPass,
        isLoadingFeedback
    };
};

export default useLoadingState;
