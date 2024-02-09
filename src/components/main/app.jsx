import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@components/sidebar/index.jsx';
const { Header, Content } = Layout;
import { ConfigProvider } from 'antd';
import { customBreakpoints } from '../../assets/data/custom-breakpoints/index.js';

const App = () => {
    return (
        <ConfigProvider breakpoints={ customBreakpoints }>
            <Layout className='app'>
                <Sidebar />
                <Layout>
                    <Header>Header</Header>
                    <Content className='app__content'>Content</Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
