import {initMap, addPoints} from './map.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM} from './consts.js';
import {initForm, setUserFormSubmit} from './form.js';
import {displayMessageError, displayMessageSuccess} from './message.js';
import {getData} from './api.js';
import {disablePage} from './general.js';
import {DEBOUNCE_DELAY} from './consts.js';
import {setFilterChange, filterMap} from './form-filter.js';
import {debounce} from './util.js';


initForm();
disablePage();
initMap(COORDINATE_MAP, COUNT_MAP_ZOOM);
getData(addPoints, displayMessageError);

setUserFormSubmit(displayMessageSuccess);


getData((data) => {
  addPoints(data);
  setFilterChange(debounce(
    () => filterMap(data),
    DEBOUNCE_DELAY,
  ));
}, displayMessageError);
