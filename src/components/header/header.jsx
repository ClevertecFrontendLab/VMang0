import React from 'react';
import {Button, Col, Layout, Row, Typography} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint.js';
const { Title, Link } = Typography;

const Head = () => {
    const { lg, md } = useBreakpoint();
    const level = lg ? 1 : (md ? 3 : 4)

    return (
        <div className='header_container'>
            <Layout.Header title={'Header'}>
                <Row>
                    <Col span={24}
                         className='header_container__breadcrumb'>
                        <Link>Главная</Link>
                    </Col>
                    <Row className='header_container__wrapper_header'>
                        <Col lg={{ span: 21 }} md={{ span: 20 }}
                             sm={{span: 20}} xs={{ span: 21 }}
                             className='title'>
                            <Title level={level}>
                                Приветствуем тебя <span className='line_break' />
                                в CleverFit — приложении, <br />
                                которое поможет тебе добиться своей мечты!
                            </Title>
                        </Col>
                        <Col lg={{ span: 3 }} md={{ span: 4 }}
                             sm={{span: 3}} xs={{ span: 2 }} className='btn_settings_wrapper'>
                            <Button icon={<SettingOutlined />}
                                    className='btn_settings'>
                                Настройки
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </Layout.Header>
        </div>
    );
};

export default Head;
