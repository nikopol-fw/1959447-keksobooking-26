import {createCardElement} from './cards.js';
import {enableStatePage} from './form.js';
import {COORDINATE_MAP, COUNT_MAP_ZOOM} from './setting.js';


const formElement = document.querySelector('.ad-form');
const addressElement = document.querySelector('#address');
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

//главная метка
const pinIconElement = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinMarkerElement = L.marker(
  COORDINATE_MAP,
  {
    draggable: true,
    icon: pinIconElement,
  },
);

/** Отрисовка карты
 * @param {object} coordinate geographical coordinates
 * @param {Number} count  zoom level
 */
const initMap = (coordinate, count) => {
  map.on('load', () => {
    enableStatePage();

  });
  map.setView(coordinate, count);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  pinMarkerElement.setLatLng(coordinate).addTo(map);
};

pinMarkerElement.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  formElement.querySelector('#address').value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

// отрисовка похожих объявлений
const pinIconSimilarElement = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarker = (paramPoint) => {
  const {lat, lng} = paramPoint.location;
  const marker = L.marker({
    lat,
    lng,
  }, {
    pinIconSimilarElement
  });
  marker.addTo(markerGroup).bindPopup(createCardElement(paramPoint));
};

const addPoints = (paramData) => {
  paramData.forEach((paramPoint) => {
    createMarker(paramPoint);
  });
};

//возврат начальных значений
const resetMap = () => {
  addressElement.value = `${COORDINATE_MAP.lat}, ${COORDINATE_MAP.lng}`;
  pinMarkerElement.setLatLng(COORDINATE_MAP);
  map.setView(COORDINATE_MAP, COUNT_MAP_ZOOM);
};

const clearPinMarkers = () => {
  markerGroup.clearLayers();
};

export {initMap, addPoints, clearPinMarkers, resetMap};

