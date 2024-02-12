import React from 'react';
import {Button, Card, Col, List, Row, Typography} from 'antd';
import {cardItems, dataFirstCard} from '@utils/data/main-page/main-page.jsx';
const { Text, Title } = Typography;

const MainPage = () => {
    return (
        <div className='content_container'>
            <Col xs={24} sm={24} md={24} lg={18} xl={16} className='width-752'>
                <Row>
                    <Col
                         className='list_card'>
                        <Card bordered={false}>
                            <List
                                header={<Text>С CleverFit ты сможешь:</Text>}
                                dataSource={dataFirstCard}
                                renderItem={item => (
                                    <List.Item>
                                        <Text>—</Text> {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col
                         className='text_card'>
                        <Card bordered={false}>
                            <Title level={4}>
                                CleverFit — это не просто приложение, а твой личный
                                помощник в&nbsp;мире фитнеса.
                                Не откладывай на завтра — начни тренироваться уже&nbsp;сегодня!
                            </Title>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 8]}>
                    {cardItems.map(({ key, icon, title,
                                        label , aria}) => (
                        <Col xs={{ span: 24 }} md={{ span: 8 }} key={key}>
                            <Card title={title} bordered={false}
                                  className='mini_card'>
                                <Button icon={icon}
                                        aria-label={aria}>
                                    {label}
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </div>
    );
};

export default MainPage;
