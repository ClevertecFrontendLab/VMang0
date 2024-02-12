import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import {Button} from 'antd';
import classNames from 'classnames';

const MenuToggle = ({ collapsed, toggle, isMobile }) => {
    const test_id = isMobile ? 'sider-switch-mobile' : 'sider-switch';
    const exitBtnClasses = classNames('menu_toggle', {
        'menu_toggle__mobile': isMobile
    });
    return (
        <Button data-test-id={test_id}
                onClick={toggle}
                className={exitBtnClasses}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } />
    );
};
export default MenuToggle;
