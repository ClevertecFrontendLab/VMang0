import logo from './logo.svg';
import logo_collapsed from './logo_collapsed.svg';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
    collapsed: boolean,
    isMobile: boolean
}

export const Logo: FC<Props> = ({ collapsed, isMobile }) => {
    const logoClasses = classNames('logo', {
        'logo__collapsed': collapsed && !isMobile,
        'logo__mobile': isMobile,
        'logo__mobile__collapsed': collapsed && isMobile,
    });

    return (
        <div className={logoClasses}>
            <img src={collapsed && isMobile ? null : (collapsed ? logo_collapsed : logo)}
                alt="cleverFIT logotype" loading='lazy'/>
        </div>
    );
};
