const filterElement = document.querySelector('.map__filters');
const selectElements = filterElement.querySelectorAll('select');

/** Блокировка формы с фильтрами */
const disableMapFilters = () => {
  filterElement.classList.add('map__filters--disabled');
  selectElements.forEach((selectElement) => {
    selectElement.disabled = true;
  });
};

/** Разблокировка формы с фильтрами */
const enableMapFilters = () => {
  filterElement.classList.remove('map__filters--disabled');
  selectElements.forEach((selectElement) => {
    selectElement.disabled = true;
  });
};

export {disableMapFilters, enableMapFilters};
