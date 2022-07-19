import {initSlider} from './form-slider.js';
import {validateForm} from './form-validation.js';

const formElement = document.querySelector('.ad-form');
const fieldsetElements = formElement.querySelectorAll('fieldset');
const addressElement = document.querySelector('#address');


const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = true;
  });
};
const enableForm = () => {
  formElement.classList.remove('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = false;
  });
};

//объединит все действия с формой: слайдер, валидация
const initForm = () => {
  initSlider();
  addressElement.readonly = true;
};

// TODO Nikolay: плохой нейминг
// eslint-disable-next-line
const sendForm = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line
    const formData = new FormData(evt.target);
    // eslint-disable-next-line
    if (pristine.validate()) {
      // TODO вставить заглушки Nikolay
      // sendData(formDate, () => {}, () => {});

      // sendData(formData, displayMessageError);
    }
  });
};

export {disableForm, enableForm, initForm};
