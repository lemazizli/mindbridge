// Sample data for psychologists, features, appointments (to be expanded)
export const psychologists = [
  {
    id: 1,
    name: 'Aygün Məmmədova',
    specialty: 'Uşaq və Yeniyetmə',
    rating: 4.9,
    languages: ['AZ', 'RU'],
    price: 30,
    photo: '/psych1.png',
  },
  {
    id: 2,
    name: 'Fariz Quliyev',
    specialty: 'Ailə və Cütlük',
    rating: 4.8,
    languages: ['AZ', 'RU'],
    price: 35,
    photo: '/psych2.png',
  },
  {
    id: 3,
    name: 'Elena Petrova',
    specialty: 'Depressiya və Anksiyete',
    rating: 4.7,
    languages: ['RU'],
    price: 40,
    photo: '/psych3.png',
  },
];

export const features = [
  { icon: 'brain-circuit', title: 'AI Diagnostics', az: 'AI Diaqnostikası', ru: 'AI Диагностика' },
  { icon: 'user-check', title: 'Verified Specialists', az: 'Təsdiqlənmiş Mütəxəssislər', ru: 'Проверенные специалисты' },
  { icon: 'lock', title: 'Privacy', az: 'Gizlilik', ru: 'Конфиденциальность' },
  { icon: 'calendar', title: 'Booking', az: 'Rezervasiya', ru: 'Запись' },
  { icon: 'bar-chart', title: 'Progress Tracking', az: 'Proqress İzləmə', ru: 'Отслеживание прогресса' },
  { icon: 'message-circle', title: 'Messaging', az: 'Mesajlaşma', ru: 'Сообщения' }
];
