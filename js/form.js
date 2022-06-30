// задача:
// Реализуйте с помощью JavaScript(удобнее функцией!) перевод страницы в неактивное состояние.Все пункты, кроме первого про карту.

// Напишите функцию, которая будет переводить страницу в активное состояние.

// 1.1. Неактивное состояние. При открытии страница находится в неактивном состоянии:

// На месте карты отображается серый прямоугольник.
// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.


// к элементам добавляется модификатор --disabled

const formElement = document.querySelector('.ad-form');

const makesDisabledForm = () => {
  formElement.classList.add('ad-form--disabled');
};

export {makesDisabledForm};

// import {
//   makesDisabledForm
// } from './form';

// makesDisabledForm();

// const formElements = document.querySelector('.ad-form');
// for (let i = 0; i < formElements.childNodes.length; i++) {
//   formElements.childNodes[i].setAttribute('disabled');
// }
