import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import { Result, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { AppDispatch } from '@redux/configure-store';
import { confirmEmail } from '@redux/actions/password-recovery';
import useLoadingState from '@hooks/useLoadingState';

export const CodeForm: FC = () => {
    const { isLoadingRecoveryPass } = useLoadingState();
    const [code, setCode] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const { state } = useLocation();
    const { status, email } = state.result || {};
    const emailWithStyle = <span style={{ fontWeight: '700' }}>{email}</span>
    const title = status === 'error'
        ? 'Неверный код. Введите код для\u00A0восстановления аккаунта'
        : 'Введите код для\u00A0восстановления аккаунта';

    const handleComplete = async (e: string) => {
        await dispatch(confirmEmail({ email, code: e }));
    }

    useEffect(() => {
        setCode('');
    }, [state])

    return (
        <Result
            status={status}
            title={title}
            subTitle={(
                <span>
                    Мы отправили вам на e-mail {emailWithStyle} шестизначный&nbsp;код.
                    Введите его в поле ниже.
                </span>
            )}
            className={classNames('code_form', {
                'code_form_fixed': isLoadingRecoveryPass
            })}
            extra={
                <>
                    <VerificationInput placeholder=''
                                       value={code}
                                       length={6}
                                       autoFocus={false}
                                       validChars='0-9'
                                       onChange={(e) => setCode(e)}
                                       onComplete={handleComplete}
                                       inputProps={{ 'data-test-id': 'verification-input' }}
                                       classNames={{
                                           container: 'container',
                                           character: classNames('character', {
                                               'character_error': status === 'error'
                                           }),
                                           characterInactive: 'character--inactive',
                                           characterSelected: 'character--selected',
                                       }}/>
                    <Typography.Text>
                        Не пришло письмо? Проверьте папку&nbsp;Спам.
                    </Typography.Text>
                </>
            }
        />
    );
};
