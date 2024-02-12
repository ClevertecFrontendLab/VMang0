import React from 'react';
import ExitIcon from '@utils/icons/exit-icon.jsx';
import { Button } from 'antd';
import classNames from 'classnames';

const ExitBtn = ({ collapsed, isMobile }) => {
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

export default ExitBtn;
