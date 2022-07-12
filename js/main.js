import { generateArrayAdvertisments } from './data.js';
import {disableForm} from './form.js';
import './form-validation.js';
import {addPoints} from './map.js';


/** Массив объявлений */
// eslint-disable-next-line no-unused-vars
const advertisments = generateArrayAdvertisments(10);

/** Создание карточки */
// eslint-disable-next-line no-unused-vars
// const cardElements = advertisments.map(createCardElement);

/**При открытии страница находится в неактивном состоянии */
disableForm();

addPoints(advertisments);
