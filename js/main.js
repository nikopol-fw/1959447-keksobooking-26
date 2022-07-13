import { generateArrayAdvertisments } from './data.js';
import {disableForm} from './form.js';
import './form-validation.js';
import {initMap, addPoints} from './map.js';
import { createSlider } from './slider.js';

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('.ad-form__value');


/** Массив объявлений */
// eslint-disable-next-line no-unused-vars
const advertisments = generateArrayAdvertisments(10);

/** Создание карточки */
// eslint-disable-next-line no-unused-vars
// const cardElements = advertisments.map(createCardElement);

/**При открытии страница находится в неактивном состоянии */
disableForm();

initMap([35.68952, 139.69199]);

addPoints(advertisments);

createSlider(sliderElement, valueElement);

//обновление значения слайдера
valueElement.addEventListener('input', () => {
  sliderElement.noUiSlider.updateOptions(
    {
      start: `${valueElement.value}`
    }
  );
});
