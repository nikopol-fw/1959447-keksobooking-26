// import {getData} from './api.js';
import {initMap} from './map.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM} from './consts.js';
import {disableFilterForm} from './form-filter.js';
import {disableForm, initForm} from './form.js';
import {disableSlider} from './form-slider.js';

/** Массив объявлений */
// const advertisments = generateArrayAdvertisments(COUNT_MATCHING_OPTIONS);

initForm();

// При открытии страница находится в неактивном состоянии
const disablePage = () => {
  disableFilterForm();
  disableForm();
  disableSlider();
};

disablePage();

initMap(COORDINATE_MAP, COUNT_MAP_ZOOM);

// создание меток объявлений на карте
// addPoints(advertisments);

// getData();


// sendForm();

const getData = () => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line
      console.log(data);
    });
};

getData();

