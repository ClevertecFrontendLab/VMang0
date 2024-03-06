import { Feedback } from '@components/feedback-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch } from '@redux/configure-store';
import { getFeedbacks } from '@redux/actions/feedback';
import { MAIN } from '@utils/constants/route-path/route-path';
import useLocationState from '@hooks/useLocationState';
import { Col, Row } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { LinkButton, PrimaryButton } from '@utils/style/ant/custom';
import { AddFeedbackForm } from '@components/add-feedback-form';
import { modalResult } from '@utils/data/result/result';
import { ModalResultContainer } from '@utils/style/ant/custom-containers';
import { NoFeedback } from '@components/no-feedback-form';
import classNames from 'classnames';
import { setIsGetAllError } from '@redux/slices/feedbackSlice';

export const FeedbacksPage = () => {
    const isGetAllError = useSelector((state) => state.feedback.isGetAllError);
    const isAddError = useSelector((state) => state.feedback.isAddError);
    const isAddSuccess = useSelector((state) => state.feedback.isAddSuccess);
    const feedbacks = useSelector((state) => state.feedback.feedbacks);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isErrorModal, setIsErrorModal] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const [isErrorGetAllModal, setErrorGetAllModal] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const { previousPath } = useLocationState();
    const { xs } = useBreakpoint();
    const isEmpty = feedbacks && feedbacks.length === 0
        ? <NoFeedback setIsModalOpen={setIsModalOpen}/>
        : null;
    const listRef = useRef(null);
    const feedbackClasses = classNames('feedbacks_container content_padding', {
        'feedbacks_container_centered': isEmpty
    });

    const toggleShowAll = () => {
        setShowAll(state => !state);
    };

    const handleGetFeedback = async () => {
        await dispatch(getFeedbacks());
    }
    const handleWriteFeedback = () => {
        setIsErrorModal(false);
        setIsModalOpen(true);
    }
    const handleModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (previousPath !== MAIN) {
            handleGetFeedback();
        }
    }, [])

    useEffect(() => {
        if (listRef.current && feedbacks && showAll) {
            listRef.current.lastElementChild.scrollIntoView({ behavior: 'smooth' });
        }
    }, [feedbacks, showAll]);

    useEffect(() => {
        const handleSuccess = async () => {
            if (isAddSuccess) {
                await handleGetFeedback();
                setIsSuccessModal(true);
            }
        }
        handleSuccess();
    }, [isAddSuccess])

    useEffect(() => {
        if (isGetAllError) {
            setErrorGetAllModal(true);
        }
    }, [isGetAllError])

    useEffect(() => {
        if (isAddError) {
            setIsErrorModal(true);
        }
    }, [isAddError])

    return (
        <div className={feedbackClasses}>
            {isEmpty}
            {
                !isEmpty && feedbacks &&
                <>
                    <Row gutter={xs ? [0, 16] : [0, 20]}
                         className='feedbacks_container_list'
                         ref={listRef}>
                        {feedbacks && (showAll
                            ? feedbacks
                            : feedbacks.slice(-4)).map(({ id, ...feedback }) => (
                            <Col key={id} span={24}>
                                <Feedback feedback={feedback} />
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={xs && [0, 16]} className='feedbacks_container_btn_container'>
                        <Col flex={xs ? '100%' : 'none'}>
                            <PrimaryButton type='primary'
                                           width={{ small: '100%' }}
                                           onClick={() => setIsModalOpen(true)}
                                           data-test-id='write-review'>
                                Написать отзыв
                            </PrimaryButton>
                        </Col>
                        <Col flex={xs ? '100%' : 'none'}>
                            <LinkButton type='link'
                                        size={{ large: '16px' }}
                                        width={{ small: '100%' }}
                                        onClick={toggleShowAll}
                                        data-test-id='all-reviews-button'>
                                { showAll ? 'Свернуть все отзывы' : 'Развернуть все отзывы' }
                            </LinkButton>
                        </Col>
                    </Row>
                </>
            }

            <AddFeedbackForm isModalOpen={isModalOpen}
                             handleModal={handleModal}/>
            <ModalResultContainer open={isSuccessModal}
                                  data={modalResult[0]}
                                  handleClickOk={async () => {
                                      setIsSuccessModal(false);
                                  }}
                                  btnWidth={'100%'}/>
            <ModalResultContainer open={isErrorModal}
                                  data={modalResult[1]}
                                  handleClickOk={handleWriteFeedback}
                                  btnWidth={'49%'}
                                  handleClickCancel={() => {
                                      setIsErrorModal(false)
                                  }}/>
            <ModalResultContainer open={isErrorGetAllModal}
                                  data={modalResult[2]}
                                  handleClickOk={() => {
                                      setErrorGetAllModal(false)
                                      dispatch(setIsGetAllError())
                                  }}
                                  style={'result_specific result_centered'}/>
        </div>
    );
};
