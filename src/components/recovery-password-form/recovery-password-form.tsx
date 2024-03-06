import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { ERROR_CHANGE_PASSWORD } from '@utils/constants/route-path/route-path';
import { Button, Form, Typography, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { changePassword } from '@redux/actions/password-recovery';
import { passwordSelector, setPassword } from '@redux/slices/recoverySlice';
import classNames from 'classnames';
import useLoadingState from '@hooks/useLoadingState';
import useLocationState from '@hooks/useLocationState';
const { useForm } = Form;

export const RecoveryPasswordForm: FC = () => {
    const password = useSelector(passwordSelector);
    const { isLoadingRecoveryPass } = useLoadingState();
    const { previousPath } = useLocationState();
    const dispatch = useDispatch<AppDispatch>();
    const [form] = useForm();

    const onChangePassword = () => {
        if (form.isFieldTouched('confirmPassword')) {
            form.validateFields(['confirmPassword']);
        }
    }

    const handleFinish = async () => {
        dispatch(setPassword(form.getFieldsValue(['password'])))
        await dispatch(changePassword(form.getFieldsValue()));
    }

    useEffect(() => {
        if (previousPath === ERROR_CHANGE_PASSWORD && password !== '') {
            form.setFieldsValue({
                password,
                confirmPassword: password
            });
            handleFinish();
        }
    }, [])

    return (
        <div  className={classNames('recovery_form', {
            'recovery_form_fixed': isLoadingRecoveryPass
        })}>
            <Form name='recovery_form'
                  form={form}
                  className='auth_form auth_form_registr'
                  initialValues={{ remember: true }}
                  onFinish = {handleFinish}>
                <Typography.Title level={3}>Восстановление аккауанта</Typography.Title>
                <Form.Item>
                    <Form.Item
                        name='password'
                        className='auth_form_input auth_form_input_password'
                        help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        rules={[
                            { required: true, message: '' },
                            {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                message: 'Пароль не менее 8 символов, ' +
                                    'с заглавной буквой и цифрой',
                            },
                        ]}
                        onChange={onChangePassword}
                    >
                        <Input.Password
                            data-test-id='change-password'
                            placeholder='Новый пароль'
                            autoComplete='on'
                            iconRender={visible => (visible
                                ? <EyeTwoTone />
                                : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                    <Form.Item
                        name='confirmPassword'
                        data-test-id='change-confirm-password'
                        className='auth_form_input auth_form_input_password'
                        rules={[{ required: true, message: '' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают'));
                                },
                            }),]}>
                        <Input.Password
                            placeholder='Повторите пароль'
                            autoComplete='on'
                            iconRender={visible => (visible
                                ? <EyeTwoTone />
                                : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item data-test-id='change-submit-button'
                           className='auth_form_btn_item'
                           shouldUpdate>
                    {() => (
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='auth_form_btn'
                            disabled={
                                !!form.getFieldsError()
                                    .filter(({ errors }) => errors.length).length
                            }
                        >
                            Сохранить
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    );
};
