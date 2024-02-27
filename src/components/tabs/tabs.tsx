import { FC } from 'react';
import { LOGIN, REGISTRATION } from '@utils/constants/route-path/route-path';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import classNames from 'classnames';

const items = [
    { label: 'Вход', key: LOGIN },
    { label: 'Регистрация', key: REGISTRATION },
];

export const Tabs: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleChange = key => {
        if (key !== pathname) {
            navigate(key);
        }
    }

    return (
        <div className='tabs_wrapper'>
            {items.map((item) => (
                <Button key={item.key}
                        type='link'
                        className={classNames('tab',
                            { 'tab_active': pathname === item.key })}
                        onClick={() => handleChange(item.key)} >
                    { item.label }
                    { pathname === item.key && <div className='tab_line' /> }
                </Button>
            ))}
        </div>
    );
};
