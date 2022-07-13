/** Создание слайдера
 * @param {} item - элемент в котором отрисовывается слайдер
 * @param {} input поле ввода значения
 */
const createSlider = (item, input)  => {
  noUiSlider.create(item, {
    range: {
      min: 0,
      max: 100000,
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
  item.noUiSlider.on('update', () => {
    input.value = item.noUiSlider.get();
  });
};

export {createSlider};
