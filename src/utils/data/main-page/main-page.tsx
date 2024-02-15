import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

export const cardItems = [
    {
        key: '1',
        icon: <HeartFilled />,
        title: 'Расписать тренировки',
        label: 'Тренировки',
        aria: 'schedule training sessions'
    },
    {
        key: '2',
        icon: <CalendarTwoTone />,
        title: 'Назначить календарь',
        label: 'Календарь',
        aria: 'assign a calendar'
    },
    {
        key: '3',
        icon: <IdcardOutlined />,
        title: 'Заполнить профиль',
        label: 'Профиль',
        aria: 'fill out a profile'
    },
];

export const dataFirstCard = [
    'планировать свои тренировки на\u00A0календаре, выбирая тип и\u00A0уровень нагрузки;',
    'отслеживать свои достижения в\u00A0разделе статистики, сравнивая свои результаты ' +
    'с\u00A0нормами и\u00A0рекордами;',
    'создавать свой профиль, где ты можешь загружать свои фото, видео и\u00A0отзывы ' +
    'о\u00A0тренировках;',
    'выполнять расписанные тренировки для\u00A0разных частей тела, следуя подробным ' +
    'инструкциям и\u00A0советам профессиональных тренеров.',
];
