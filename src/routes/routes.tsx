import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { MainContent } from './main-content/main-content';
import { AuthenticatedRoute } from './authenticated/authenticated';
import { UnauthenticatedRoute } from './unauthenticated/unauthenticated';
import {
    MAIN,
    LOGIN,
    REGISTRATION,
    ERROR_LOGIN,
    SUCCESS_REGISTRATION, ERROR_REG_USER_EXIST, ERROR_REGISTRATION
} from '@utils/constants/route-path/route-path';
import { AuthContainer } from '@components/auth-container';
import { ResultWindow } from '@components/result';
import { Result } from './result/result';
import { result } from '@utils/data/result/result';

export const Routes_ = () => (
    <Routes>
        <Route exact path='/' element={<Navigate to={MAIN} />}/>

        <Route element={<AuthenticatedRoute />} >
            <Route element={<MainContent />}>
                <Route path={MAIN} element={<MainPage />} />
            </Route>
        </Route>

        <Route element={<UnauthenticatedRoute />}>
            <Route exact path={LOGIN} element={<AuthContainer />}/>
            <Route path={REGISTRATION} element={<AuthContainer />}/>
        </Route>

        <Route element={<Result />}>
            <Route path={ERROR_LOGIN}
                   element={ <ResultWindow data={result[0]} /> } />
            <Route path={SUCCESS_REGISTRATION}
                   element={ <ResultWindow data={result[1]} /> } />
            <Route path={ERROR_REG_USER_EXIST}
                   element={ <ResultWindow data={result[2]} /> } />
            <Route path={ERROR_REGISTRATION}
                   element={ <ResultWindow data={result[3]} /> } />
        </Route>
    </Routes>
);
