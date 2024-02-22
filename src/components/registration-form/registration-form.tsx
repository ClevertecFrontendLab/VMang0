import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { login } from '@redux/actions/login';
const { useForm } = Form;

export const RegistrationForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [form] = useForm();

    const handleLogin = async () => {
        console.log('не зашло')
        const email = 'combtmp+kh1d2@gmail.com';
        const password = '123456mM';
        await sendData(email, password);
    };

    const sendData = async (email: string, password: string) => {
        await dispatch(login({ email, password, isRemember: true }));
    };

    return (
        <Form name='login_form'
              form={form}
              className='auth_form auth_form_registr'
              initialValues={{ remember: true }}
              onFinish = {handleLogin}>
            <Form.Item>
                <Form.Item name="email" className='auth_form_input auth_form_input_email'
                           rules={[{ required: true, message: '' },
                               { type: 'email', message: '' }]}>
                    <Input addonBefore='e-mail:' type='email'/>
                </Form.Item>
                <Form.Item
                    name='password'
                    className='auth_form_input auth_form_input_password'
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    rules={[
                        { required: true, message: '' },
                        {
                            pattern: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                        },
                    ]}
                >
                    <Input.Password
                        placeholder='Пароль'
                        autoComplete='on'
                        iconRender={visible => (visible
                            ? <EyeTwoTone />
                            : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
                <Form.Item
                    name='confirm password'
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
            <Form.Item className='auth_form_btn_item' shouldUpdate>
                {() => (
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='auth_form_btn'
                        disabled={
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                        onClick={handleLogin}
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
