import {
  generateArrayAdvertisments
} from './data.js';


import {
  mapElement
} from './map.js';

//вызываем функцию генерации данных
const advertisments = generateArrayAdvertisments(1);

// шаблон #card, забираем то что будем копировать
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardElement = popupTemplate.cloneNode(true);

const typeHabitation = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

advertisments.forEach((advertisement) => {

  //вставляем данные
  const title = cardElement.querySelector('.popup__title');
  title.textContent = advertisement.offer.title;

  const address = cardElement.querySelector('.popup__text--address');
  address.textContent = advertisement.offer.address;

  const price = cardElement.querySelector('.popup__text--price');
  price.textContent = `${advertisement.offer.price} ₽/ночь`;

  const type = cardElement.querySelector('.popup__type');
  type.textContent = typeHabitation[advertisement.offer.type];

  const roomsGuests = cardElement.querySelector('.popup__text--capacity');
  roomsGuests.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;

  //Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
  const checkinOut = cardElement.querySelector('.popup__text--time');
  checkinOut.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;

  const features = advertisement.offer.features;
  const featuresContainer = cardElement.querySelector('.popup__features');
  const featureList = featuresContainer.querySelectorAll('.popup__feature');

  featureList.forEach((item) => {
    const isRight = features.some(
      (feature) => item.classList.contains(`popup__feature--${feature}`)
    );
    if (!isRight) {
      item.remove();
    }
  });

  const description = cardElement.querySelector('.popup__description');
  description.textContent = advertisement.offer.description;

  const photoSrc = advertisement.offer.photos;
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

  const avatar = cardElement.querySelector('.popup__avatar');
  avatar.src = advertisement.author.avatar;
});

//отрисовать на карте
mapElement.appendChild(cardElement);
