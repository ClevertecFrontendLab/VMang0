import React from 'react';
import logo from './logo.png';
import logo_collapsed from './logo_collapsed.png';

const Logo = ({ collapsed }) => {
    return (
        <div className='logo'>
            <img src={collapsed ? logo_collapsed : logo} alt="cleverFIT logotype"/>
        </div>
    );
};

export default Logo;
