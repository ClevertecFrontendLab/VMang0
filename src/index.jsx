import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { store } from '@redux/configure-store';
import 'normalize.css';
import 'antd/dist/antd.css';
import './utils/style/global.scss';
import App from '@components/main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
