import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import { FC } from "react";

type Props = {
    collapsed: boolean,
    toggle: () => void,
    isMobile: boolean
}

export const MenuToggle: FC<Props> = ({ collapsed, toggle, isMobile }) => {
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
