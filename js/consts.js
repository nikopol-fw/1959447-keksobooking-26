const COORDINATE_MAP = {
  lat: 35.67543,
  lng: 139.75330,
};
const COUNT_MAP_ZOOM = 13;
const MAX_POINTS_RENDER_LIMIT = 10;

const PriceType = {
  ANY: 'any',
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};
const PriceRange = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const MAX_PRICE = 100000;

const MESSAGE_TIME = 2000;

const DEBOUNCE_DELAY = 500;

const IMAGE_FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const ERROR_MESSAGE = 'Форма не отправлена. Попробуйте еще раз.';


export {
  COORDINATE_MAP,
  COUNT_MAP_ZOOM,
  MAX_POINTS_RENDER_LIMIT,

  PriceType,
  PriceRange,
  MAX_PRICE,
  MESSAGE_TIME,
  DEBOUNCE_DELAY,
  IMAGE_FILE_TYPES,
  ERROR_MESSAGE,
};
