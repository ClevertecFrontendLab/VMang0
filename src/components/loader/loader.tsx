import { FC } from 'react';
import loader from './loader.json';
import Lottie from 'lottie-react';
import { Spin } from 'antd';

export const Loader: FC = () => (
    <Spin className='loader'
          indicator={ <Lottie animationData={loader} data-test-id='loader'/> }
    />
);
