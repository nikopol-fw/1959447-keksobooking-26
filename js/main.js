import { generateArrayAdvertisments } from './data.js';
// import {disableForm} from './form.js';
import './form-validation.js';
import {initMap, addPoints} from './map.js';


/** Массив объявлений */
// eslint-disable-next-line no-unused-vars
const advertisments = generateArrayAdvertisments(10);

/** Создание карточки */
// eslint-disable-next-line no-unused-vars
// const cardElements = advertisments.map(createCardElement);

/**При открытии страница находится в неактивном состоянии */
// disableForm();

initMap([35.68952, 139.69199]);

addPoints(advertisments);

const sliderElement = document.querySelector('.ad-form__slider');
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start:50000,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('slice', (...rest) => {
// eslint-disable-next-line no-console
  console.log(rest);
});

