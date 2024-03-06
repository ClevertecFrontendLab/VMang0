import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';
import { Loader } from '@components/loader';
import { Blur } from '@components/blur';
import classNames from 'classnames';
import useLoadingState from '@hooks/useLoadingState';

export const MainContent: FC = () => {
    const { isLoadingFeedback, isLoadingAuth } = useLoadingState();
    const mainContentClasses = classNames('app', {
        'app_fixed': isLoadingAuth || isLoadingFeedback
    });
    return (
        <div className='main_container'>
            { (isLoadingAuth || isLoadingFeedback) && <Blur />}
            { (isLoadingAuth || isLoadingFeedback) && <Loader /> }
            <Layout className={mainContentClasses}>
                <Sidebar />
                <Layout className='app__layout'>
                    <Header />
                    <Layout className='app__content'>
                        <Outlet />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}
