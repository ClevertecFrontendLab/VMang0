import {FC} from 'react';
import { ExitIcon } from '@utils/icons/exit-icon';
import { Button } from 'antd';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { userLogout } from '@redux/slices/userSlice';

type Props = {
    collapsed: boolean,
    isMobile: boolean
}

export const ExitBtn: FC<Props> = ({ collapsed, isMobile }) => {
    const dispatch = useDispatch();
    const exitBtnClasses = classNames('exit_btn', {
        'exit_btn__collapsed': collapsed && !isMobile,
        'exit_btn__mobile': isMobile,
        'exit_btn__mobile__collapsed': collapsed && isMobile,
    });
    const handleLogout = () => {
        dispatch(userLogout());
    }
    return (
        <div className={exitBtnClasses}>
            <Button icon={<ExitIcon />}
                    aria-label='exit'
                    onClick={handleLogout}>
                Выход
            </Button>
        </div>
    );
};
