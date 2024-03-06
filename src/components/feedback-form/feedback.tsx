import { FC } from 'react';
import { Avatar, Col, Layout, Row } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons';
import { CustomRate } from '@utils/style/ant/custom';

type Props = {
    feedback: {
        imageSrc: any,
        rating: number,
        createdAt: string,
        fullName?: string,
        message?: string,
    }
}

export const Feedback: FC<Props> = ({ feedback }) => {
    const { fullName , imageSrc , message = '', rating, createdAt } = feedback;
    const { xs, sm, md } = useBreakpoint();

    const name = fullName || 'Пользователь';
    const [firstName, lastName] = name.split(' ');
    const formattedName = <>{firstName}<br />{lastName}</>;

    return (
        <Layout className='feedback'>
            <Row wrap={!md}>
                <Col flex={xs || sm && !md ? '100%' : '174px'} className='flex_column_col' >
                    <Avatar src={ imageSrc }
                            alt={`user's avatar: ${fullName}`}
                            icon={<UserOutlined />}
                            size={42}
                            className='avatar'/>
                    <h6>{ formattedName }</h6>
                </Col>
                <Col flex={xs ? '100%' : 'auto'}>
                    <Row gutter={xs || sm && !md ? [0, 16] : [0, 12]}>
                        <Col span={24} className='flex_column_row'>
                            <CustomRate disabled
                                        defaultValue={rating}
                                        height='16px'
                                        character={({ value, index }) => {
                                return value && index! < value ? <StarFilled /> : <StarOutlined />
                            }}  />
                            <span className='date'>{ formatDate(createdAt) } </span>
                        </Col>
                        <Col span={24}>
                            <p>{ message }</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

const formatDate = (date: string) => {
    const formatDate = new Date(date);
    const day: number = formatDate.getDate();
    const month: number = formatDate.getMonth() + 1;
    const year: number = formatDate.getFullYear();
    const formattedDay: string = day < 10 ? '0' + day : '' + day;
    const formattedMonth: string = month < 10 ? '0' + month : '' + month;
    return formattedDay + '.' + formattedMonth + '.' + year;
}
