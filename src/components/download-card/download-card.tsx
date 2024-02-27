import { Button, Card, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { FC } from 'react';
const { Text } = Typography;

export const DownloadCard: FC = () => {
    const title = <><Text>Скачать на телефон</Text> Доступно в PRO-тарифе</>
    return (
        <Card title={title}
              bordered={false}
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
