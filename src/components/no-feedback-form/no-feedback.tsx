import { Col, Row, Typography } from 'antd';
import { PrimaryButton } from '@utils/style/ant/custom';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
const { Title, Text } = Typography;

export const NoFeedback = ({ setIsModalOpen }) => {
    const { xs } = useBreakpoint();
    return (
        <Row gutter={xs ? [0, 48] : [0, 20]}
             wrap={false}
             className='no_feedback_container'>
            <Col span={24}>
                <Title level={3}>Оставьте свой отзыв первым</Title>
                <Text>
                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                    Поделитесь своим мнением и опытом с другими пользователями,
                    и помогите им сделать правильный выбор.
                </Text>
            </Col>
            <Col span={24}>
                <PrimaryButton width={{ small: '100%' }}
                               onClick={() => setIsModalOpen(true)}
                               data-test-id='write-review'>
                    Написать отзыв
                </PrimaryButton>
            </Col>
        </Row>
    );
};
