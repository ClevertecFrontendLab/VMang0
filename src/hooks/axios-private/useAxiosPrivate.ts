import { useEffect } from 'react';
import { axiosPrivate } from '@utils/axios/axios';
import { useSelector } from 'react-redux';

const useAxiosPrivate = () => {
    const accessToken = useSelector((state) => state.user?.accessToken);

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        /*const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );*/

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            //axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [accessToken])

    return axiosPrivate;
}

export default useAxiosPrivate;
