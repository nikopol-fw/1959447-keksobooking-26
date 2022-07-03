import {
  getRandomPositiveFloat,
  getRandomPositiveInteger
} from './util.js';

//работа с массивами

/**
 * Функция перемешивает элементы массива
 * источник - https://habr.com/ru/post/358094/
 * @param {number} j - выбор случайного элемента
 */
const shuffle = (arrayCopy) => {
  let j, temp;
  //перебираем массив с последнего элемента
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    //выбираем случайный элемент массива - j
    j = Math.floor(Math.random() * (i + 1));
    // меняем местами с последним элементом
    temp = arrayCopy[j];
    arrayCopy[j] = arrayCopy[i];
    arrayCopy[i] = temp;
  }
  return arrayCopy;
};

/**
 * Функция создает копию массива с другим количеством и порядком элементов
 */
const getNewArrayItems = (array) => {
  //создаем копию
  const arrayCopy = array.slice();
  //перемешиваем
  shuffle(arrayCopy);
  //случайное число
  const randomIndexItem = getRandomPositiveInteger(0, arrayCopy.length - 1);
  //возвращаем новый массив без случайного количества элементов
  return arrayCopy.slice(randomIndexItem);
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
    features: getNewArrayItems(features),
    description: descriptionText,
    photos: getNewArrayItems(photos)
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
 * @param {number} advertisementCount -количество создаваемых объявлений
 */
const generateArrayAdvertisments = (advertisementCount) => Array.from({
  length: advertisementCount
}, generateAdvertisement);

export {
  generateArrayAdvertisments
};
