import React from 'react';
import { Menu } from 'antd';
import { menuItems } from '../../../assets/data/menu-items/menu-items.jsx';

const MenuList = ({ collapsed }) => {
    return (
        <div className={`menu_list ${collapsed ? 'menu_list_collapsed' : ''}`}>
            <Menu
                theme={'light'}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menuItems}
            />
        </div>
    );
};

export default MenuList;
