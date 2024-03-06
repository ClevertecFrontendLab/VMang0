import { FC } from 'react';
import { DownloadCard } from '@components/download-card';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { getFeedbacks } from '@redux/actions/feedback';

export const Footer: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleGetFeedback = async () => {
        await dispatch(getFeedbacks());
    }
    return (
        <div className='footer'>
            <Button type="link"
                    data-test-id='see-reviews'
                    className='reviews_btn'
                    aria-label='view reviews'
                    onClick={handleGetFeedback}>
                Смотреть отзывы
            </Button>
            <DownloadCard />
        </div>
    );
};
