import { Layout } from 'antd';
const { Sider } = Layout;
import { Logo } from './logo'
import { MenuList } from './menu-list'
import { MenuToggle } from '@components/sidebar/menu-toggle';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint.js';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { ExitBtn } from '@components/sidebar/exit-btn';

export const Sidebar: FC = () => {
    const { xs } = useBreakpoint();
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed( state => !state);
    }
    const isMobile = xs ? {
        width: 106,
        collapsed: 0
    } : {
        width: 208,
        collapsed: 64
    };
    const sidebarContainerClasses = classNames('sidebar_container', {
        'sidebar_container__mobile': xs,
    });
    return (
        <div className={sidebarContainerClasses}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={isMobile.width}
                collapsedWidth={isMobile.collapsed}>
                <Logo collapsed={collapsed} isMobile={xs} />
                <MenuList collapsed={collapsed} isMobile={xs} />
                <ExitBtn collapsed={collapsed} isMobile={xs} />
            </Sider>
            <MenuToggle
                collapsed={collapsed}
                toggle={toggle}
                isMobile={xs}
            />
        </div>
    );
};
