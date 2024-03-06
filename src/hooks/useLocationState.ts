import { useSelector } from 'react-redux';

const useLocationState = () => {
    const previousPath = useSelector((state) =>
        state.router.previousLocations[1]?.location?.pathname);
    return {
        previousPath
    };
};

export default useLocationState;
