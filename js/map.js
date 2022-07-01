//разметка похожих объявлений временно отображать в блоке, где должна быть карта. Место отрисовки определяем один раз.
const mapElement = document.querySelector('#map-canvas');

const typeHabitation = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

// шаблон #card, забираем то что будем копировать
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

/* Создание карточки объявлений */
const createCardElement = (paramAdvertisement) => {
  const cardElement = popupTemplate.cloneNode(true);

  const titleElement = cardElement.querySelector('.popup__title');
  const addressElement = cardElement.querySelector('.popup__text--address');
  const priceElement = cardElement.querySelector('.popup__text--price');
  const typeElement = cardElement.querySelector('.popup__type');
  const roomsGuestsElement = cardElement.querySelector('.popup__text--capacity');
  const checkinOutElement = cardElement.querySelector('.popup__text--time');
  const descriptionElement = cardElement.querySelector('.popup__description');
  const avatarElement = cardElement.querySelector('.popup__avatar');

  titleElement.textContent = paramAdvertisement.offer.title;
  addressElement.textContent = paramAdvertisement.offer.address;
  priceElement.textContent = `${paramAdvertisement.offer.price} ₽/ночь`;
  typeElement.textContent = typeHabitation[paramAdvertisement.offer.type];
  roomsGuestsElement.textContent = `${paramAdvertisement.offer.rooms} комнаты для ${paramAdvertisement.offer.guests} гостей`;
  checkinOutElement.textContent = `Заезд после ${paramAdvertisement.offer.checkin}, выезд до ${paramAdvertisement.offer.checkout}`;

  if (!paramAdvertisement.offer.description) {
    descriptionElement.remove();
  } else {
    descriptionElement.textContent = paramAdvertisement.offer.description;
  }

  avatarElement.src = paramAdvertisement.author.avatar;

  const featuresContainer = cardElement.querySelector('.popup__features');
  const featureList = featuresContainer.querySelectorAll('.popup__feature');
  const modifiers = paramAdvertisement.offer.features.map( (feature) => `popup__feature--${feature}` );

  featureList.forEach((featureListItem, i) => {
    if (!featureListItem.classList.contains(modifiers[i])) {
      featureListItem.remove();
    }
  });

  const photoSrc = paramAdvertisement.offer.photos;
  const photosContainer = cardElement.querySelector('.popup__photos');
  const photo = photosContainer.querySelector('.popup__photo');

  photoSrc.forEach((value, index) => {
    if (index === 0) {
      photo.src = value;
    } else {
      const photoClone = photo.cloneNode();
      photoClone.src = value;
      photosContainer.append(photoClone);
    }
  });

  return cardElement;
};

const renderCard = (paramElements) => {
  mapElement.appendChild(paramElements);
};

export {
  createCardElement,
  renderCard
};

