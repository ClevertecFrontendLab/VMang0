import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Sidebar } from '@components/sidebar';

export const MainContent = () => (
    <Layout className='app'>
        <Sidebar />
        <Layout className='app__layout'>
            <Header />
            <Outlet />
            <Footer />
        </Layout>
    </Layout>
);
