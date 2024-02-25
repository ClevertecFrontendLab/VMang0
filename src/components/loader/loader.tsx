import loader from './loader.json';
import Lottie from 'lottie-react';
import { Layout } from 'antd';

export const Loader = () => (
    <Layout className='loader' data-test-id='loader'>
        <Lottie animationData={loader} />
    </Layout>
);
