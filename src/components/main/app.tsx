import { FC } from 'react';
import { routes } from '../../routes';
import { store, history } from '@redux/configure-store';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

export const App: FC = () => (
    <Provider store={store}>
        <HistoryRouter history={history}>{ routes }</HistoryRouter>
    </Provider>
);
