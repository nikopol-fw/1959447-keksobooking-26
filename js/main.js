/** Функция генерации случайного числа в диапазоне с количеством знаков после запятой
// * @param {number} a - минимальное значение диапазона;
//  * @param {number} b - максимальное значение диапазона;
//  * @param {number} digits - количество знаков после запятой;
//  * @returns {number}
 **/
function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

/** Функция возвращающая случайное целое число из переданного диапазона включительно
 * https://up.htmlacademy.ru/profession/frontender/13/javascript/26/tasks/8
// * @param {number} a - минимальное значение диапазона;
//  * @param {number} b - максимальное значение диапазона;
//  * @returns {number}
 **/
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Массивы
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

// Значения ограничивающие диапазоны
const minPrice = 10;
const maxPrice = 100;
const minRooms = 1;
const maxRooms = 6;
const foreverAlone = 1;
const maxGuests = 6;

/** Функция возвращает массив строк случайной длины
 * источник - https://ru.stackoverflow.com/questions/1293985/
 * для свойства  photos
 */
const getNewArrayPhotos = () => {
  const newArray = [];
  const newArrayLength = getRandomPositiveInteger(1, photos.length);

  for (let i = 1; i <= newArrayLength; i++) {
    const options = photos.shift();
    newArray.push(options);
  }

  return newArray;
};

/** Функция возвращает массив строк случайной длины
 * источник - https://ru.stackoverflow.com/questions/1293985/
 * для свойства features
 */
const getNewArrayFeatures = () => {
  const newArray = [];
  const newArrayLength = getRandomPositiveInteger(1, features.length);

  for (let i = 1; i <= newArrayLength; i++) {
    const options = features.shift();
    newArray.push(options);
  }

  return newArray;
};

const maxAvatar = 10;
const avatarsImg = Array.from({length: maxAvatar}, (item, index) => {
  const userNumber = index + 1;
  const userNumberString = userNumber < 10 ? `0${userNumber}` : userNumber;
  return `img/avatars/user${userNumberString}.png`;
});

const generateAdvertisement = () => {
  const randomIndex = getRandomPositiveInteger(0, avatarsImg.length - 1);
  const [author] = avatarsImg.splice(randomIndex, 1);

  const offer = {
    title: titleText,
    address: `${getRandomPositiveFloat(35.65000, 35.70000, 5)}, ${getRandomPositiveFloat(139.70000, 139.80000, 5)}`,
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

  const location = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
  };

  return {
    author,
    offer,
    location
  };
};

/** Создание массива объявленной длины
 *  Источник https://up.htmlacademy.ru/profession/frontender/13/javascript/26/demos/7619#12
 */
const similarAdvertisement = Array.from({
  length: 10
}, generateAdvertisement);

// eslint-disable-next-line no-console
console.log(similarAdvertisement);
