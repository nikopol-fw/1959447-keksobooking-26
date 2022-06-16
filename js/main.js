/**
 * Функция генерации случайного числа в диапазоне с количеством знаков после запятой
 * @param {number} a - минимальное значение диапазона;
 * @param {number} b - максимальное значение диапазона;
 * @param {number} digits - количество знаков после запятой;
 * @returns {number}
 **/
function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

/**
 * Функция возвращающая случайное целое число из переданного диапазона включительно
 * https://up.htmlacademy.ru/profession/frontender/13/javascript/26/tasks/
 * @param {number} a - минимальное значение диапазона;
 * @param {number} b - максимальное значение диапазона;
 * @returns {number}
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

/**
 * Функция перемешивает элементы массива
 * источник - https://habr.com/ru/post/358094/
 * @param {number} j - выбор случайного элемента
 */
function shuffle(featuresCopy) {
  let j, temp;
  //перебираем массив с последнего элемента
  for (let i = featuresCopy.length - 1; i > 0; i--) {
    //выбираем случайный элемент массива - j
    j = Math.floor(Math.random() * (i + 1));
    // меняем местами с последним элементом
    temp = featuresCopy[j];
    featuresCopy[j] = featuresCopy[i];
    featuresCopy[i] = temp;
  }
  return featuresCopy;
}

/**
 * Функция создает копию массива features с другим количеством и порядком элементов
 */
const getNewArrayFeatures = () => {
  //создаем копию
  const featuresCopy = features.slice();
  //перемешиваем
  shuffle(featuresCopy);
  //случайное число
  const randomIndexFeatures = getRandomPositiveInteger(0, featuresCopy.length - 1);
  //отрезаем некоторое количество элементов
  featuresCopy.splice(randomIndexFeatures, getRandomPositiveFloat(0, features.length-1));
  return (featuresCopy);
};

//todo это дублирование кода?
const getNewArrayPhotos = () => {
  const photosCopy = photos.slice();
  shuffle(photosCopy);
  const randomIndexPhotos = getRandomPositiveInteger(0, photosCopy.length - 1);
  photosCopy.splice(randomIndexPhotos, getRandomPositiveFloat(0, photos.length-1));
  return (photosCopy);
};

const maxAvatar = 10;
/**
 * Создание массива заданной длины
 * @returns {string}
 */
const avatarsImg = Array.from({
  length: maxAvatar
}, (item, index) => {
  const userNumber = index + 1;
  const userNumberString = userNumber < 10 ? `0${userNumber}` : userNumber;
  return `img/avatars/user${userNumberString}.png`;
});

const generateAdvertisement = () => {

  const randomIndex = getRandomPositiveInteger(0, avatarsImg.length - 1);
  const [avatar] = avatarsImg.splice(randomIndex, 1);

  const author = {
    avatar,
  };

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

/**
 * Создание массива объявленной длины
 *  Источник https://up.htmlacademy.ru/profession/frontender/13/javascript/26/demos/7619#12
 */
const similarAdvertisement = Array.from({
  length: 10
}, generateAdvertisement);

// eslint-disable-next-line no-console
console.log(similarAdvertisement);
