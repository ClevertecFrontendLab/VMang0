import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import {Button} from 'antd';

const MenuToggle = ({ collapsed, setCollapsed }) => {
    return (
        <Button data-test-id='sider-switch'
                onClick={() => setCollapsed(!collapsed)}
                className='menu_toggle'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } />
    );
};
export default MenuToggle;
