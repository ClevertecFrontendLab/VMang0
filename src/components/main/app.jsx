import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar/index.jsx';
import Header from '@components/header';
const { Content } = Layout;

const App = () => {
    return (
        <Layout className='app'>
            <Sidebar />
            <Layout className='app__layout'>
                <Header />
                <Content className='app__content'>Content</Content>
            </Layout>
        </Layout>
    );
};

export default App;
