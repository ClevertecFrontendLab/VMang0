import { LOGIN, REGISTRATION } from '@utils/constants/route-path/route-path';

const WARNING = 'warning';
const SUCCESS = 'success';
const ERROR = 'error';

export const result = [
    {
        status: WARNING,
        mainTitle: 'Вход не выполнен',
        title: 'Что-то пошло не так. Попробуйте еще раз',
        btnName: 'Повторить',
        link: LOGIN,
        testId: 'login-retry-button'
    },
    {
        status: SUCCESS,
        mainTitle: 'Регистрация успешна',
        title: 'Регистрация прошла успешною Зайдите в приложение, ' +
            'используйте свои e-mail  пароль.',
        btnName: 'Войти',
        link: LOGIN,
        testId: 'registration-enter-button'
    },
    {
        status: ERROR,
        mainTitle: 'Данные не сохранились',
        title: 'Такой email уже записан в системе. Попробуйте ' +
            'зарегистрироваться по другому e-mail.',
        btnName: 'Назад к регистрации',
        link: REGISTRATION,
        testId: 'registration-back-button'
    },
    {
        status: ERROR,
        mainTitle: 'Данные не сохранились',
        title: 'Что-то пошло не так и ваша регистрация не завершилась. ' +
            'Попробуйте еще раз.',
        btnName: 'Повторить',
        link: REGISTRATION,
        testId: 'registration-retry-button'
    }
];
