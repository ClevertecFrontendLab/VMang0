import React from 'react';
import logo from './logo.png';
import logo_collapsed from './logo_collapsed.png';
import classNames from 'classnames';

const Logo = ({ collapsed, isMobile }) => {
    const logoClasses = classNames('logo', {
        'logo__collapsed': collapsed && !isMobile,
        'logo__mobile': isMobile,
        'logo__mobile__collapsed': collapsed && isMobile,
    });

    return (
        <div className={logoClasses}>
            <img src={collapsed ? logo_collapsed : logo} alt="cleverFIT logotype"/>
        </div>
    );
};

export default Logo;
