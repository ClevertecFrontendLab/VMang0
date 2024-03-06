import { Result } from 'antd';
import { FC } from 'react';
import { AppDispatch, history } from '@redux/configure-store';
import { useDispatch } from 'react-redux';
import { ERROR_CHANGE_PASSWORD } from '@utils/constants/route-path/route-path';
import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';
import { ButtonContainer } from '@utils/style/ant/custom-containers';

type Props = {
    data: {
        status: string,
        mainTitle: string,
        title?: string,
        buttons: Array<ButtonType>
    }
    style?: string,
    handleClickOk?: () => void | undefined,
    handleClickCancel?: () => void,
    btnWidth?: string,
}

type ButtonType = {
    type: string
    btnName: string,
    link?: string,
    testId?: string,
}

export const ResultWindow: FC<Props> = ({ data,
                                            style= '',
                                            handleClickOk ,
                                            handleClickCancel  ,
                                            btnWidth}) => {
    const { status, mainTitle, title, buttons } = data;
    const dispatch = useDispatch<AppDispatch>();
    const { pathname } = useLocation();

    const handleClick = (button: ButtonType) => {
        const { link, type } = button;
        if (link) {
            if (pathname === ERROR_CHANGE_PASSWORD) {
                dispatch(push(link,
                    { result: 'Ошибка изменения пароля!' }));
            } else {
                history.replace(link);
            }
        } else {
            type === 'submit' ? handleClickOk() : handleClickCancel();
        }
    };

    return (
        <Result
            className={`result ${style}`}
            status={status}
            title={mainTitle}
            subTitle={title}
            extra={
                buttons.map((item, index) => (
                    <ButtonContainer key={index}
                                     type={item.type}
                                     name={item.btnName}
                                     data-test-id={item.testId}
                                     width={{ large: btnWidth }}
                                     onClick={() => handleClick(item)}>
                    </ButtonContainer>
                ))
            }
        />
    );
};
