import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

export const Blur = ({ styleProp = '' }) => {
    return (
        <Layout className={`blur ${styleProp}`}>
            <Outlet />
        </Layout>
    );
};
