import React, { useState } from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;
import Logo from './logo'
import MenuList from './menu-list'
import ExitBtn from '@components/sidebar/exit-btn/index.jsx';
import SidebarContainer from '@components/sidebar/sidebar-container/index.jsx';
import MenuToggle from '@components/sidebar/menu-toggle/menu-toggle.jsx';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <SidebarContainer>
            <Sider
                theme={'light'}
                trigger={null}
                collapsible
                collapsed={collapsed}
                className='sidebar'
                width={208}
                collapsedWidth={64}>
                <Logo collapsed={collapsed} />
                <MenuList collapsed={collapsed} />
                <ExitBtn collapsed={collapsed} />
            </Sider>
            <MenuToggle
                collapsed={collapsed}
                setCollapsed={setCollapsed}/>
        </SidebarContainer>
    );
};

export default Sidebar;
