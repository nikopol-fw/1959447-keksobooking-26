import {initMap, addPoints} from './map.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM} from './consts.js';
import {disableFilterForm} from './form-filter.js';
import {disableForm, initForm} from './form.js';
import {disableSlider} from './form-slider.js';
import {displayMessageError} from './message.js';
import {getData} from './api.js';


initForm();

// При открытии страница находится в неактивном состоянии
const disablePage = () => {
  disableFilterForm();
  disableForm();
  disableSlider();
};

disablePage();

initMap(COORDINATE_MAP, COUNT_MAP_ZOOM);

// sendForm();

getData(addPoints, displayMessageError);

// const onGetDataSuccess = () => {

// };

// const onGetDataError = () => {

// };

// getData(onGetDataSuccess);
