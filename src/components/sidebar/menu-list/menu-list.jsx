import React from 'react';
import { Menu } from 'antd';
import { menuItems } from '../../../assets/data/menu-items/menu-items.jsx';
import classNames from 'classnames';

const MenuList = ({ collapsed, isMobile }) => {
    const menuClasses = classNames('menu_list', {
        'menu_list__collapsed': collapsed && !isMobile,
        'menu_list__mobile': isMobile,
        'menu_list__mobile__collapsed': collapsed && isMobile,
    });
    return (
        <div className={menuClasses}>
            <Menu
                mode="inline"
                items={menuItems}
            />
        </div>
    );
};

export default MenuList;
