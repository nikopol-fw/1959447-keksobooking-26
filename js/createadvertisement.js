import {
  getRandomPositiveFloat,
  getRandomPositiveInteger
} from './util.js';

import {
  getNewArrayItems,
  avatarsImg
} from './form.js';

import {
  titleText,
  descriptionText
} from './data.js';

import {
  types,
  checkins,
  checkouts,
  features,
  photos
} from './data.js';

import {
  minPrice,
  maxPrice,
  minRooms,
  maxRooms,
  foreverAlone,
  maxGuests
} from './data.js';


export const generateAdvertisement = () => {
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
 */
const advertisementCount = 10;

export const similarAdvertisement = () => Array.from({
  length: advertisementCount
}, generateAdvertisement);

