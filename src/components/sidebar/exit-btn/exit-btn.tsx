import {FC} from 'react';
import { ExitIcon } from '@utils/icons/exit-icon';
import { Button } from 'antd';
import classNames from 'classnames';

type Props = {
    collapsed: boolean,
    isMobile: boolean
}

export const ExitBtn: FC<Props> = ({ collapsed, isMobile }) => {
    const exitBtnClasses = classNames('exit_btn', {
        'exit_btn__collapsed': collapsed && !isMobile,
        'exit_btn__mobile': isMobile,
        'exit_btn__mobile__collapsed': collapsed && isMobile,
    });
    return (
        <div className={exitBtnClasses}>
            <Button icon={<ExitIcon />} aria-label='exit'>Выход</Button>
        </div>
    );
};
