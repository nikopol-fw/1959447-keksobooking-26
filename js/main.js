import { generateArrayAdvertisments } from './data.js';
import {disableForm} from './form.js';
import {sendForm} from './form-validation.js';
import {initMap, addPoints} from './map.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM, COUNT_MATCHING_OPTIONS} from './setting.js';

/** Массив объявлений */
// eslint-disable-next-line no-unused-vars
const advertisments = generateArrayAdvertisments(COUNT_MATCHING_OPTIONS);

/**При открытии страница находится в неактивном состоянии */
disableForm();

initMap(COORDINATE_MAP, COUNT_MAP_ZOOM);

// создание меток объявлений на карте
addPoints(advertisments);

// getData();

sendForm();
