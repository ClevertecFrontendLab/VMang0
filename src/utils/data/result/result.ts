import { CHANGE_PASSWORD, LOGIN, MAIN, REGISTRATION } from '@utils/constants/route-path/route-path';

const WARNING = 'warning';
const SUCCESS = 'success';
const ERROR = 'error';

export const result = [
    {
        status: WARNING,
        mainTitle: 'Вход не выполнен',
        title: 'Что-то пошло не так. Попробуйте еще раз',
        buttons : [{
            type: 'submit',
            btnName: 'Повторить',
            link: LOGIN,
            testId: 'login-retry-button'
        }]
    },
    {
        status: SUCCESS,
        mainTitle: 'Регистрация успешна',
        title: 'Регистрация прошла успешно. Зайдите в\u00A0приложение, ' +
            'используйте свои e-mail  пароль.',
        buttons : [{
            type: 'submit',
            btnName: 'Войти',
            link: LOGIN,
            testId: 'registration-enter-button'
        }]
    },
    {
        status: ERROR,
        mainTitle: 'Данные не сохранились',
        title: 'Такой email уже записан в системе. Попробуйте ' +
            'зарегистрироваться по другому e-mail.',
        buttons : [{
            type: 'submit',
            btnName: 'Назад к регистрации',
            link: REGISTRATION,
            testId: 'registration-back-button'
        }]
    },
    {
        status: ERROR,
        mainTitle: 'Данные не сохранились',
        title: 'Что-то пошло не так и ваша регистрация не\u00A0завершилась. ' +
            'Попробуйте еще раз.',
        buttons : [{
            type: 'submit',
            btnName: 'Повторить',
            link: REGISTRATION,
            testId: 'registration-retry-button'
        }]
    },
    {
        status: ERROR,
        mainTitle: 'Такой e-mail не зарегистрирован',
        title: 'Мы не нашли в базе вашего e-mail. Попробуйте войти\u00A0с\u00A0другим e-mail.',
        buttons : [{
            type: 'submit',
            btnName: 'Попробовать снова',
            link: LOGIN,
            testId: 'check-retry-button'
        }]
    },
    {
        status: '500',
        mainTitle: 'Что-то пошло не так',
        title: 'Произошла ошибка, попробуйте отправить форму ещё раз.',
        buttons : [{
            type: 'submit',
            btnName: 'Назад',
            link: LOGIN,
            testId: 'check-back-button'
        }]
    },
    {
        status: ERROR,
        mainTitle: 'Данные не сохранились',
        title: 'Что-то пошло не так. Попробуйте ещё раз.',
        buttons : [{
            type: 'submit',
            btnName: 'Повторить',
            link: CHANGE_PASSWORD,
            testId: 'change-retry-button'
        }]
    },
    {
        status: SUCCESS,
        mainTitle: 'Пароль успешно изменен',
        title: 'Теперь можно войти в аккаунт, используя свой\u00A0логин и новый пароль',
        buttons : [{
            type: 'submit',
            btnName: 'Вход',
            link: LOGIN,
            testId: 'change-entry-button'
        }]
    },
];

export const modalResult = [
    {
        status: SUCCESS,
        mainTitle: 'Отзыв успешно опубликован',
        buttons : [{
            type: 'submit',
            btnName: 'Отлично',
            testId: ''
        }]
    },
    {
        status: ERROR,
        mainTitle: 'Данные не сохранились',
        title: 'Что-то пошло не так. Попробуйте ещё раз.',
        buttons : [
            {
                type: 'submit',
                btnName: 'Написать отзыв',
                testId: 'write-review-not-saved-modal'
            },
            {
                type: 'outline',
                btnName: 'Закрыть',
                testId: ''
            }
        ]
    },
    {
        status: '500',
        mainTitle: 'Что-то пошло не так',
        title: 'Произошла ошибка, попробуйте ещё раз.',
        buttons : [{
            type: 'submit',
            btnName: 'Назад',
            testId: '',
            link: MAIN,
        },]
    },
]
