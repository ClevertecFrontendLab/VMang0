import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar/index.jsx';
const { Header, Content } = Layout;

const App = () => {
    return (
        <Layout className='app'>
            <Sidebar />
            <Layout>
                <Header>Header</Header>
                <Content className='app__content'>Content</Content>
            </Layout>
        </Layout>
    );
};

export default App;
