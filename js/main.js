// import { generateArrayAdvertisments } from './data.js';
import {disableForm} from './form.js';
import './form-validation.js';
// import {initMap, addPoints} from './map.js';
// import {COORDINATE_MAP, COUNT_MAP_ZOOM} from './setting.js';

/** Массив объявлений */
// eslint-disable-next-line no-unused-vars
// const advertisments = generateArrayAdvertisments(10);

/**При открытии страница находится в неактивном состоянии */
disableForm();

// отрисовка карты
// initMap(COORDINATE_MAP, COUNT_MAP_ZOOM);

// создание меток объявлений на карте
// addPoints(advertisments);

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisments) => {
    // eslint-disable-next-line no-console
    console.log(advertisments);
  });
