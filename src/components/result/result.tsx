import { Button, Result } from 'antd';
import { FC } from 'react';
import { history } from '@redux/configure-store';

type Props = {
    data: {
        status: string,
        mainTitle: string,
        title: string,
        btnName: string,
        link: string,
        testId: string
    }
}

export const ResultWindow: FC<Props> = ({ data }) => {
    const { status, mainTitle, title, btnName, link, testId } = data;
    const handleClick = () => {
        history.replace(link);
    }
    return (
        <Result
            className='result'
            status={status}
            title={mainTitle}
            subTitle={title}
            extra={
                <Button type='primary'
                        data-test-id = {testId}
                        onClick={handleClick}>
                    { btnName }
                </Button>
            }
        />
    );
};
