import {
  generateArrayAdvertisments
} from './data.js';

import {
  createCardElement,
  renderCard
} from './map.js';

import {
  makesDisabledForm
} from './form.js';

/** Массив объявлений */
const advertisments = generateArrayAdvertisments(5);

/** Создание карточки */
const cardElements = advertisments.map(createCardElement);

/** Отрисовать на карте 1 карточку */
renderCard(cardElements[1]);

makesDisabledForm();
