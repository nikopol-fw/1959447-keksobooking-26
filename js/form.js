/** Перевод формы в неактивное состояние */
const makesDisabledForm = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
};

export {makesDisabledForm};


// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.
// к элементам добавляется модификатор --disabled




// const formElements = document.querySelector('.ad-form');
// for (let i = 0; i < formElements.childNodes.length; i++) {
//   formElements.childNodes[i].setAttribute('disabled');
// }
