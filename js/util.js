// Модуль со вспомогательными функциями

/**
 * Функция генерации случайного числа в диапазоне с количеством знаков после запятой
 * @param {number} a - минимальное значение диапазона;
 * @param {number} b - максимальное значение диапазона;
 * @param {number} digits - количество знаков после запятой;
 * @returns {number}
 **/
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

/**
 * Функция возвращающая случайное целое число из переданного диапазона включительно
 * https://up.htmlacademy.ru/profession/frontender/13/javascript/26/tasks/
 * @param {number} a - минимальное значение диапазона;
 * @param {number} b - максимальное значение диапазона;
 * @returns {number}
 **/
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {
  getRandomPositiveFloat,
  getRandomPositiveInteger
};

