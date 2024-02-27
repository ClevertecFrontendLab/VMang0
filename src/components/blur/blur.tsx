import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

type Props = {
    styleProp?: string
}

export const Blur: FC<Props> = ({ styleProp = '' }) => {
    return (
        <Layout className={`blur ${styleProp}`}>
            <Outlet />
        </Layout>
    );
};
