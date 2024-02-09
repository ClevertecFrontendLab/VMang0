import React from 'react';
import ExitIcon from '../../../assets/icons/exit-icon.jsx';
import { Button } from 'antd';

const ExitBtn = () => {
    return (
        <div className='exit_btn'>
            <Button icon={<ExitIcon />} >Выход</Button>
        </div>
    );
};

export default ExitBtn;
