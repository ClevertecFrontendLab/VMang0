import { FC } from 'react';
import { cardItems, dataFirstCard } from '@utils/data/main-page/main-page.js';
import { Button, Card, Col, List, Row, Typography } from 'antd';
import { Footer } from '@components/footer';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { SettingOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;

export const MainPage: FC = () => (
    <div className='content_container'>
        <WelcomeHeader />
        <div className='content_padding content_container_main'>
            <Col xs={24} sm={24} md={24} lg={18} xl={16} className='width-752'>
                <Row>
                    <Col className='list_card'>
                        <Card bordered={false}>
                            <List header={<Text>С CleverFit ты сможешь:</Text>}
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
                    <Col className='text_card'>
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
                    {cardItems.map(({
                                        key, icon, title,
                                        label, aria
                                    }) => (
                        <Col xs={{span: 24}} md={{span: 8}} key={key}>
                            <Card title={title} bordered={false} className='mini_card'>
                                <Button icon={icon} aria-label={aria}>
                                    {label}
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Footer/>
        </div>
    </div>
);

const WelcomeHeader = () => {
    const {lg, md} = useBreakpoint();
    const level = lg ? 1 : (md ? 3 : 4);
    return (
        <Row className='welcome_header'>
            <Col lg={{span: 21}} md={{span: 20}}
                 sm={{span: 20}} xs={{span: 21}}
                 className='title'>
                <Title level={level}>
                    Приветствуем тебя <span className='line_break'/>
                    в CleverFit — приложении, <br/>
                    которое поможет тебе добиться своей мечты!
                </Title>
            </Col>
            <Col lg={{span: 3}} md={{span: 4}}
                 sm={{span: 3}} xs={{span: 2}} className='btn_settings_wrapper'>
                <Button icon={<SettingOutlined/>}
                        className='btn_settings'
                        aria-label='go to settings'>
                    Настройки
                </Button>
            </Col>
        </Row>
    );
}
