import loader from './loader.json';
import Lottie from 'react-lottie';
import { Layout } from 'antd';

export const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <Layout className='loader'>
            <Lottie options={defaultOptions} />
        </Layout>
    );
};
