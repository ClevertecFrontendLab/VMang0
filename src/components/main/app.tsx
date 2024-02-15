import { Layout } from 'antd';
import { Sidebar } from '@components/sidebar';
import { Header} from '@components/header';
import { Footer } from '@components/footer';
import { MainPage } from '@components/main-page';
import { FC } from 'react';
const { Content } = Layout;

export const App: FC = () => {
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
