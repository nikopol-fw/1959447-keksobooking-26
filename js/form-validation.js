const formElement = document.querySelector('.ad-form');

const pristine = new Pristine(formElement, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(formElement.querySelector('#title'), validateTitle, 'Заголовок не менее 30 и не более 100 символов');

const validatePrice = (value) => value >= 0 && value <= '100000';
pristine.addValidator(formElement.querySelector('#price'), validatePrice, 'Максимальное значение 100 000');


const validateRoomNumber = function(value) {
  const capacityValue = formElement.querySelector('#capacity').value;

  if(value === '1') {
    return capacityValue === '1';
  } else if(value === '2') {
    return capacityValue === '1' || capacityValue === '2';
  } else if(value === '3') {
    return capacityValue === '1' || capacityValue === '2' || capacityValue === '3';
  } else if(value === '100') {
    return capacityValue === '0';
  }
};

const getRoomNumberErrorMessage = function(value) {
  if(value === '1') {
    return 'Для 1 гостя';
  } else if(value === '2') {
    return 'Возможно не более 2х гостей';
  } else if(value === '3') {
    return 'Возможно не более 3х гостей';
  } else if(value === '100') {
    return 'Не для гостей';
  }
};
// todo если значние становится верным, надпись об ошибке остается
pristine.addValidator(formElement.querySelector('#room_number'), validateRoomNumber, getRoomNumberErrorMessage);


const validateType = (value) => {
  const price = formElement.querySelector('#price');

  if(value === 'bungalow') {
    price.placeholder = 0;
    price.min = 0;
    return true;
  } else if(value === 'flat') {
    price.placeholder = 1000;
    price.min = 1000;
    return true;
  } else if(value === 'hotel') {
    price.placeholder = 3000;
    price.min = 3000;
    return true;
  } else if(value === 'house') {
    price.placeholder = 5000;
    price.min = 5000;
    return true;
  } else if(value === 'palace') {
    price.placeholder = 10000;
    price.min = 10000;
    return true;
  }
};

pristine.addValidator(formElement.querySelector('#type'), validateType);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
