const formElement = document.querySelector('.ad-form');
const fieldsetElements = formElement.querySelectorAll('fieldset');

// TODO Слайдер также должен быть заблокирован - он в fieldset. Дополнительная блокирвока по классу ad-form__slider не сделана.
/** Перевод формы в неактивное состояние */
const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = true;
  });
};

/** Перевод формы в активное состояние */
// TODO временное отключение проверки
// eslint-disable-next-line no-unused-vars
const enableForm = () => {
  formElement.classList.remove('ad-form--disabled');
  fieldsetElements.forEach((fieldElement) => {
    fieldElement.disabled = false;
  });
};

export {disableForm};

