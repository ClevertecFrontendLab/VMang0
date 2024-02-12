import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar';
import Header from '@components/header';
import MainPage from '@components/main-page';
import Footer from '@components/footer';
const { Content } = Layout;

const App = () => {
    return (
        <Layout className='app'>
            <Sidebar />
            <Layout className='app__layout'>
                <Header />
                <Content className='content'>
                    <MainPage />
                    <Footer />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
