import { Breadcrumb, Layout, Row } from 'antd';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FEEDBACKS, MAIN } from '@utils/constants/route-path/route-path';

export const Header: FC = () => {
    const { pathname } = useLocation();
    return (
        <div className='header_container'>
            <Layout.Header>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to={MAIN}>
                                Главная
                            </Link>
                        </Breadcrumb.Item>
                        {
                            pathname === FEEDBACKS &&
                            <Breadcrumb.Item>
                                <Link to={FEEDBACKS}>
                                    Отзывы пользователей
                                </Link>
                            </Breadcrumb.Item>
                        }
                    </Breadcrumb>
                </Row>
            </Layout.Header>
        </div>
    );
};
