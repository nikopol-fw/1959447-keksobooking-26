import { clearMap, getAds, renderPoints } from './map.js';
import { MAX_POINTS_RENDER_LIMIT, PriceRange, PriceType } from './consts.js';


const formFilterElement = document.querySelector('.map__filters');
const fieldsetFilterElements = formFilterElement.querySelectorAll('select, input');
const housingTypeElement = formFilterElement.querySelector('#housing-type');
const roomsElement = formFilterElement.querySelector('#housing-rooms');
const guestsNumberElement = formFilterElement.querySelector('#housing-guests');
const priceElement = formFilterElement.querySelector('#housing-price');
const featuresElement = formFilterElement.querySelector('#housing-features');

const disableFilterForm = () => {
  formFilterElement.classList.add('map__filters--disabled');
  fieldsetFilterElements.forEach((fildsetFilterElement) => {
    fildsetFilterElement.disabled = true;
  });
};

const enableFilterForm = () => {
  formFilterElement.classList.remove('map__filters--disabled');
  fieldsetFilterElements.forEach((fildsetFilterElement) => {
    fildsetFilterElement.disabled = false;
  });
};

/**
 * @param {string} housingType
 * @return {boolean}
 */
const checkHousingType = (housingType) => (
  housingTypeElement.value === 'any' || housingType === housingTypeElement.value
);

/**
 * @param {number} rooms
 * @return {boolean}
 */
const checkRooms = (rooms) => (
  roomsElement.value === 'any' || rooms === Number(roomsElement.value)
);

/**
 * @param {number} guestsCount
 * @return {boolean}
 */
const checkGuestsNumber = (guestsCount) => (
  guestsNumberElement.value === 'any' || guestsCount === Number(guestsNumberElement.value)
);

/**
 * @param {number} price
 * @return {boolean}
 */
const checkPrice = (price) => {
  switch (priceElement.value) {
    case PriceType.ANY:
      return true;

    case PriceType.LOW:
      return price < PriceRange.MIDDLE;

    case PriceType.MIDDLE:
      return price >= PriceRange.MIDDLE && price < PriceRange.HIGH;

    case PriceType.HIGH:
      return price > PriceRange.HIGH;

    default:
      return false;
  }
};

/**
 * @param {string[]} features
 * @param {string[]} checkedFeatures
 * @return {boolean}
 */
const checkFeatures = (features, checkedFeatures) => (
  checkedFeatures.every((checkedFeature) => features.includes(checkedFeature))
);

const filterAds = () => {
  clearMap();

  const ads = getAds();
  const checkedFeaturesElements = featuresElement.querySelectorAll('.map__checkbox:checked');
  const checkedFeatures = Array.from(checkedFeaturesElements).map((element) => element.value);
  const filteredAds = [];
  for (const ad of ads) {
    const {offer} = ad;
    if (
      checkHousingType(offer.type)
      && checkRooms(offer.rooms)
      && checkGuestsNumber(offer.guests)
      && checkPrice(offer.price)
      && checkFeatures(offer.features || [], checkedFeatures)
    ) {
      filteredAds.push(ad);
    }

    if (filteredAds.length >= MAX_POINTS_RENDER_LIMIT) {
      break;
    }
  }

  renderPoints(filteredAds);
};

const initFilters = (cb) => {
  formFilterElement.addEventListener('change', cb);
};


export { disableFilterForm, enableFilterForm, filterAds, initFilters };
