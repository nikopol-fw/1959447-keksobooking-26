import {createSlider} from './slider.js';

const formElement = document.querySelector('.ad-form');
const fieldsetElements = formElement.querySelectorAll('fieldset');
const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('.ad-form__value');

//создание слайдера
createSlider(sliderElement, valueElement);


// TODO Слайдер также должен быть заблокирован - он в fieldset. Дополнительная блокирвока по классу ad-form__slider не сделана.
/** Перевод формы в неактивное состояние */
const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = true;
  });
};

/** Перевод формы в активное состояние */
const enableForm = () => {
  formElement.classList.remove('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = false;
  });
};

//объединит все действия с формой: слайдер, валидация
const initForm = () => {

};

export {disableForm, enableForm, initForm};

