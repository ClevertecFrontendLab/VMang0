import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { MainContent } from './main-content/main-content';
import { AuthenticatedRoute } from './authenticated/authenticated';
import { UnauthenticatedRoute } from './unauthenticated/unauthenticated';
import { MAIN, LOGIN, REGISTRATION } from '@utils/constants/route-path/route-path';
import { AuthContainer } from '@components/auth-container';

export const routes = (
    <Routes>
        <Route exact path='/' element={<Navigate to={MAIN} />}/>

        <Route element={<AuthenticatedRoute />} >
            <Route element={<MainContent />}>
                <Route path={MAIN} element={<MainPage />} />
            </Route>
            <Route path='*' element={() => 'страницы нет'} />
        </Route>

        <Route element={<UnauthenticatedRoute />}>
            <Route exact path={LOGIN} element={<AuthContainer />}/>
            <Route path={REGISTRATION} element={<AuthContainer />}/>
        </Route>
        <Route path='*' element={() => 'страницы нетэ'} />
    </Routes>
);
