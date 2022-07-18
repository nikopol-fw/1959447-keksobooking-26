import { MAX_PRICE } from './setting.js';

/** Создание слайдера
 * @param {} paramElement - элемент в котором отрисовывается слайдер
 * @param {} paramInput поле ввода значения
 */
const createSlider = (paramElement, paramInput)  => {
  noUiSlider.create(paramElement, {
    range: {
      min: 0,
      max: MAX_PRICE,
    },
    start:0,
    step: 1000,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  paramElement.noUiSlider.on('update', () => {
    paramInput.value = paramElement.noUiSlider.get();
  });
};

const disableSlider = (paramElement) => {
  paramElement.setAttribute('disabled', true);
  const origins = paramElement.querySelectorAll('.noUi-origin');
  origins[0].setAttribute('disabled', true);
};

const enableSlider = (paramElement) => {
  paramElement.removeAttribute('disabled');
  const origins = paramElement.querySelectorAll('.noUi-origin');
  origins[0].removeAttribute('disabled', true);
};

export {createSlider, enableSlider, disableSlider};
