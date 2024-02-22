import { useCallback, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { login } from '@redux/actions/login';
const { useForm } = Form;

export const LoginForm = () => {
    const [form] = useForm();
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState<string>('');
    const [isForgotDisable, setIsForgotDisable] = useState<boolean>(false);

    const handleLogin = async () => {
        /*const email = 'combtmp+kh1d2@gmail.com';
        const password = '123456mM';*/
        const { email, password, isRemember } = form.getFieldsValue();
        await dispatch(login({ email, password, isRemember }));
    };

    const successHandleWithValidateEmail = useCallback((successHandle: () => void) => {
        form.validateFields(['email'])
            .then(() => successHandle())
            .catch(() => setIsForgotDisable(true));
    }, [form])

    const handleForgotPassword = () => {
        successHandleWithValidateEmail(() => console.log('зашло'))
    }

    useEffect(() => {
        if (form.isFieldTouched('email')) {
            successHandleWithValidateEmail(() =>
                setIsForgotDisable(false))
        }
    }, [form, successHandleWithValidateEmail, email])

    return (
        <Form
            name='login_form'
            form={form}
            className='auth_form auth_form_login'
            initialValues={{ remember: true }}
            onFinish={handleLogin}
        >
            <Form.Item
                name='email'
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
                rules={[{ required: true, message: '' }]}
            >
                <Input.Password
                    placeholder='Пароль'
                    autoComplete='on'
                    iconRender={visible => (visible
                        ? <EyeTwoTone />
                        : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item className='auth_controls' shouldUpdate>
                <Checkbox name='isRemember' defaultChecked>Запомнить меня</Checkbox>
                <Button
                    type='link'
                    className='auth_controls_forgot'
                    disabled={isForgotDisable}
                    onClick={handleForgotPassword}
                >
                    Забыли пароль?
                </Button>
            </Form.Item>
            <Form.Item className='auth_form_btn_item' shouldUpdate>
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
                Войти через Google
            </Button>
        </Form>
    );
};
