import { FC, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { CustomRate, PrimaryButton } from '@utils/style/ant/custom';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { addFeedback } from '@redux/actions/feedback';
import './add-feedback-form.scss';
import { isAddSuccessSelector } from '@redux/slices/feedbackSlice';

type Props = {
    isModalOpen: boolean,
    handleModal: () => void
}

export const AddFeedbackForm: FC<Props> = ({ isModalOpen, handleModal }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [message, setMessage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const isAddSuccess = useSelector(isAddSuccessSelector);

    useEffect(() => {
        if (isAddSuccess) {
            setRating(0);
            setMessage('');
        }
    }, [isAddSuccess])

    const handlePublish = async () => {
        await dispatch(addFeedback({ message, rating }));
        handleModal();
    }

    return (
        <Modal
            title='Ваш отзыв'
            centered
            open={isModalOpen}
            width={539}
            className='add_feedback_modal'
            onCancel={handleModal}
            zIndex={100}
            footer={
                <PrimaryButton onClick={handlePublish}
                               width={{ small: '100%' }}
                               disabled={rating < 1}
                               data-test-id='new-review-submit-button'>
                    Опубликовать
                </PrimaryButton>
            }>
            <CustomRate defaultValue={4}
                        size={20}
                        height='24px'
                        value={rating}
                        onChange={(e) => setRating(e)}
                        character={({ value, index }) => {
                            return value && index! < value ?
                                <StarFilled /> : <StarOutlined style={{ fontSize: '23px' }}/>
                        }}  />
            <TextArea placeholder='Расскажите, почему Вам понравилось наше приложение'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className='text_area'/>
        </Modal>
    );
};
