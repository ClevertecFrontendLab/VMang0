import { DownloadCard } from '@components/download-card';
import { Button } from 'antd';
import { FC } from 'react';

export const Footer: FC = () => {
    return (
        <div className='footer'>
            <Button type="link"
                    className='reviews_btn'
                    aria-label='view reviews'>Смотреть отзывы</Button>
            <DownloadCard />
        </div>
    );
};
