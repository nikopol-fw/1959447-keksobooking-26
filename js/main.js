import {
  similarAdvertisement
} from './createadvertisement.js';

// eslint-disable-next-line no-console
// console.log(similarAdvertisement);


//отдельный модуль для генерации похожих объявлений - popup.js

//создадим коллекция, ключ-значение.
const typeHabitation = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

//разметка похожих объявлений временно отображать в блоке, где должна быть карта.
const insertAdvertisement = document.querySelector('#map-canvas');

// шаблон #card, забираем то что будем копировать
const elementTemplate = document.querySelector('#card').content.querySelector('.popup');

//вызываем функцию генерации данных
const similarElements = similarAdvertisement();

similarElements.forEach((advertisement) => {

  //клонирование шаблона
  const cardElement = elementTemplate.cloneNode(true);
  //вставляем данные
  const popupTitle = cardElement.querySelector('.popup__title');
  popupTitle.textContent = advertisement.offer.title;

  const popupAddress = cardElement.querySelector('.popup__text--address');
  popupAddress.textContent = advertisement.offer.address;

  const popupPrice = cardElement.querySelector('.popup__text--price');
  popupPrice.textContent = `${advertisement.offer.price} ₽/ночь`;

  const popupType = cardElement.querySelector('.popup__type');
  popupType.textContent = typeHabitation[advertisement.offer.type];

  const popupRoomsGuests = cardElement.querySelector('.popup__text--capacity');
  popupRoomsGuests.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;

  //Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
  const popupCheckinOut = cardElement.querySelector('.popup__text--time');
  popupCheckinOut.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;

  // В список .popup__features выведите все доступные удобства в объявлении.
  const popupFeatures = cardElement.querySelector('.popup__features');
  popupFeatures.textContent = advertisement.offer.features;

  const popupDescription = cardElement.querySelector('.popup__description');
  popupDescription.textContent = advertisement.offer.description;

  // В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
  const popupPhotos = cardElement.querySelector('.popup__photos');
  popupPhotos.textContent = advertisement.offer.photos;

  const popupAvatar = cardElement.querySelector('.popup__avatar');
  popupAvatar.src = advertisement.author.avatar;

  //отрисовать на карте
  insertAdvertisement.appendChild(cardElement);
});
