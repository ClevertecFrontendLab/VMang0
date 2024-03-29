import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { login } from '@redux/actions/login';
import { checkEmail } from '@redux/actions/password-recovery';
import { ERROR_CHECK_EMAIL } from '@utils/constants/route-path/route-path';
import { setLoadingState, setRegistrationData } from '@redux/slices/userSlice';
import { BASE_URL } from '@utils/constants/urls/urls';
import useAuthState from '@hooks/useAuthState';
import useLocationState from '@hooks/useLocationState';
const { useForm } = Form;

export const LoginForm: FC = () => {
    const [isForgotDisable, setIsForgotDisable] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const { registrationData } = useAuthState();
    const { previousPath } = useLocationState();
    const [form] = useForm();

    const successHandleWithValidateEmail = useCallback((successHandle: () => void) => {
        form.validateFields(['email'])
            .then(() => successHandle())
            .catch(() => setIsForgotDisable(true));
    }, [form])

    const handleLogin = async () => {
        const { email, password, isRemember } = form.getFieldsValue();
        await dispatch(login({ email, password, isRemember }));
    };

    const handleForgotPassword = () => {
        successHandleWithValidateEmail(() => {
            dispatch(setRegistrationData(form.getFieldsValue()));
            dispatch(checkEmail({ email }))
        })
    }
    const handleGoogleLogin = () => {
        dispatch(setLoadingState(true));
        window.location.replace(`${BASE_URL}/auth/google`);
    };

    useEffect(() => {
        if (form.isFieldTouched('email')) {
            successHandleWithValidateEmail(() =>
                setIsForgotDisable(false))
        }
    }, [form, successHandleWithValidateEmail, email]);

    useEffect(() => {
        if (previousPath === ERROR_CHECK_EMAIL && registrationData.email !== '') {
            form.setFieldsValue({
                email: registrationData.email
            });
            handleForgotPassword();
        }
    }, [])

    return (
        <Form
            name='login_form'
            form={form}
            className='auth_form auth_form_login'
            initialValues={{ isRemember: false }}
            onFinish={handleLogin}
        >
            <Form.Item
                name='email'
                data-test-id='login-email'
                className='auth_form_input auth_form_input_email'
                rules={[
                    { required: true, message: '' },
                    { type: 'email', message: '' },
                ]}
            >
                <Input type='email' addonBefore='e-mail:'
                       onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
                name='password'
                className='auth_form_input auth_form_input_password'
                rules={[
                    { required: true, message: '' },
                    {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/,
                        message: '',
                    },
                ]}
            >
                <Input.Password
                    data-test-id='login-password'
                    placeholder='Пароль'
                    autoComplete='on'
                    iconRender={visible => (visible
                        ? <EyeTwoTone />
                        : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item className='auth_controls'
                       shouldUpdate>
                <Form.Item name='isRemember'
                           valuePropName='checked'
                           noStyle>
                    <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item noStyle>
                    <Button
                        type='link'
                        data-test-id='login-forgot-button'
                        className='auth_controls_forgot'
                        disabled={isForgotDisable}
                        onClick={handleForgotPassword}
                    >
                        Забыли пароль?
                    </Button>
                </Form.Item>
            </Form.Item>
            <Form.Item className='auth_form_btn_item'
                       data-test-id='login-submit-button'
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
                    icon={<GooglePlusOutlined />}
                    onClick={handleGoogleLogin}>
                Войти через Google
            </Button>
        </Form>
    );
};
