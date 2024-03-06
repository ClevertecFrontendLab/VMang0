import { FC, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { registration } from '@redux/actions/registration';
import { ERROR_REGISTRATION } from '@utils/constants/route-path/route-path';
import { setRegistrationData } from '@redux/slices/userSlice';
import useLocationState from '@hooks/useLocationState';
import useAuthState from '@hooks/useAuthState';
const { useForm } = Form;

export const RegistrationForm: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { previousPath } = useLocationState();
    const { registrationData } = useAuthState();
    const [form] = useForm();

    const handleRegistration = async () => {
        const { email, password } = form.getFieldsValue();
        dispatch(setRegistrationData({ email, password }));
        await dispatch(registration({ email, password }));
    };

    const onChangePassword = () => {
        if (form.isFieldTouched('confirmPassword')) {
            form.validateFields(['confirmPassword']);
        }
    }

    useEffect(() => {
        if (previousPath === ERROR_REGISTRATION && registrationData.password !== '') {
            form.setFieldsValue({
                ...registrationData,
                confirmPassword: registrationData.password
            });
            handleRegistration();
        }
    }, [])

    return (
        <Form name='registration_form'
              form={form}
              className='auth_form auth_form_registr'
              onFinish = {handleRegistration}>
            <Form.Item>
                <Form.Item
                    name='email'
                    data-test-id='registration-email'
                    className='auth_form_input auth_form_input_email'
                    rules={[
                        { required: true, message: '' },
                        { type: 'email', message: '' },
                    ]}
                >
                    <Input type='email' addonBefore='e-mail:' />
                </Form.Item>
                <Form.Item
                    name='password'
                    className='auth_form_input auth_form_input_password'
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    rules={[
                        { required: true, message: '' },
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                        },
                    ]}
                    onChange={onChangePassword}
                >
                    <Input.Password
                        data-test-id='registration-password'
                        placeholder='Пароль'
                        autoComplete='on'
                        iconRender={visible => (visible
                            ? <EyeTwoTone />
                            : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
                <Form.Item
                    name='confirmPassword'
                    data-test-id='registration-confirm-password'
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
            <Form.Item data-test-id='registration-submit-button'
                       className='auth_form_btn_item'
                       shouldUpdate>
                {() => (
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='auth_form_btn'
                        disabled={
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Войти
                    </Button>
                )}
            </Form.Item>
            <Button className='auth_form_google'
                    icon={<GooglePlusOutlined />}>
                Регистрация через Google
            </Button>
        </Form>
    );
};
