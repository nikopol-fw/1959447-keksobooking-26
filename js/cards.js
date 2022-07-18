const typeHabitation = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
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

  const featuresContainerElement = cardElement.querySelector('.popup__features');
  if (paramAdvertisement.offer.features.lenght === 0) {
    featuresContainerElement.remove();
  } else {
    featuresContainerElement.innerHTML = '';
    const fragment = document.createDocumentFragment();
    paramAdvertisement.offer.features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature');
      featureElement.classList.add(`popup__feature--${feature}`);
      fragment.appendChild(featureElement);
    });
    featuresContainerElement.appendChild(fragment);
  }

  const photosContainerElement = cardElement.querySelector('.popup__photos');
  if (paramAdvertisement.offer.photos.lenght === 0) {
    photosContainerElement.remove();
  } else {
    const photoElement = cardElement.querySelector('.popup__photo');
    const photoFragment = document.createDocumentFragment();
    paramAdvertisement.offer.photos.forEach ((photoSrc) => {
      const photoItem = photoElement.cloneNode(true);
      photoItem.src = photoSrc;
      photoFragment.appendChild(photoItem);
    });
    photosContainerElement.innerHTML = '';
    photosContainerElement.appendChild(photoFragment);
  }
  return cardElement;
};


export {createCardElement};
