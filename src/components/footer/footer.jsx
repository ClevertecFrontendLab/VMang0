import React from 'react';
import DownloadCard from '@components/download-card';
import { Button } from 'antd';

const Footer = () => {
    return (
        <div className='footer'>
            <Button type="link"
                    className='reviews_btn'
                    aria-label='view reviews'>Смотреть отзывы</Button>
            <DownloadCard />
        </div>
    );
};

export default Footer;
