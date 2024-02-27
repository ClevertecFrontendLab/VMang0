import { Button, Result } from 'antd';
import { FC } from 'react';
import { AppDispatch, history } from '@redux/configure-store';
import { useDispatch } from 'react-redux';
import { ERROR_CHANGE_PASSWORD } from '@utils/constants/route-path/route-path';
import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';

type Props = {
    data: {
        status: string,
        mainTitle: string,
        title: string,
        btnName: string,
        link: string,
        testId: string
    }
    style?: string,
}

export const ResultWindow: FC<Props> = ({ data, style= '' }) => {
    const { status, mainTitle, title, btnName, link, testId } = data;
    const dispatch = useDispatch<AppDispatch>();
    const { pathname } = useLocation();
    const handleClick = () => {
        if (pathname === ERROR_CHANGE_PASSWORD) {
            dispatch(push(link,
                { result: 'Ошибка изменения пароля!' }));
        } else {
            history.replace(link);
        }
    };

    return (
        <Result
            className={`result ${style}`}
            status={status}
            title={mainTitle}
            subTitle={title}
            extra={
                <Button type='primary'
                        data-test-id={testId}
                        onClick={handleClick}>
                    { btnName }
                </Button>
            }
        />
    );
};
