import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import { store } from '@redux/configure-store';
import 'normalize.css';
import 'antd/dist/antd.css';
import './utils/style/global.scss';
import { App } from '@components/main';
import { createRoot } from 'react-dom/client';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                </Routes>
            </HashRouter>
        </Provider>
    </StrictMode>
);
