import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Sidebar } from '@components/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { getLoadingState, setLoadingState } from '@redux/slices/userSlice';
import { Loader } from '@components/loader';

export const MainContent: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isLoadingAuth = useSelector(rootState => getLoadingState(rootState));

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setLoadingState(false));
        }, 100);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Layout className='app'>
            { isLoadingAuth && <Loader style={{ zIndex: '-100' }}/>}
            <Sidebar />
            <Layout className='app__layout'>
                <Header />
                <Outlet />
                <Footer />
            </Layout>
        </Layout>
    )
}
