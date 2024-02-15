import { Menu } from 'antd';
import { menuItems } from '@utils/data/menu-items/menu-items.js';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
    collapsed: boolean,
    isMobile: boolean
}

export const MenuList: FC<Props> = ({ collapsed, isMobile }) => {
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
