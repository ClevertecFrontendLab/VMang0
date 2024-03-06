import { useSelector } from 'react-redux';
import { isLoadingSelector as userLoading } from '@redux/slices/userSlice';
import { isLoadingSelector as feedbackLoading } from '@redux/slices/feedbackSlice';
import { isLoadingSelector as recoveryLoading } from '@redux/slices/recoverySlice';

const useLoadingState = () => {
    const isLoadingAuth = useSelector(userLoading);
    const isLoadingRecoveryPass = useSelector(recoveryLoading);
    const isLoadingFeedback = useSelector(feedbackLoading);
    return {
        isLoadingAuth,
        isLoadingRecoveryPass,
        isLoadingFeedback
    };
};

export default useLoadingState;
