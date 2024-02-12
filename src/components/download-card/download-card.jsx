import React from 'react';
import {Button, Card, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Text } = Typography;

const DownloadCard = () => {
    const title = <><Text>Скачать на телефон</Text> Доступно в PRO-тарифе</>
    return (
        <Card title={title} bordered={false}
              className='download_card'>
            <Button icon={<AndroidFilled />}
                    aria-label='download to android'>
                Android OS
            </Button>
            <Button icon={<AppleFilled />}
                    aria-label='download to ios'>
                Apple iOS
            </Button>
        </Card>
    );
};

export default DownloadCard;
