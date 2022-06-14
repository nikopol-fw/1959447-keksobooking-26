//случайное число в диапазоне с количеством знаков после запятой
function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

//случайный индекс из массива элементов
//Источник - htmlacademy.ru
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Массивы
// TODO Массивы названы существительными во множественном числе.
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.]'
];

// Строки
const titleText = 'Доступный вариант рядом';
const descriptionText = '1 extra-large double bed.';

//Значения ограничивающие диапазоны
const minPrice = 10;
const maxPrice = 100;
const minRooms = 1;
const maxRooms = 6;
const foreverAlone = 1;
const maxGuests = 6;


//возвращает массив строк случайной длины
//источник - https://ru.stackoverflow.com/questions/1293985/
const getNewArrayPhotos = () => {
  const newArray = [];
  const newArrayLength = getRandomPositiveInteger(1, photos.length);

  for (let i = 1; i <= newArrayLength; i++) {
    const options = photos.shift();
    newArray.push(options);
  }

  return newArray;
};

const getNewArrayFeatures = () => {
  const newArray = [];
  const newArrayLength = getRandomPositiveInteger(1, features.length);

  for (let i = 1; i <= newArrayLength; i++) {
    const options = features.shift();
    newArray.push(options);
  }

  return newArray;
};

//todo  Адреса изображений не повторяются.

const offerValue = {
  title: titleText,
  address: 'location.' + getRandomPositiveFloat(35.65000, 35.70000) + ' location.' + getRandomPositiveFloat(139.70000, 139.80000),
  price: getRandomPositiveFloat(minPrice, maxPrice, 0),
  type: types[getRandomPositiveInteger(0, types.length - 1)],
  rooms: getRandomPositiveFloat(minRooms, maxRooms, 0),
  guests: getRandomPositiveFloat(foreverAlone, maxGuests, 0),
  checkin: checkins[getRandomPositiveInteger(0, checkins.length - 1)],
  checkout: checkouts[getRandomPositiveInteger(0, checkouts.length - 1)],
  features: getNewArrayFeatures(),
  description: descriptionText,
  photos: getNewArrayPhotos()
};

const offerLocation = {
  lat: getRandomPositiveFloat(35.65000, 35.70000),
  lng: getRandomPositiveFloat(139.70000, 139.80000)
};

const avatarImg = getRandomPositiveFloat(1, 10, 0) < 10 ? 0 + getRandomPositiveFloat(1, 10, 0) : getRandomPositiveFloat(1, 10, 0);

const createNewPlace = () => {
  return {
    author: 'img/avatars/user' + avatarImg + '.png',
    offers: offerValue,
    location: offerLocation
  };
};

const similarNewPlace = Array.from({
  length: 10
}, createNewPlace);

// eslint-disable-next-line no-console
console.log(similarNewPlace);


// задание 1 - оставлено справочно
/**
 * Функция для получения случайного числа
 * https://javascript.ru/Math.Random
//  * @param {number} min - минимальное значение диапазона;
//  * @param {number} max - максимальное значение диапазона;
//  * @param {number} grade - количество знаков после запятой;
//  * @returns {number}
//  */

// //todo Не добавлена проверка на отрицательное значение grade, тк есть в самом методе to.Fixed

// const getRandomNumber = (min, max, grade) => {
//   if (min < 0 || max < 0 || min > max) {
//     throw new Error('Неверное значение диапазона.');
//   }

//   let randomNumber = Math.random() * (max - min) + min;
//   randomNumber = +randomNumber.toFixed(grade);
//   return randomNumber;
// };

// const generatedNumber = getRandomNumber(50, 500, 4);
// //todo служебное сообщение
// // eslint-disable-next-line no-console
// console.log(generatedNumber);
