import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainContent } from './main-content/main-content';
import { AuthenticatedRoute } from './authenticated/authenticated';
import { UnauthenticatedRoute } from './unauthenticated/unauthenticated';
import {
    MAIN,
    LOGIN,
    REGISTRATION,
    ERROR_LOGIN,
    SUCCESS_REGISTRATION,
    ERROR_REG_USER_EXIST,
    ERROR_REGISTRATION,
    ERROR_CHECK_EMAIL_NOEXIST,
    ERROR_CHECK_EMAIL,
    ERROR_CHANGE_PASSWORD,
    SUCCESS_CHANGE_PASSWORD,
    CONFIRM_EMAIL,
    CHANGE_PASSWORD, FEEDBACKS
} from '@utils/constants/route-path/route-path';
import { AuthContainer } from '@components/auth-container';
import { ResultWindow } from '@components/result';
import { result } from '@utils/data/result/result';
import { CodeForm } from '@components/code-form';
import { RecoveryPasswordForm } from '@components/recovery-password-form';
import { StatePrivateRoute } from './state-private-route/state-private-route';
import { MainPage } from '@pages/main-page';
import { FeedbacksPage } from '@pages/feedbacks-page';
import { RedirectWithTokenCheck } from './token-check/token-check';

export const Routes_: FC = () => (
    <Routes>
        <Route exact path='/' element={<RedirectWithTokenCheck />}/>

        <Route element={<AuthenticatedRoute />} >
            <Route element={<MainContent />}>
                <Route path={MAIN} element={<MainPage />} />
                <Route path={FEEDBACKS} element={<FeedbacksPage />} />
            </Route>
        </Route>

        <Route element={<UnauthenticatedRoute />}>
            <Route exact path={LOGIN} element={<AuthContainer />}/>
            <Route path={REGISTRATION} element={<AuthContainer />}/>

            <Route element={<StatePrivateRoute />}>
                <Route path={CONFIRM_EMAIL} element={<CodeForm />}/>
                <Route path={CHANGE_PASSWORD} element={<RecoveryPasswordForm />}/>

                <Route path={ERROR_LOGIN}
                       element={ <ResultWindow data={result[0]} btnWidth='100%'/> } />
                <Route path={SUCCESS_REGISTRATION}
                       element={ <ResultWindow data={result[1]} btnWidth='100%' /> } />
                <Route path={ERROR_REG_USER_EXIST}
                       element={ <ResultWindow data={result[2]} btnWidth='100%' /> } />
                <Route path={ERROR_REGISTRATION}
                       element={ <ResultWindow data={result[3]} btnWidth='100%' /> } />
                <Route path={ERROR_CHECK_EMAIL_NOEXIST}
                       element={ <ResultWindow data={result[4]}
                                               centered={true}
                                               style='result_specific result_centered' /> } />
                <Route path={ERROR_CHECK_EMAIL}
                       element={ <ResultWindow data={result[5]}
                                               btnWidth='100%'
                                               style='result_specific result_centered' /> } />
                <Route path={ERROR_CHANGE_PASSWORD}
                       element={ <ResultWindow data={result[6]}
                                               btnWidth='100%'
                                               style='result_specific_padding' /> } />
                <Route path={SUCCESS_CHANGE_PASSWORD}
                       element={ <ResultWindow data={result[7]}
                                               btnWidth='100%'
                                               style='result_specific_padding' /> } />
            </Route>
        </Route>
    </Routes>
);
