// Функция состоит из двух аргументов и должна вернуть день недели. В первый
// мы передаем объект даты и вторым аргументом язык(доступно либо 'en' либо 'ru')
// и функция должна вернуть день недели словом в зависимости от языка. Очень круто,
// если выйдет сделать это ОДНОЙ строкой.
function getDay(date, lang) {
  const dayNames = {
    en: {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    },
    ru: {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота',
    },
  };
  const date1 = new Date(date);
  const date2 = date1.getDay();

  if (lang == 'en') {
    return dayNames.en[date2];
  }
  if (lang == 'ru') {
    return dayNames.ru[date2];
  }
}

// Принимает объект даты, и должно вернуть компоненты даты в виде строки.
// Вид должен быть такой 12:02(часы и минуты), то есть если у вас одно число на одном из
// компонентов, то добавляем 0 перед ним
function formatTime(date) {
  return date.toLocaleTimeString('en-GB').slice(0, -3);
  // return '${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}';
}

/*
Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31
или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
function getLastDayOfMonth(year, month) {
  let date1 = new Date(year, month);
  let date2 = new Date(year, month + 1);
  return (date2 - date1) / 1000 / 3600 / 24;
}

module.exports = {
  getDay,
  formatTime,
  getLastDayOfMonth,
};
