import React from 'react';
import ExitIcon from '../../../assets/icons/exit-icon.jsx';
import { Button } from 'antd';

const ExitBtn = ({ collapsed }) => {
    return (
        <div className={`exit_btn ${collapsed ? 'exit_btn_collapsed' : ''}`}>
            <Button icon={<ExitIcon />}>Выход</Button>
        </div>
    );
};

export default ExitBtn;
