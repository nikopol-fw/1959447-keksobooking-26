// import { generateArrayAdvertisments } from './data.js';
// // import {disableMapFilters} from './filter-form.js';
// import './form-validation.js';

/** Массив объявлений */
// eslint-disable-next-line no-unused-vars
// const advertisments = generateArrayAdvertisments(10);

/** Создание карточки */
// eslint-disable-next-line no-unused-vars
// const cardElements = advertisments.map(createCardElement);

/**При открытии страница находится в неактивном состоянии */
// disableForm();
// disableMapFilters();

//Блокировка формы с фильтрами
// disableMapFilters();


const map = L.map('map-canvas')
  .setView({
    lat: 35.68952,
    lng: 139.69199,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
